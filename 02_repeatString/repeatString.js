const repeatString = function(s, repeats) {
    let rs = '';
    if(repeats>0){
        for(let n = 0; n < repeats; n++){
            rs+=s;
        }
        return rs;
    } else if(repeats == 0){
        return '';
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
