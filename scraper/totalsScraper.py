import pandas
import numpy
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales_std.csv"

def run():

    totalData = utils.Data(**{
        'url': URL,
        'name': 'totalData',
    })

    totalData.getAndParseCSV()

    def totalManipulator(this):
        data = this.data.pivot_table(index='fecha', columns='dato', values='total')
        data = data.reset_index()
        data = utils.normalizeColumnNames(data)
        return data

    totalData.manipulateData(totalManipulator)

    def structureTotalOutput(this):
        return {
            'latest': this.data['fecha'].max(),
            'totals': {
                'active': utils.filterAndFormat('fecha', 'casos activos', this.data),
                'new': utils.filterAndFormat('fecha', 'casos nuevos totales', this.data),
                'recovered': utils.filterAndFormat('fecha', 'casos recuperados', this.data),
                'totales': utils.filterAndFormat('fecha', 'casos totales', this.data),
                'dead': utils.filterAndFormat('fecha', 'fallecidos', this.data)
            }
        }
    totalData.printData()
    totalData.structureOutput(structureTotalOutput)
    totalData.writeLocal(utils.STORE + 'totals.json')

    return totalData
