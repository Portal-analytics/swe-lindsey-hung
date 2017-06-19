var prompt = require('prompt');
prompt.start();
prompt.get('primes', function (err, result) {
    console.log('Primes ' + result.primes);
    console.log(Factor(result.primes));
});

function Factor(n){
    while (n % 2 == 0) {
        console.log(n);
        n = n / 2;
    }
    var i = 0;
    while (i <= Math.sqrt(n)){ 
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }

    if (n > 2) {
        console.log(n);
    }
}