var prompt = require('prompt');
prompt.start();

prompt.get(['cost', 'payment'], function (err, result) {
    console.log('cost: ' + result.cost);
    console.log('payment: ' + result.payment);
  });

var change = payment - cost;

// change = .80

var quarters = Math.floor(change/(.25));
// quarters = 3
var remainder = change%(.25);
// remainder = .05
if (remainder >= .10) {
    var dimes = Math.floor(remainder/(.10));
    remainder = remainder%(.10);
    // dimes = 2
    // remainder = .04
}
if (remainder >= .05) {
    var nickels = Math.floor(remainder/(.05));
    remainder = remainder%(.05);
}

if (remainder >= .01) {
    var pennies = Math.floor(remainder/(.01));
}