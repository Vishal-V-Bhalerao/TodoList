var morgan = require('morgan')
var bodyParser = require('morgan')

module.exports = function(app){
    app.use(morgan("dev"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
};