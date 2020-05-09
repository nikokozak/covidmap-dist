import numpy
import pandas as pd
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto11/bulk/producto4.csv" # REGIONAL

def run():

    regionalData = utils.Data(**{
        'url': URL,
        'name': 'regionalData',
    })

    regionalData.getAndParseCSV()

    def regionalManipulator(this):
        data_1 = this.data.loc[lambda x: pd.to_datetime(x['fecha']) < '2020-04-29']
        data_2 = this.data.loc[lambda x: pd.to_datetime(x['fecha']) > '2020-04-28']
        data_2 = data_2.drop(columns=['nuevos casos', 'casos confirmados', 'tasa', 'casosnuevossinsintomas*', 'casosnuevosconsintomas'])
        data_2 = data_2.rename(columns={'casosnuevostotales': 'nuevos casos', 'casostotalesacumulados': 'casos confirmados', 'tasa*100000': 'tasa'}) #Tasa*100000 no longer works in origin.
        return data_1.append(data_2)

    regionalData.manipulateData(regionalManipulator)

    regionalData.structureOutput(utils.structureStandardOutput)

    def iterRegionalFormat(this, index):
        region = this.data.loc[lambda x: x['region id'] == index]
        region = region.sort_values(by='fecha')
        this.output['regions'][f'{index}'] = {}
        this.output['regions'][f'{index}'] = {
            'newCases': utils.filterAndFormat('fecha', 'nuevos casos', region),
            'confCases': utils.filterAndFormat('fecha', 'casos confirmados', region),
            'dead': utils.filterAndFormat('fecha', 'fallecidos', region),
        }

    regionalData.iterFormat(1, 17, iterRegionalFormat)
    regionalData.writeLocal(utils.STORE + 'regional.json')

    return regionalData