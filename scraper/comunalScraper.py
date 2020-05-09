import pandas
import numpy
import utils

URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto6/bulk/data.csv"

def run():

    comunalData = utils.Data(**{
        'url': URL,
        'name': 'comunalData',
    })

    comunalData.getAndParseCSV()

    comunalData.structureOutput(utils.structureStandardOutput)

    def iterComunalFormat(this, index): #### DOESNT REALLY MAKE SENSE TO ITERATE?? CAN DO IT ALL AT ONCE PROBABLY.
        dateFilter = this.data['fecha'].max()
        product = this.data.loc[lambda x: x['fecha'] == dateFilter]
        product = this.data.loc[lambda x: x['comuna id'] == x['comuna id']]

        output = this.output['regions']

        for row in product.itertuples():

            row4 = f"{int(row._4)}"
            row6 = f"{int(row._6)}"
            row8 = f"{int(row._8)}"

            if hasattr(output, row4):
                output[row4]['name'] = row.region
            else:
                output[row4] = {} 
                output[row4]['name'] = row.region
            if hasattr(output[row4], row6):
                output[row4][row6]['name'] = row.provincia
            else:
                output[row4][row6] = {}
                output[row4][row6]['name'] = row.provincia
            if hasattr(output[row4][row6], row8):
                output[row4][row6][row8]["name"] = row.comuna
            else:
                output[row4][row6][row8] = {} 
                output[row4][row6][row8]['name']= row.comuna
                output[row4][row6][row8]["data"] = row._2
                output[row4][row6][row8]['date'] = row.fecha

    comunalData.iterFormat(1, 17, iterComunalFormat)
    comunalData.writeLocal(utils.STORE + 'comunal.json')

    return comunalData