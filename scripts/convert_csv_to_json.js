const fs = require('fs')
const path = require('path')
const csvFilePath = path.join(__dirname, '.', 'data/banmeshi.csv')
const csv = require('csvtojson')

csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		console.log(jsonObj)
		fs.writeFile(path.join(__dirname, '.', 'output/banmeshi.json'), JSON.stringify(jsonObj, null, 2), (err) => {
	        if (err) {
	          console.log(err)
	        } else {
	          console.log('finished!')
	        }
		})
	})

