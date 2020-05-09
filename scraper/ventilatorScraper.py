import pandas
import numpy
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto20/NumeroVentiladores_std.csv"

def run():

    ventilatorData = utils.Data(**{
        'url': URL,
        'name': 'ventilatorData',
    })

    ventilatorData.getAndParseCSV()

    def ventilatorManipulator(this):
        data = this.data.pivot(index='fecha', columns='ventiladores', values='numero')
        data = data.reset_index()
        return data

    ventilatorData.manipulateData(ventilatorManipulator)

    def structureVentilatorOutput(this):
        return {
            'latest': this.data['fecha'].max(),
            'ventilators': {
                'occupied': utils.filterAndFormat('fecha', 'ocupados', this.data),
                'available': utils.filterAndFormat('fecha', 'disponibles', this.data),
                'total': utils.filterAndFormat('fecha', 'total', this.data),
            }
        }

    ventilatorData.structureOutput(structureVentilatorOutput)
    ventilatorData.writeLocal(utils.STORE + 'ventilator.json')

    return ventilatorData