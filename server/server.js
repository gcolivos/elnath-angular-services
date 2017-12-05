var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var company = require('./routes/companies');
var car = require('./routes/cars');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/companies', company);
app.use('/cars', car);

app.listen(port, function(){
    console.log('listening on port', port);  
});