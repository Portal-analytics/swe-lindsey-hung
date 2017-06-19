var prompt = require('prompt');
prompt.start();

prompt.get(['cost', 'tax'], function (err, result) {
  
  });

var taxed_cost = cost*tax;
var total_cost = taxed_cost + cost;

console.log('  cost: ' + taxed_cost);
console.log('  cost: ' + total_cost);


