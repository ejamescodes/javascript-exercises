const fibonacci = function(a) {
    let n = parseInt(a);
    let fib = [0, 1];
    if(n > 1){
        for(let i = 1; i <= n; i++){
            fib.push(fib[fib.length-1]+fib[fib.length-2]);
        }
    } else if(n < 0){
        return "OOPS"
    }
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
