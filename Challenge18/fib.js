var prompt = require('prompt');
prompt.start();
prompt.get('FibSeq', function (err, result) {
    console.log('Fibonacci Sequence to ' + result.FibSeq);
    console.log(Fibonacci(result.FibSeq));
});

function Fibonacci(n) {  
    if (n === 0 || n === 1)
        return n;
    else
        return Fibonacci(n - 1) + Fibonacci(n - 2);
}
