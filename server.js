var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use('/assets', express.static(path.join(__dirname, 'app/public/assets')));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function(){
  console.log('Listening on port' + PORT);
});