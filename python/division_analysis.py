import csv
from flask import Flask, jsonify, request
import functools

app = Flask(__name__)

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
		for i in range(1, 11):
			typearray.append([listmap[tmptype][x][i] for x in range(len(listmap[tmptype]))])

	return avgtmpmonth, maxtmpmonth, mintmpmonth

@app.route('/')
def return_data():
	data = get_division_data(request.args.get('state'), request.args.get('division'))
	return jsonify(maxtmp= data[0], mintmp= data[1], avgtmp= data[2])

