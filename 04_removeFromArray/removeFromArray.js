const removeFromArray = function(array, ...args) {
    let arrToRem = [];

    array.forEach((element) => {
        if(!args.includes(element)){
            arrToRem.push(element);
        }
    });
    return arrToRem;
};

// Do not edit below this line
module.exports = removeFromArray;
