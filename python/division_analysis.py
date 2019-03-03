import csv
from flask import Flask, jsonify, request
import functools
import numpy as np

app = Flask(__name__)

statemap = {
'AL':'01',
'NJ':'28',
'AZ':'02',
'NM':'29',
'AR':'03',
'NY':'30',
'CA':'04',
'NC':'31',
'CO':'05',
'ND':'32',
'CT':'06',
'OH':'33',
'DE':'07',
'OK':'34',
'FL':'08',
'OR':'35',
'GA':'09',
'PA':'36',
'ID':'10',
'RI':'37',
'IL':'11',
'SC':'38',
'IN':'12',
'SD':'39',
'IA':'13',
'TN':'40', 
'KS':'14',
'TX':'41',
'KY':'15',
'UT':'42',
'LA':'16',
'VT':'43',
'ME':'17',
'VA':'44',
'MD':'18',
'WA':'45',
'MA':'19',
'WV':'46',
'MI':'20',
'WI':'47',
'MN':'21',
'WY':'48',
'MS':'22',
'AK':'50',
'MS':'23',
'MO':'24',
'NE':'25',
'NV':'26',
'NH':'27',
}

@functools.lru_cache(maxsize=None)
def get_division_data(state, division):
	maxtmpfile = 'climdiv-tmaxdv-v1.0.0-20190204'
	mintmpfile = 'climdiv-tmindv-v1.0.0-20190204'
	avgtmpfile = 'climdiv-tmpcdv-v1.0.0-20190204'

	maxtmpdata = []
	mintmpdata = []
	avgtempdata = []

	for filename, temparray in {maxtmpfile: maxtmpdata, mintmpfile: mintmpdata, avgtmpfile: avgtempdata}.items():
		with open(filename+'.tsv', newline='') as file:
			filedata = csv.reader(file, delimiter=' ')
			for row in filedata:
				rowvalues = list(filter(None, row))
				d = int(''.join(list(rowvalues[0])[:4]))
				if d == int(state+division):
					temparray.append(rowvalues)

	avgtmpmonth = []
	maxtmpmonth = []
	mintmpmonth = []

	listmap = {'maxtmp': maxtmpdata[:-1], 'mintmp': mintmpdata[:-1], 'avgtmp': avgtempdata[:-1]}
	for tmptype, typearray in {'maxtmp': maxtmpmonth, 'mintmp': mintmpmonth, 'avgtmp': avgtmpmonth}.items():	
		for i in range(1, 13):
			typearray.append([listmap[tmptype][x][i] for x in range(len(listmap[tmptype]))])

	return avgtmpmonth, maxtmpmonth, mintmpmonth

def predictions(data):
	avgtmp = data[0]
	maxtmp = data[1]
	mintmp = data[2]

	predictavg = []


	for month in avgtmp:
		#print('month')
		c = np.polyfit([x for x in range(124)], list(map(float, month)), 2)
		predictavg.append([c[0]*x**2 + c[1]*x + c[2] for x in range(124, 173)])

	return predictavg

@app.route('/')
def return_data():
	data = get_division_data(statemap[request.args.get('state')], request.args.get('division'))
	return jsonify(maxtmp= data[0], mintmp= data[1], avgtmp= data[2], prediction= predictions(data))

