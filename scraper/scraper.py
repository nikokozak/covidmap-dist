import uciScraper
import testingScraper
import comunalScraper
import regionalScraper
import ventilatorScraper
import totalsScraper
import criticalScraper
import utils
import time
import sched
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

delay = float(config['TIME']['Delay'])

print("Delay is..", delay)

s = sched.scheduler(time.time, time.sleep)

uci = uciScraper.run()
testing = testingScraper.run()
comunal = comunalScraper.run()
regional = regionalScraper.run()
ventilator = ventilatorScraper.run()
totals = totalsScraper.run()
critical = criticalScraper.run()

mainPage = utils.Data(**{
        'url': '',
        'name': 'mainPage'
    })

def job():

    uci = uciScraper.run()
    testing = testingScraper.run()
    comunal = comunalScraper.run()
    regional = regionalScraper.run()
    ventilator = ventilatorScraper.run()
    totals = totalsScraper.run()
    critical = criticalScraper.run()

    def structureMainPage(this):
        return {
            'latest': totals.output['latest'],
            'totals': {
                'count': totals.data.tail(1)['casos totales'].item(),
                'delta': utils.getDelta(list(totals.data.tail(3)['casos totales'].astype(int)))
            },
            'new': {
                'count': totals.data.tail(1)['casos nuevos totales'].item(),
                'delta': utils.getDelta(list(totals.data.tail(3)['casos nuevos totales'].astype(int)))
            },
            'recovered': {
                'count': totals.data.tail(1)['casos recuperados'].item(),
                'delta': utils.getDelta(list(totals.data.tail(3)['casos recuperados'].astype(int)))
            },
            'dead': {
                'count': totals.data.tail(1)['fallecidos'].item(),
                'delta': utils.getDelta(list(totals.data.tail(3)['fallecidos'].astype(int)))
            },
            'ventilators': {
                'count': ventilator.data.tail(1)['disponibles'].item(),
            },
            'pcr': {
                'count': int(testing.data.tail(16)['pcr realizados'].astype(int).sum()),
            },
            'uci': {
                'count': int(uci.data.tail(16)['numero'].astype(int).sum())
            },
            'tasa': {
                'count': round(testing.data.tail(16)['tasa'].astype(float).mean(), 2)
            },
            'critical': {
                'count': critical.data.tail(1)['casos confirmados'].astype(int).item()
            },
            'dupDays': {
                'count': round(totals.data.tail(1)['casos totales'].astype(int).item() / totals.data.tail(1)['casos nuevos totales'].astype(int).item(), 1)
            }
        }


    mainPage.structureOutput(structureMainPage)

    mainPage.writeLocal(utils.STORE + 'mainPage.json')

    s.enter(delay, 1, job)

s.enter(delay, 1, job)

s.run()

# ADD ARGUMENT HANDLING

""" def clearLogs(files):
    for file in files:
        print(file)
        print('clearing file')
        with open(file, "a+") as f:
            f.seek(0)
            f.truncate(0)
            f.close()

def handleArgs():
    args = sys.argv
    print(args)
    if ('--clearMongo' in args):
        clearMongo(collections)
    if ('--clearLogs' in args):
        clearLogs(files)

handleArgs() """

print('\nExecuted succesfully, no errors to talk about. Check log for details\n')
