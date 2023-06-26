const express = require ('express');
const app = express ();
const fetch = require("node-fetch")
const cors = require("cors")
const port =3004

app.use(cors())


	app.get ('/affirmation', (req,res) => {
		fetch("https://www.affirmations.dev/")
		.then(response => response.json())
		.then(result => {
			console.log(result) 
			res.send(result)
		})
		.catch(error => console.log('error', error));
	})

	app.listen(port, () => {console.log('Affirmation on ' +port)})
	