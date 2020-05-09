import datetime as dt
import requests
import pandas as pd
import numpy as np
import json
import configparser
import pprint as pp
from io import StringIO

config = configparser.ConfigParser()
config.read('config.ini')
STORE = config['DATA']['Store']
SCRAPERLOG = config['LOGS']['Scraper']

def getDelta(vars):
    result = None
    if (len(vars) == 3):
        val1 = vars[1] - vars[0]
        val2 = vars[2] - vars[1]
        result = val2 - val1
    return int(result)

def log(value):
    with open(SCRAPERLOG, "a+") as log:
        date = dt.date.today()
        time = dt.datetime.now().strftime("%H:%M:%S")
        message = '\n{} - {} - {}\n'.format(date, time, value)
        log.write(message)
        print(message)

def getProduct(url):
    try:
        return requests.get(url)
    except:
        log('Error fetching url (getProduct): {}\n'.format(url))
        raise

def streamProduct(product):
    try:
        return StringIO(product.text)
    except:
        log('Error converting response text to stream for product (streamProduct): {}'.format(product))
        raise

def createDataTable(stream):
    try:
        return pd.read_csv(stream)
    except:
        log('Error creating data table for stream (createDataTable): {}'.format(stream))
        raise

def sortByDate(table):
    try:
        if hasattr(table, 'fecha'):
            table.rename(columns={'fecha': 'Fecha'}, inplace = True)
        table.sort_values(by='Fecha', inplace=True)
        return table.loc[lambda x: x['Fecha'] == x['Fecha']]
    except:
        log('Error parsing and sorting dates for table (sortByDate): {}'.format(table))
        raise

def normalizeColumnNames(table):
    try:
        table.columns = map(str.lower, table.columns)
        return table
    except:
        log('Error converting column names to lowercase (normalizeColumnNames)')
        raise

def filterAndFormat(x_val, y_val, table):
    try: 
        return list(map(lambda el: { 'x': el[1], 'y': el[0]}, table[[y_val, x_val]].to_numpy()))
    except:
        log('Error filtering and formatting data from table: {}'.format(table))
        raise
        
def structureStandardOutput(this):
    return {
        'latest': this.data['fecha'].max(),
        'regions': {}
    }

class Data:

    def __init__(self, **data):

        self.externURL = data['url'] 
        self.name = data['name'] 
        self.data = {}
        self.output = {
            'latest': ""
        }

    def getAndParseCSV(self):

        self.data = normalizeColumnNames(sortByDate(createDataTable(streamProduct(getProduct(self.externURL)))))
        print(self.data)

    def manipulateData(self, func):

        self.data = func(self)

    def structureOutput(self, func):

        self.output = func(self)

    def iterFormat(self, startIndex, endIndex, func):

        for index in range(startIndex, endIndex):

            func(self, index)

    def writeLocal(self, file):

        self.latest = self.output['latest']
        confirmWrite = False

        with open(file, "a+") as f:

            f.seek(0)

            try:
                store = json.load(f)
            except:
                store = {}
                store['latest'] = '2010/0/1'
            
            if (store['latest'] < self.latest):

                f.truncate(0)

                json.dump(self.output, f)
                confirmWrite = True

        if (confirmWrite):
            
            log('Succesfully wrote new data to file {}. Date on new data was {}.'.format(file, self.latest))
            return True

        else:

            log('Failed to write new dat to file {}. Date on old data was {}. On new data {}.'.format(file, store['latest'], self.latest))
            return False

    def writeToMongo(self, collection, mhObject):

        mhObject.change_collection(collection)
        mhObject.reset_docs()
        mhObject.create_index()
        mhObject.insert_one(self.output)

    def printData(self):

        pp.pprint(self.data)

    def printOutput(self):
        
        pp.pprint(self.output)
        