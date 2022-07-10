const findTheOldest = function(people) {
    return people.reduce((personA, personB) => {
        const aAge = (!personA.yearOfDeath) ? new Date().getFullYear() - personA.yearOfBirth : personA.yearOfDeath - personA.yearOfBirth;
        const bAge = (!personB.yearOfDeath) ? new Date().getFullYear() - personB.yearOfBirth : personB.yearOfDeath - personB.yearOfBirth;
        return (aAge > bAge) ? personA : personB;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
