var React = require('react');
var ReactDOM = require('react-dom');

function sum () {
  // Randomly return either 'heads' or 'tails'.
  var value = 0;
  var max = 1000;
  var sum = 0;

  for (value = 0; value<max; value++){
      if(value % 3 == 0){
          sum+=value;
      }else if (value % 5 == 0){
          sum+=value;
      }
  }
  return sum;
}

// Write code here:
var val = <h1>Sum of values under 1000 that either are multiples of 3 or 5: {sum()}</h1>;
ReactDOM.render(
  val,
  document.getElementById('app')
);