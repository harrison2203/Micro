const express = require('express');
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const port = 3005;

app.use(cors())

app.get ('/cityname/:ville', (req, res) => {
	const ville = req.params.ville;
	console.log ("Voici la ville",ville)

	fetch('https://geo.api.gouv.fr/communes?codePostal='+ville)
	.then(response => response.json())
	.then(result => {
		  res.send(result)
	  })
	  .catch(error => {
		console.log('error', error)
	  });
  })

  app.listen(port, () => {
	console.log('Commune on ' +port)})

