import express from "express";
import fetch from 'node-fetch';
import cors from "cors";
const port = 3006;
const app = express();

app.use (cors ());

app.get ("/time/europe/:city", (req, res) =>{
	const city = req.params.city;
	console.log (city)

	fetch ('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/'+city)
	.then (response => response.json ())
	.then (data => {
		res.send (data);
	})
	.catch (error => {
		console.log (error);
	})
});

app.listen (port, () => {
	console.log ('city on ' + port)})