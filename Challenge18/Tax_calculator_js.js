var prompt = require('prompt');
prompt.start();

prompt.get(['cost', 'tax'], function (err, result) {
  calcTax(result.cost, result.tax);
  });

function calcTax(cost, tax) {
  var taxed_cost = cost * tax;
  console.log(.7 * 10);
  var total_cost = taxed_cost + cost;

  console.log('cost: ' + taxed_cost);
  console.log('total: ' + total_cost);
}

