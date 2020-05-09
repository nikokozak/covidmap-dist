import pandas
import numpy
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto12/bulk/producto7.csv"

def run():

    testingData = utils.Data(**{
        'url': URL,
        'name': 'testingData',
    })

    testingData.getAndParseCSV()

    def testingManipulator(this):
        data = this.data.tail(48)
        dataTail1 = data.iloc[0:16]['pcr realizados'].astype(int).sum()
        dataTail2 = data.iloc[16:32]['pcr realizados'].astype(int).sum()
        dataTail3 = data.iloc[32:48]['pcr realizados'].astype(int).sum()
        this.dataTail1 = dataTail1
        this.dataTail2 = dataTail2
        this.dataTail3 = dataTail3
        return this.data

    testingData.manipulateData(testingManipulator)

    testingData.structureOutput(utils.structureStandardOutput)

    def iterTestingFormat(this, index):
        region = this.data.loc[lambda x: x['region id'] == index]
        region = region.sort_values(by='fecha')
        this.output['regions'][f"{index}"] = {
            'tests': utils.filterAndFormat('fecha', 'pcr realizados', region)
        }

    testingData.iterFormat(1, 17, iterTestingFormat)
    testingData.writeLocal(utils.STORE + 'testing.json')

    return testingData