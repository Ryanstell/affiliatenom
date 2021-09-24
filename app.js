
var Browser = require('zombie');
var Express = require('express');
var app     = Express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
    const browser = new Browser();
browser.visit("http://shopix.unaux.com", function () {
  console.log('working');
});
 
