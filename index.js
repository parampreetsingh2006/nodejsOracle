const express = require('express')
const app = express()
require('./db-setup');
var apiHandler = require('./api-handlers');
app.post('/add-requirement', (req, res) => apiHandler.addRequirement(req, res));

app.get('/get-requirement', (req, res) => apiHandler.getRequirement(req, res));

app.post('/update-requirement', (req, res) => apiHandler.updateRequirement(req, res));


app.listen(8080, () => console.log('Example app listening on port 8080!'))