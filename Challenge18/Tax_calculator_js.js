var prompt = require('prompt');
prompt.start();

prompt.get(['cost', 'tax'], function (err, result) {
  calcTax(result.cost, result.tax);
  });

function calcTax(cost, tax) {
  var taxRate = Number(cost) * Number(tax);
  let total_cost = Number(taxRate) + Number(cost);

  console.log('cost: ' + cost);
  console.log('total: ' + total_cost);
}

