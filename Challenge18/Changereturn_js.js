var prompt = require('prompt');
prompt.start();

prompt.get(['cost', 'payment'], function (err, result) {
    console.log('cost: ' + result.cost);
    console.log('payment: ' + result.payment);
    calcReturn(result.cost, result.payment);
  });

function calcReturn(cost, payment) {
    var change = payment - cost;
    cents = change * 100;
    console.log("Change: " + cents);

    var quarters = (cents / 25);
    cents %= 25;
    var dimes = (cents / 10);
    cents %= 10;
    var nickels = (cents / 5);
    cents %= 5;
    var pennies = (cents / 1);
    cents %= 1;

    console.log("Q: " + quarters + " D: " + dimes + " N: " + nickels + " P: " + pennies);
}