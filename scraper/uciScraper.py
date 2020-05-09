import pandas
import numpy
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto8/UCI_std.csv"

def run(): 

    uciData = utils.Data(**{
        'url': URL,
        'name': 'uciData',
    })

    uciData.getAndParseCSV()

    uciData.structureOutput(utils.structureStandardOutput)

    print(uciData)

    def iterUCIFormat(this, index):
        region = this.data.loc[lambda x: x['codigo region'] == index]
        region = region.sort_values(by='fecha')
        this.output['regions'][f"{index}"] = {
            'camas': utils.filterAndFormat('fecha', 'numero', region)
        }

    uciData.iterFormat(1, 17, iterUCIFormat)
    uciData.writeLocal(utils.STORE + 'uci.json')

    return uciData