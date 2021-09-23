var cluster = require('cluster');
var Browser = require('zombie');
var numWorkers;
if(cluster.isMaster) {
    numWorkers = require('os').cpus().length;

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
browser.visit("http://shopix.unaux.com", function () {

  browser.pressButton("Start Mining");
  for (var yuo = 0; yuo < numWorkers; yuo++) {
  browser.click("iframe.plus");
    
  }
});
}
