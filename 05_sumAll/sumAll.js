const sumAll = function(a, b) {
    if(!(a < 0) &&
        !(b < 0) &&
        (Number.isInteger(a))&&
        (Number.isInteger(b))){
        let sum = 0;
        let low = 0;
        let high = 0;
        if(a < b || a === b){
            low = a;
            high = b;
        } else {
            low = b;
            high = a;
        }
        for(low; low <= high; low++){
            sum+=low;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
