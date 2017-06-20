var prompt = require('prompt');
prompt.start();

prompt.get(['numOfFlips'], function (err, result) {
    console.log('Number of flips: ' + result.numOfFlips);
    flip(result.numOfFlips)
  });

function flip(numFlip) {
    var random_flip = Math.random() * 100;
    var heads = 0;
    var tails = 0;

    for (i = 0; i < numFlip; i++) {
        if (random_flip > 50) {
            heads + 1;
        }
        if (random_flip <= 50) {
            tails + 1;
        }
    }

    console.log('heads:' + heads);
    console.log('tails: ' + tails);
}