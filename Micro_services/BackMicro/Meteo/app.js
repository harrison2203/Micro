const express = require ('express');
const app = express ();
const fetch = require("node-fetch")
const cors = require("cors")
const port =3007

app.use(cors())




app.listen(port, () => {console.log('Meteo on ' +port)})
