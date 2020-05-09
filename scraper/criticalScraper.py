import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto23/PacientesCriticos_std.csv"

def run():

    criticalData = utils.Data(**{
        'url': URL,
        'name': 'criticalData',
    })

    criticalData.getAndParseCSV()

    def structureCriticalOutput(this):
        output = {
            'latest': this.data['fecha'].max(),
            'critical': {
                'total': int(this.data.tail(1)['casos confirmados'].astype(int).sum())
            } 
        }
        return output
    
    criticalData.structureOutput(structureCriticalOutput)
    criticalData.writeLocal(utils.STORE + 'critical.json')

    return criticalData