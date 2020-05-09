# covidmap-vue-2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### CHART DRAWING

Charts are created via the ChartMaker object, exported from helpers.js

To create a chart:

1. Call ChartMaker.buildChart(options) and assign it to a variable in order to store the instance.
2. ChartMaker.buildChart takes the following options structure:

ChartMaker.buildChart(options) where options is an object:
{
	uniqueId: '12' // An id that will be used by the chart when assigning DOM id's to itself and it's children components.
	container: '#chart' // A container onto which the chart can be appended. The chart will force it's width and height onto the container as min-width and min-height.
	width: 200 // Chart width
	height: 300 // Chart height
	padding: [Top, Right, Bottom, Left] // Defines the padding of the chart - necessary in order for Axes to be visible.

	dataset: [ // Takes multiple 'datasets', i.e. collections of data (see dataset.data), each with its own drawing options.

		{
			data: [{x: Date, y: Number}] // An array of objects, each with an x and y value.
			trendline: Boolean, // Whether to display a 'trendline'.
			pointsOn: Boolean, // Whether points are drawn (defines whether helper lines are present as well)
			label: [String] // Array of strings, defines what label will be used to represent this particular dataset in the legend.
			labelVal: Number // Initial numerical value for the legend.
		}

	]
}

3. The ChartMaker instance has the following keys:

chart = {
	uniqueId,
	container,
	width,
	height,
	padding,
	drawingBounds, // Calculated based on width, height, and padding.
	gridSpacing, // Variable used to determine how the selection grid is drawn.
	yScale, // Initially ChartMaker compares datasets to determine which has the largest range, and creates a d3 xScale and yScale based on this dataset.
	xScale, // See above.
	lineGen, // Linegen created based on the above xScale and yScale,
	trendGen, // Trendline Generator (bundleCurve.beta(0.3)) created based on above xScale, yScale.

	svg, // SVG selection created by d3 on first append.
	yAxis, // yAxis selection created by d3.
	xAxis, // xAxis selection created by d3.
	grid, // paths making up the selector grid, which captures mouse movements in order to re-route hovering behavior.
	currX, // when hovering, currX is set to the X value of the selected point(s).

	dataset: [
		{
			data: [{x, y}],
			xData: [x] // Array of X values created from original data.
			yData: [y] // Array of Y values created from original data.
			lineType: d3.curveType // Unimplemented, option for how to render the data's curve.
			trendLine: Boolean,
			pointsOn: Boolean,
			label: String,
			labelVal: Number,
			xScale: d3.scale // individual xScale for this data.
			yScale: d3.scale // individual yScale for this data.

			line: d3 path selection // the line corresponding to the data once drawn.
			lineId: String // id assigned to the above line.
			trendline: d3 path selection // the trendline corresponding to the data, once drawn.
			points: d3 selection // points once drawn (access through .nodes())
			radius: Number // radius for points.

			helperLine: svg polyline // on hover, a line tracking x and y on the axes.


		}
	]
}

### Testing controller flow

controller: {
	totals: {
		available: true,
		selected: true,
		allows: ['testing', 'cases', 'recovered', 'active', 'dead', 'national', 'regions']
	},
	new: {
		available: true,
		selected: false,
		allows: ['testing', 'cases', 'national', 'regions']
	},
	testing: {
		available: true,
		selected: false,
		allows: ['all']
	},
	cases: {
		available: true,
		selected: true,
		allows: ['national', 'regions']
	},
	recovered: {
		available: true,
		selected: false,
	},
	active: {
		available: true,
		selected: false,
	},
	dead: {
		available: true,
		selected: false,
	},
	national: {
		available: true,
		selected: true,
	},
	regions: {
		available: true,
		selected: false,
		region: {
			'RM': {
				selected: false,
				dataLabel: 'RM',
				dataLabelTotal: 'RMTotal',
				label: 'Region Metropolitana'
			},
			'AP': {
				selected: false,
				dataLabel: 'AP',
				dataLabelTotal: 'APTotal',
				label: 'Arica y Parinacota'
			}
			'TA': {
				selected: false,
				dataLabel: 'TA',
				dataLabelTotal: 'TATotal',
				label: 'Tarapaca'
			},
			'AN': {
				selected: false,
				dataLabel: 'AN',
				dataLabelTotal: 'ANTotal',
				label: 'Antofagasta'
			},
			'AT': {
				selected: false,
				dataLabel: 'AT',
				dataLabelTotal: 'ATTotal',
				label: 'Atacama'
			},
			'CO': {
				selected: false,
				dataLabel: 'CO'
				dataLabelTotal: 'COTotal',
				label: 'Coquimbo'
			},
			'VA': {
				selected: false,
				dataLabel: 'VA',
				dataLabelTotal: 'VATotal',
				label: 'Valparaiso'
			},
			'OH': {
				selected: false,
				dataLabel: 'OH',
				dataLabelTotal: 'OHTotal',
				label: 'OHiggins'
			},
			'MA': {
				selected: false,
				dataLabel: 'MA',
				dataLabelTotal: 'MATotal',
				label: 'Maule'
			},
			'NB': {
				selected: false,
				dataLabel: 'NB',
				dataLabelTotal: 'NBTotal',
				label: 'Nuble'
			},
			'BI': {
				selected: false,
				dataLabel: 'BI',
				dataLabelTotal: 'BITotal',
				label: 'Biobio'
			},
			'AR': {
				selected: false,
				dataLabel: 'AR',
				dataLabelTotal: 'ARTotal',
				label: 'Araucania'
			},
			'LR': {
				selected: false,
				dataLabel: 'LR',
				dataLabelTotal: 'LRTotal',
				label: 'Los Rios'
			},
			'LL': {
				selected: false,
				dataLabel: 'LL',
				dataLabelTotal: 'LLTotal',
				label: 'Los Lagos'
			},
			'AI': {
				selected: false,
				dataLabel: 'AI',
				dataLabelTotal: 'AITotal',
				label: 'Aysen'
			},
			'MG': {
				selected: false,
				dataLabel: 'MG',
				dataLabelTotal: 'MGTotal',
				label: 'Magallanes'
			},
		}
	},
}

selected: {
	totals: true,
}