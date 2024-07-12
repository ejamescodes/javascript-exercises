const findTheOldest = function(people) {
    const ages = people
                    .filter((person) => {
                        'yearOfBirth' in person && 'yearOfDeath' in person;
                    })
                    .sort((a, b) => {
                        let ageA = a.yearOfDeath-a.yearOfBirth;
                        let ageB = b.yearOfDeath-b.yearOfBirth;
                        if(ageA > ageB){
                            return -1;
                        } else {
                            return 1;
                        }
                    });
    const oldest = ages[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
