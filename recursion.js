var recFactorial = function(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * recFactorial(num-1);
    }
}


var tailRecFactorial = function(num, totalSoFar = 1) {
    if (num === 1) {
        return totalSoFar;
    } else {
        return tailRecFactorial(num - 1, totalSoFar * num);
    }
}


console.log(tailRecFactorial(10));
