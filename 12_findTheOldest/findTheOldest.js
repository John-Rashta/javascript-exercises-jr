const findTheOldest = function(people) { 

    return people.reduce((oldest, person) => {

      
        if (!Object.hasOwn(person, "yearOfDeath")) {
            person.yearOfDeath = new Date().getFullYear();
        }

        if (!Object.hasOwn(oldest, "yearOfDeath")) {
            oldest.yearOfDeath = new Date().getFullYear();
        }

        let newAge = person.yearOfDeath - person.yearOfBirth;
        let oldAge = oldest.yearOfDeath - oldest.yearOfBirth;

        return oldAge > newAge ? oldest : person;

    })
};

// Do not edit below this line
module.exports = findTheOldest;
