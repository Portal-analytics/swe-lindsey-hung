var prompt = require('prompt');
prompt.start();

prompt.get(['numOfFlips'], function (err, result) {
    console.log('number of flips: ' + result.numOfFlips);
    console.log(func(result.numOfFlips))
  });


var random_flip = Math.random()*100;
var heads = 0;
var tails = 0;

for( i = 0; i < result.numOfFlips; i++ ) {
if (random_flip > 50) {
    heads + 1;
}
if (random_flip <= 50) {
    tails + 1;
}
}

console.log('heads:' + heads);
console.log('tails' + tails);
