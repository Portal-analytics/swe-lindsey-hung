var prompt = require('prompt');
prompt.start();

prompt.get(['numOfFlips'], function (err, result) {
    console.log('Number of flips: ' + result.numOfFlips);
    flip(result.numOfFlips)
  });

function flip(numFlip) {
    var random_flip = Math.random() * 10;
    var heads = 0;
    var tails = 0;

    console.log(random_flip);

    for (i = 0; i < numFlip; i++) {
        if (random_flip > 5) {
            heads += 1;
        }
        if (random_flip <= 5) {
            tails += 1;
        }
        var random_flip = Math.random() * 10;
    }

    console.log('heads:' + heads);
    console.log('tails: ' + tails);
}