(function(t){function a(a){for(var n,l,i=a[0],s=a[1],c=a[2],u=0,f=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(a);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var s=e[i];0!==r[s]&&(n=!1)}n&&(o.splice(a--,1),t=l(l.s=e[0]))}return t}var n={},r={app:0},o=[];function l(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=n,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)l.d(e,n,function(a){return t[a]}.bind(null,n));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),r=e.n(n);r.a},"3a62":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("MainPage"),e("MainChart")],1)},o=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"chartWrapper",staticClass:"container chartWrapper",attrs:{id:"chartWrapper"}},[t._m(0),e("div",{staticClass:"row selectorRow"},[e("div",{staticClass:"col modeSelectorCol"},[e("b-button-group",{attrs:{size:"sm"}},[e("b-button",{staticClass:"btn btn-light",class:{active:0==t.mode},on:{click:function(a){return t.changeMode(0)}}},[t._v("Totales")]),e("b-button",{staticClass:"btn btn-light",class:{active:1==t.mode},on:{click:function(a){return t.changeMode(1)}}},[t._v("Nuevos")])],1)],1),e("div",{staticClass:"col dropDownCol"},[e("b-dropdown",{attrs:{id:"regionDropdown",size:"sm","no-flip":"",right:"",boundary:"window",text:"Regiones"}},t._l(t.dropDownList,(function(a){return e("b-dropdown-item-button",{key:a,attrs:{active:t.controller[a].active},on:{click:function(e){return t.modify(a)}}},[t._v(t._s(t.controller[a].label))])})),1)],1)]),t._m(1),e("div",{staticClass:"row chartAndLegendRow"},[t._m(2),e("div",{staticClass:"col legend"},[e("b-list-group",{staticClass:"legendGroup"},[e("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center legendItem"},[e("p",{staticClass:"legendHeaderLabel"},[t._v("Fecha:")]),t.data_ready?e("p",{staticClass:"legendHeaderDate"},[t._v(t._s(t.myChart.currX))]):t._e()]),t._l(t.myChart.dataset,(function(a){return e("b-list-group-item",{key:a.dataLabel,staticClass:"d-flex justify-content-between align-items-center legendItem"},[e("b-icon-x-circle",{on:{click:function(e){return t.modify(a.controllerLabel)}}}),t._v(t._s(a.label)+" "),e("b-badge",{style:"background-color:"+a.color,attrs:{variant:"primary",pill:""}},[t._v(" "+t._s(a.labelVal)+" ")])],1)}))],2)],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row sectionTitleRow"},[e("div",{staticClass:"col sectionTitleCol"},[e("hr",{staticClass:"sectionDivider"}),e("h3",{staticClass:"sectionTitle"},[t._v("COMPARAR DATOS")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-start"},[e("div",{staticClass:"col"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col"},[e("div",{attrs:{id:"chart",width:"500",height:"400"}})])}],s=(e("4de4"),e("caad"),e("c975"),e("d81d"),e("7039"),e("b64b"),e("2532"),e("b85c")),c=e("bc3a"),d=e.n(c),u=(e("99af"),e("a15b"),e("a434"),e("2909")),f=e("5698"),p=function(){var t=["Ene","Feb","Mar","Abr","Mayo","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function a(t,a){return t.getDate()+" "+a[t.getMonth()]}function e(t,a,e){return t[a][e].map((function(t){return{x:new Date(t.x),y:t.y}}))}function n(t,a){return console.log("filtering national data",t,a),t.totals[a].map((function(t){return{x:new Date(t.x),y:t.y}}))}function r(t,a,e){return{top:e[0],right:t-e[1]-e[3],bottom:a-e[2],left:e[3]}}function o(t){return t.data.map((function(t){return{x:t.x,y:0}}))}function l(t){t.style("fill","none")}function i(t,a){t.style("stroke",a)}function s(t,a){t.style("stroke-width",a)}function c(t,a){t.style("stroke-dasharray",a)}function d(t,a,e,n){t.transition().duration(n).attr("d",a.lineGen(e.data))}function p(t,a,e,n){t.transition().duration(n).attr("d",a.trendGen(e.data))}function v(t,a,e,n){t.transition().duration(n).attr("cx",(function(t){return a.xScale(t.x)})).attr("cy",(function(t){return a.yScale(t.y)})).attr("r",e.radius?e.radius:3)}function m(t,a){var e=t.svg.append("g").append("path").attr("d",t.lineGen(o(a))).attr("class","line").attr("id",t.id+"-line-"+t.dataset.length);i(e,a.color),l(e),a.line=e,a.lineId=t.id+"-line-"+t.dataset.length,d(e,t,a,700)}function h(t,a){if(a.trendline){var e=t.svg.append("g").append("path").attr("d",t.trendGen(o(a))).attr("class","trendline").attr("id",t.id+"-trendline-"+t.dataset.length);l(e),i(e,a.color),c(e,3),a.trendline=e,p(e,t,a,700)}}function g(t,a){if(a.pointsOn){var e=t.svg.append("g").attr("id",a.lineId+"-points").selectAll("circle").data(a.data).enter().append("circle").attr("cx",(function(a){return t.xScale(a.x)})).attr("cy",t.drawingBounds.bottom).attr("r",0).attr("id",(function(t,e){return a.lineId+"-point-"+e}));i(e,a.color),l(e),s(e,2),a.points=e,v(e,t,a,700)}}function C(t,a){return t.dataset.length>0&&t.dataset[a]?(t.drawingBounds.right-t.drawingBounds.left)/t.dataset[a].data.length/2:void 0}function b(t,a){return f.line().curve(t).x((function(t){return a.xScale(t.x)})).y((function(t){return a.yScale(t.y)}))}function y(e,n,r){var o=e.dataset[n];if(r=r>o.xData.length-1?o.xData.length-1:r,o.labelVal=o.yData[r],n==e.winnerX){var l=a(o.xData[r],t);e.currX!=l&&(e.currX=l)}}function w(t,a,e,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=r.color,l=void 0===o?"black":o,i=r.radius,s=void 0===i?3:i;t.dataset[e].points&&f.select(t.dataset[e].points.nodes()[n]).style("fill","enter"==a?l:"none").style("border-color","red").attr("r",s)}function x(t,a){console.log("Dataset being passed to buildnewdataset",t);var e=Object.assign({},t);console.log("Currdataset after assignment",Array.isArray(e.data)),e.data=e.data.map((function(t){return{x:new Date(t.x),y:t.y}})),console.log("The error is here",e);var n=e.data.map((function(t){return t.x})),r=e.data.map((function(t){return parseInt(t.y)})),o=e.lineType?e.lineType:f.curveLinear,l=!!e.trendLine&&e.trendLine,i=f.scaleTime().domain([n[0],n[n.length-1]]).range([a.drawingBounds.left,a.drawingBounds.right]),s=f.scaleLinear().domain([0,Math.max.apply(Math,Object(u["a"])(r))]).range([a.drawingBounds.bottom,a.drawingBounds.top]);return e.modified=!!Object.prototype.hasOwnProperty.call(e,"modified"),e.xData=n,e.yData=r,e.lineType=o,e.trendLine=l,e.xScale=i,e.yScale=s,e.labelVal=r[r.length-1],e.store=r.join(""),e}function D(t,a){var e=t,n=e.data.map((function(t){return t.x})),r=e.data.map((function(t){return parseInt(t.y)})),o=e.lineType?e.lineType:f.curveLinear,l=!!e.trendLine&&e.trendLine,i=f.scaleTime().domain([n[0],n[n.length-1]]).range([a.drawingBounds.left,a.drawingBounds.right]),s=f.scaleLinear().domain([0,Math.max.apply(Math,Object(u["a"])(r))]).range([a.drawingBounds.bottom,a.drawingBounds.top]);e.modified=!!Object.prototype.hasOwnProperty.call(e,"modified"),e.xData=n,e.yData=r,e.lineType=o,e.trendLine=l,e.xScale=i,e.yScale=s,e.labelVal=r[r.length-1],e.store=r.join("")}function L(t){var a=0,e=0,n={x:0,y:0},r=0,o=t.dataset;if(t.dataset.length>0)for(r;r<o.length;r++){var l=Math.max.apply(Math,Object(u["a"])(o[r].yData)),i=o[r].xData.length;i>a&&(a=i,n.x=r),l>e&&(e=l,n.y=r)}return n}function _(t){var a=t.container.append("svg").attr("width",t.width).attr("height",t.height).attr("id",t.id).append("g").on("mouseleave",(function(){for(var a=0;a<t.dataset.length;a++)y(t,a,t.dataset[a].data.length-1)}));return a}function S(t){var a=t.container.append("svg").attr("width",t.width).attr("height",t.height).attr("id",t.id).append("g").on("mouseleave",(function(){for(var a=0;a<t.dataset.length;a++)y(t,a,t.dataset[a].data.length-1)}));t.svg=a}function A(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=t.svg.append("g").attr("id",t.id+"-y-axis").attr("class","axis").attr("transform","translate(".concat(t.drawingBounds.left+a,", 0)")).call(f.axisLeft(t.yScale));return e}function O(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=t.svg.append("g").attr("id",t.id+"-y-axis").attr("class","axis").attr("transform","translate(".concat(t.drawingBounds.left+a,", 0)")).call(f.axisLeft(t.yScale));t.yAxis=e}function B(t){var a=t.svg.append("g").attr("id",t.id+"-x-axis").attr("class","axis").attr("transform","translate(0, ".concat(t.drawingBounds.bottom,")")).call(f.axisBottom(t.xScale));return a}function M(t){var a=t.svg.append("g").attr("id",t.id+"-x-axis").attr("class","axis").attr("transform","translate(0, ".concat(t.drawingBounds.bottom,")")).call(f.axisBottom(t.xScale));t.xAxis=a}function T(t,a,e){var n=t.dataset[a],r=t.dataset[a].points;if(r){e=e>n.xData.length-1?n.xData.length-1:e;var o=f.select(r.nodes()[e]),l=o.attr("cx"),i=o.attr("cy");t.dataset[a].helperLine=t.svg.append("polyline").attr("points","".concat(l,",").concat(t.drawingBounds.bottom," ").concat(l,",").concat(i," ").concat(t.drawingBounds.left,",").concat(i)).style("fill","none").style("stroke","red").style("stroke-dasharray","3")}}function R(t,a){var e=t.dataset[a];e.helperLine&&(f.select(e.helperLine.node()).remove(),e.helperLine=null)}function E(t,a){console.log("My Current dataset is :",a);var e=t.svg.append("g").attr("id",a.label+"-bars").selectAll("path").data(a.data).enter().append("path").attr("d",(function(a){return"M ".concat(t.xScale(a.x)-t.barWidth," ").concat(t.drawingBounds.bottom,"\n\t\t\tH ").concat(t.xScale(a.x)+t.barWidth,"\n\t\t\tV ").concat(t.yScale(a.y),"\n\t\t\tH ").concat(t.xScale(a.x)-t.barWidth," Z")})).style("fill",a.color).style("stroke","black").attr("class",a.label+"-bar");return e}function I(t,a){if(t.dataset[a]){var e=t.svg.append("g");return e.attr("id",t.id+"-mouseGrid").selectAll("path").data(t.dataset[a].data).enter().append("path").attr("d",(function(a){return"M ".concat(t.xScale(a.x)-t.gridSpacing," 0\n\t\t\t\t\tH ").concat(t.xScale(a.x)+t.gridSpacing,"\n\t\t\t\t\tV ").concat(t.drawingBounds.bottom,"\n\t\t\t\t\tH ").concat(t.xScale(a.x)-t.gridSpacing," Z")})).style("pointer-events","all").attr("class",(function(a,e){return t.id+"-mouseGrid-"+e})).on("mouseenter",(function(a,e){for(var n=0;n<t.dataset.length;n++)y(t,n,e),T(t,n,e),w(t,"enter",n,e,{color:t.dataset[n].color,radius:4})})).on("mouseleave",(function(a,e){for(var n=0;n<t.dataset.length;n++)w(t,"leave",n,e,{color:t.dataset[n].color,radius:3}),R(t,n)})),l(e),e}}function G(t,a){if(t.dataset[a]){var e=t.svg.append("g");e.attr("id",t.id+"-mouseGrid").selectAll("path").data(t.dataset[a].data).enter().append("path").attr("d",(function(a){return"M ".concat(t.xScale(a.x)-t.gridSpacing," 0\n\t\t\t\t\tH ").concat(t.xScale(a.x)+t.gridSpacing,"\n\t\t\t\t\tV ").concat(t.drawingBounds.bottom,"\n\t\t\t\t\tH ").concat(t.xScale(a.x)-t.gridSpacing," Z")})).style("pointer-events","all").attr("class",(function(a,e){return t.id+"-mouseGrid-"+e})).on("mouseenter",(function(a,e){for(var n=0;n<t.dataset.length;n++)y(t,n,e),T(t,n,e),w(t,"enter",n,e,{color:t.dataset[n].color,radius:4})})).on("mouseleave",(function(a,e){for(var n=0;n<t.dataset.length;n++)w(t,"leave",n,e,{color:t.dataset[n].color,radius:3}),R(t,n)})),l(e),t.grid=e}}function N(t,a){if(a){a.sort((function(t,a){return t-a})),console.log("Indices to Delete:",a);for(var e=a.length-1;e>=0;e--){var n=t.dataset[a[e]];console.log("Erasing "+n.dataLabel),n.line&&n.line.select((function(){this.parentNode.remove()})),n.trendline&&n.trendline.select((function(){this.parentNode.remove()})),n.points&&n.points.select((function(){this.parentNode.remove()})),console.log("Index to delete "+a[e]),n=null,t.dataset.splice(a[e],1),console.log("Data Deleted Succesfully"),console.log(t.dataset)}}}function P(t,a){var e=a;e.line&&e.line.transition().duration(700).attr("d",t.lineGen(e.data)),e.trendline&&e.trendline.transition().duration(700).attr("d",t.trendGen(e.data)),e.points&&e.points.data(e.data).transition().duration(700).attr("cy",(function(a){return t.yScale(a.y)})).attr("cx",(function(a){return t.xScale(a.x)})),console.log("Data modified succesfully")}function j(t){var a=!!t.store&&t.store,e=!!t.data&&t.data,n=!!t.yData&&t.yData.join("");return e?e&&a&&a!=n?(t.status="modified","modified"):t.data&&t.store?(t.status="stable","stable"):t.data&&!t.store?(t.status="new","new"):(t.status="erased","erased"):(t.status="erased","erased")}return{months:t,formatDate:a,filterNationalData:n,filterRegionalData:e,defineBounds:r,createZeroValues:o,setNoFill:l,setStrokeColor:i,setStrokeWidth:s,setDashArray:c,transitionLine:d,transitionTrendline:p,transitionPoints:v,drawLine:m,drawTrendline:h,drawPoints:g,drawHelperLines:T,createGridSpacing:C,createLineGen:b,removeHelperLines:R,setLabelVal:y,styleHoverPoint:w,buildNewDataset:D,buildNewDatasetRefac:x,compareAndSelectDatasetByDomain:L,makeSVG:S,makeSVGRefac:_,drawYAxis:O,drawYAxisRefac:A,drawXAxis:M,drawXAxisRefac:B,drawBars:E,drawMouseGrid:G,drawMouseGridRefac:I,deleteDatasets:N,updateDrawnElement:P,checkStatus:j}}(),v=e("5698"),m=window,h=document,g=h.documentElement,C=h.getElementsByTagName("body")[0],b=m.innerWidth||g.clientWidth||C.clientWidth,y=function(){function t(t){var a={};a.uniqueId=t.uniqueId?t.uniqueId:"".concat(Math.round(Math.random(0,255),2)),a.id="chart-"+a.uniqueId,a.container=t.container?t.container:"body",a.width=t.width?t.width:300,a.height=t.height?t.height:300,a.dataset=t.dataset?t.dataset:[{}],a.padding=t.padding?t.padding:[20,20,20,40];var e=a.width/a.height;a.width>b&&(console.log("chart is wider"),a.width=b,a.height=b/e*2),a.drawingBounds=p.defineBounds(a.width,a.height,a.padding);for(var n=0;n<a.dataset.length;n++)p.buildNewDataset(a.dataset[n],a);var r=p.compareAndSelectDatasetByDomain(a);return a.gridSpacing=p.createGridSpacing(a,r.x),a.yScale=a.dataset[r.y].yScale,a.xScale=a.dataset[r.x].xScale,a.defaultXScale=a.xScale,a.defautlYScale=a.yScale,a.lineGen=p.createLineGen(v.curveLinear,a),a.trendGen=p.createLineGen(v.curveBundle.beta(.3),a),a.currX=p.formatDate(a.dataset[r.x].xData[a.dataset[r.x].xData.length-1],p.months),a.winnerX=0,a.winnerY=0,Object.assign({},a)}function a(t){t.container=v.select(t.container),p.makeSVG(t);for(var a=0;a<t.dataset.length;a++)p.drawLine(t,t.dataset[a]),p.drawPoints(t,t.dataset[a]),p.drawTrendline(t,t.dataset[a]);p.drawYAxis(t),p.drawXAxis(t),p.drawMouseGrid(t,0)}function e(t){for(var a=[],e=0;e<t.dataset.length;e++){var n=t.dataset[e],r=p.checkStatus(n);"new"!=r&&"modified"!=r||p.buildNewDataset(n,t),"erased"==n.status&&a.push(t.dataset.indexOf(n))}p.deleteDatasets(t,a);var o=p.compareAndSelectDatasetByDomain(t);t.winnerX=o.x,t.winnerY=o.y,t.yScale=t.dataset.length>0?t.dataset[o.y].yScale:t.defaultYScale,t.xScale=t.dataset.length>0?t.dataset[o.x].xScale:t.defautlXScale,t.lineGen=v.line().curve(v.curveLinear).x((function(a){return t.xScale(a.x)})).y((function(a){return t.yScale(a.y)})),t.trendGen=v.line().curve(v.curveBundle.beta(.3)).x((function(a){return t.xScale(a.x)})).y((function(a){return t.yScale(a.y)}));var l=p.createGridSpacing(t,o.x);t.gridSpacing=l||t.gridSpacing,t.grid.remove(),p.drawMouseGrid(t,o.x);var i=v.axisBottom(t.xScale),s=v.axisLeft(t.yScale);t.dataset.length>0&&(t.xAxis.transition().duration(700).call(i),t.yAxis.transition().duration(700).call(s));for(var c=0;c<t.dataset.length;c++){var d=t.dataset[c];"modified"!=d.status&&"stable"!=d.status||p.updateDrawnElement(t,d),"new"==d.status&&(p.drawLine(t,d),p.drawTrendline(t,d),p.drawPoints(t,d),console.log("Data added succesfully"))}}return{buildChart:t,drawChart:a,updateChart:e}}(),w=e("7386"),x=["AP","TA","AN","AT","CO","VA","OH","MA","BI","AR","LL","AI","MG","RM","LR","AP","NB"],D={totales:{dataLabel:"totales",label:"Casos Totales",controllerLabel:"totales",active:!1,color:"#5FAAD9",mode:["total"]},recovered:{dataLabel:"recovered",label:"Recuperados",controllerLabel:"recovered",active:!1,color:"#D99F6C",mode:["total"]},active:{dataLabel:"active",label:"Activos",controllerLabel:"active",active:!1,color:"#D44A3B",mode:["total"]},dead:{dataLabel:"dead",label:"Fallecidos",controllerLabel:"dead",active:!1,color:"#B35A3D",mode:["total"]},new:{dataLabel:"new",label:"Nacional",controllerLabel:"new",active:!1,color:"#783209",mode:["new"]},RM:{dataLabel:"13",label:"Region Metropolitana",controllerLabel:"RM",active:!1,color:"#3B82BF",mode:["new","total"]},AP:{dataLabel:"15",label:"Arica y Parinacota",controllerLabel:"AP",active:!1,color:"#5FAAD9",mode:["new","total"]},TA:{dataLabel:"1",label:"Tarapaca",controllerLabel:"TA",active:!1,color:"#B6DBF2",mode:["new","total"]},AN:{dataLabel:"2",label:"Antofagasta",controllerLabel:"AN",active:!1,color:"#D99F6C",mode:["new","total"]},AT:{dataLabel:"3",label:"Atacama",controllerLabel:"AT",active:!1,color:"#BF754B",mode:["new","total"]},CO:{dataLabel:"4",label:"Coquimbo",controllerLabel:"CO",active:!1,color:"#591124",mode:["new","total"]},VA:{dataLabel:"5",label:"Valparaiso",controllerLabel:"VA",active:!1,color:"#26091E",mode:["new","total"]},OH:{dataLabel:"6",label:"OHiggins",controllerLabel:"OH",active:!1,color:"#F27B35",mode:["new","total"]},MA:{dataLabel:"7",label:"Maule",controllerLabel:"MA",active:!1,color:"#D95436",mode:["new","total"]},NB:{dataLabel:"16",label:"Nuble",controllerLabel:"NB",active:!1,color:"#A62D2D",mode:["new","total"]},BI:{dataLabel:"8",label:"Biobio",controllerLabel:"BI",active:!1,color:"#D5E2F2",mode:["new","total"]},AR:{dataLabel:"9",label:"Araucania",controllerLabel:"AR",active:!1,color:"#025940",mode:["new","total"]},LR:{dataLabel:"14",label:"Los Rios",controllerLabel:"LR",active:!1,color:"#01402E",mode:["new","total"]},LL:{dataLabel:"10",label:"Los Lagos",controllerLabel:"LL",active:!1,color:"#658C76",mode:["new","total"]},AI:{dataLabel:"11",label:"Aysen",controllerLabel:"AI",active:!1,color:"#9FBF2C",mode:["new","total"]},MG:{dataLabel:"12",label:"Magallanes",controllerLabel:"MG",active:!1,color:"#7ABF36",mode:["new","total"]}},L={name:"MainChart",components:{BIconXCircle:w["s"]},data:function(){return{regionalData:{},nationalData:{},regionMap:x,data_ready:!1,myChart:{currX:"---"},mode:0,controller:D}},computed:{dropDownList:function(){var t=this;return 0==this.mode?Object.keys(this.controller).filter((function(a){return t.controller[a].mode.includes("total")})):Object.keys(this.controller).filter((function(a){return t.controller[a].mode.includes("new")}))}},created:function(){var t=this;d.a.get("/api/regional/").then((function(a){t.regionalData=a.data,d.a.get("/api/totals/").then((function(a){t.nationalData=a.data,t.myChart=y.buildChart({uniqueId:"12",container:"#chart",width:800,height:300,dataset:[{dataLabel:t.controller["totales"].dataLabel,data:p.filterNationalData(t.nationalData,"totales"),label:t.controller["totales"].label,controllerLabel:t.controller["totales"].controllerLabel,pointsOn:!0,trendline:!0,color:t.controller["totales"].color}]}),t.controller["totales"].active=!0,t.$nextTick((function(){y.drawChart(t.myChart)})),t.data_ready=!0}))}))},mounted:function(){},methods:{changeMode:function(t){if(this.mode!==t){var a=[],e=Object.getOwnPropertyNames(this.controller);e.pop();for(var n=0;n<e.length;n++)this.controller[e[n]].active&&(a.push(this.controller[e[n]].dataLabel),this.controller[e[n]].active=!1);var r,o=Object(s["a"])(this.myChart.dataset);try{for(o.s();!(r=o.n()).done;){var l=r.value;a.includes(l.dataLabel)&&(l.data=null)}}catch(i){o.e(i)}finally{o.f()}this.mode=t,y.updateChart(this.myChart)}},modify:function(t){var a=Array.prototype.map.call(this.myChart.dataset,(function(t){return t.dataLabel}));if(a.includes(this.controller[t].dataLabel)){if(a.includes(this.controller[t].dataLabel)){this.controller[t].active=!1;var e=a.indexOf(this.controller[t].dataLabel);this.myChart.dataset[e].data=null,y.updateChart(this.myChart)}}else this.regionMap.includes(t)?(this.controller[t].active=!0,this.myChart.dataset.push({dataLabel:this.controller[t].dataLabel,data:0==this.mode?p.filterRegionalData(this.regionalData.regions,this.controller[t].dataLabel,"confCases"):p.filterRegionalData(this.regionalData.regions,this.controller[t].dataLabel,"newCases"),label:this.controller[t].label,controllerLabel:this.controller[t].controllerLabel,pointsOn:!0,trendline:!0,color:this.controller[t].color})):(this.controller[t].active=!0,this.myChart.dataset.push({dataLabel:this.controller[t].dataLabel,data:p.filterNationalData(this.nationalData,t),label:this.controller[t].label,controllerLabel:this.controller[t].controllerLabel,pointsOn:!0,trendline:!0,color:this.controller[t].color})),y.updateChart(this.myChart)},formatDate:p.formatDate}},_=L,S=e("2877"),A=Object(S["a"])(_,l,i,!1,null,null,null),O=A.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-9 col-md-7 col-lg-5"},[t._m(1),e("div",{staticClass:"row"},[e("div",{staticClass:"col mainCountColumn"},[e("h1",{staticClass:"mainCount",attrs:{id:"confirmedCount"}},[t._v(t._s(t.mainCounter))])]),e("div",{staticClass:"col deltaColumn"},[e("p",{staticClass:"delta"},[t._v("Δ"+t._s(t.mainCounterDelta))]),e("p",{staticClass:"deltaNew"},[t._v("+"+t._s(t.newCounter))])])]),t._m(2),e("div",{staticClass:"row"},[e("div",{staticClass:"col mainCountColumn"},[e("h1",{staticClass:"mainCount"},[t._v(t._s(t.newCounter))])]),e("div",{staticClass:"col deltaColumn"},[e("p",{staticClass:"delta"},[t._v("Δ"+t._s(t.newCounterDelta))])])]),t._m(3),e("div",{staticClass:"row"},[e("div",{staticClass:"col mainCountColumn"},[e("h1",{staticClass:"mainCount"},[t._v(t._s(t.recoveredCounter))])]),e("div",{staticClass:"col deltaColumn"},[e("p",{staticClass:"delta"},[t._v("Δ"+t._s(t.recoveredCounterDelta))])])]),t._m(4),e("div",{staticClass:"row"},[e("div",{staticClass:"col mainCountColumn"},[e("h1",{staticClass:"mainCount"},[t._v(t._s(t.deadCounter))])]),e("div",{staticClass:"col deltaColumn"},[e("p",{staticClass:"delta"},[t._v("Δ"+t._s(t.deadCounterDelta))])])])]),e("div",{staticClass:"col-12 col-sm-3 col-md-5 col-lg-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("VENTILADORES")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.ventilatorCounter))])]),e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("TESTEO DIARIO")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.dailyTestingCounter))])]),e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("PACIENTES UCI")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.uciPatientsCounter))])]),e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("TASA")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.tasaCounter))])]),e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("CRITICOS")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.criticalCounter))])]),e("div",{staticClass:"col-4 col-sm-12 col-lg-5 miniCountColumn"},[e("p",{staticClass:"miniDescriptor"},[t._v("DIAS A DUP.")]),e("p",{staticClass:"miniCount"},[t._v(t._s(t.dupDaysCounter))])])])])]),t._m(5)])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row siteTitleRow"},[e("div",{staticClass:"col siteTitleColumn"},[e("h3",{staticClass:"siteTitle"},[t._v("CORONAVIRUS EN CHILE")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col mainDescriptorColumn"},[e("h6",{staticClass:"mainDescriptor"},[t._v("CASOS CONFIRMADOS")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col mainDescriptorColumn"},[e("h6",{staticClass:"mainDescriptor"},[t._v("CASOS NUEVOS")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col mainDescriptorColumn"},[e("h6",{staticClass:"mainDescriptor"},[t._v("RECUPERADOS")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col mainDescriptorColumn"},[e("h6",{staticClass:"mainDescriptor"},[t._v("FALLECIDOS")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"})])}],T={name:"MainPage",components:{},data:function(){return{mainCounter:"000",mainCounterDelta:"000",newCounter:"000",newCounterDelta:"000",recoveredCounter:"000",recoveredCounterDelta:"000",deadCounter:"000",deadCounterDelta:"000",ventilatorCounter:"000",dailyTestingCounter:"000",uciPatientsCounter:"000",tasaCounter:"000",criticalCounter:"000",dupDaysCounter:"0.0",dateUpdated:"24 de Mayo"}},created:function(){var t=this;d.a.get("/api/main/").then((function(a){var e=a.data;t.dateUpdated=e.latest.date,t.mainCounter=e.totals.count,t.mainCounterDelta=e.totals.delta,t.newCounter=e.new.count,t.newCounterDelta=e.new.delta,t.recoveredCounter=e.recovered.count,t.recoveredCounterDelta=e.recovered.delta,t.deadCounter=e.dead.count,t.deadCounterDelta=e.dead.delta,t.ventilatorCounter=e.ventilators.count,t.dailyTestingCounter=e.pcr.count,t.uciPatientsCounter=e.uci.count,t.tasaCounter=e.tasa.count,t.criticalCounter=e.critical.count,t.dupDaysCounter=e.dupDays.count}))}},R=T,E=Object(S["a"])(R,B,M,!1,null,null,null),I=E.exports,G={name:"App",components:{MainChart:O,MainPage:I},mounted:function(){}},N=G,P=(e("034f"),Object(S["a"])(N,r,o,!1,null,null,null)),j=P.exports,k=e("5f5b");e("3a62"),e("f9e3"),e("2dd8");n["default"].use(k["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.d69a4cf4.js.map