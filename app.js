var cluster = require('cluster');
var Browser = require('zombie');

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
   const browser = new Browser();
browser.visit("https://autoclaim.in/wmi/Ryangold", function () {

  browser.pressButton("Start Mining");
  for (var yu = 0; yu < numWorkers; yu++) {
  browser.click(".plus");
    
  }
});
it('should be successful', function() {
      browser.assert.success();
    });
it('should see welcome page', function() {
      browser.assert.text('.th-text', numWorkers);
    });
}