    // const findTheOldest = function(array) {
    //      for (let i = 0; i < array.length; i++) {
    //     array[i].yearsLived = (array[i].yearOfDeath) - (array[i].yearOfBirth); //calc yearsLived
    // }   array.sort((a, b) => b.yearsLived - a.yearsLived);
    //     return array[0];
    // }


        const findTheOldest = function(array) {
         for (let i = 0; i < array.length; i++) {
            if (array[i].yearOfDeath == undefined) {
               array[i].yearOfDeath = new Date().getFullYear();
               array[i].yearsLived = (array[i].yearOfDeath) - (array[i].yearOfBirth); //calc yearsLived
               array.sort((a, b) => b.yearsLived - a.yearsLived);
                
            } else {
                array[i].yearsLived = (array[i].yearOfDeath) - (array[i].yearOfBirth); //calc yearsLived
                array.sort((a, b) => b.yearsLived - a.yearsLived);
                
            }
        } return array[0];
    }











// // Do not edit below this line
module.exports = findTheOldest;


// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

//     // people[0].yearsLived = (people[0].yearOfDeath) - (people[0].yearOfBirth);
    

//     // console.log(people[0]);

//     for (let i = 0; i < people.length; i++) {
//         people[i].yearsLived = (people[i].yearOfDeath) - (people[i].yearOfBirth); //calc yearsLived
//     }

//     console.log(people);


     
//     people.sort((a, b) => b.yearsLived - a.yearsLived);

//     console.log(people);


    // const findTheOldest = function(array) {
    //      for (let i = 0; i < people.length; i++) {
    //     people[i].yearsLived = (people[i].yearOfDeath) - (people[i].yearOfBirth); //calc yearsLived
    // }   people.sort((a, b) => b.yearsLived - a.yearsLived);
    //     return people[0];
    // }

    //     const findTheOldest = function(array) {
    //      for (let i = 0; i < array.length; i++) {
    //         if (array[i].yearOfDeath == undefined) {
    //            array[i].yearOfDeath = getFullYear();
    //            array[i].yearsLived = (array[i].yearOfDeath) - (array[i].yearOfBirth); //calc yearsLived
    //            array.sort((a, b) => b.yearsLived - a.yearsLived);
    //             return array[0];
    //         } else {
    //             array[i].yearsLived = (array[i].yearOfDeath) - (array[i].yearOfBirth); //calc yearsLived
    //             array.sort((a, b) => b.yearsLived - a.yearsLived);
    //             return array[0];
    //         }
    //     }
    // }