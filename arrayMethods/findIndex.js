
//findIndex
// returns the first index of the element that matches the criteria given 

const peopleArray = [
    { firstName: 'John', lastName: 'Doe', age: 30, profession: 'Software Engineer' },
    { firstName: 'Jane', lastName: 'Smith', age: 25, profession: 'Graphic Designer' },
    { firstName: 'Michael', lastName: 'Johnson', age: 40, profession: 'Data Scientist' },
    { firstName: 'Emily', lastName: 'Williams', age: 35, profession: 'Marketing Specialist' },
    { firstName: 'Daniel', lastName: 'Brown', age: 28, profession: 'UX/UI Designer' },
    { firstName: 'Olivia', lastName: 'Davis', age: 32, profession: 'Financial Analyst' },//A
    { firstName: 'Olivia', lastName: 'Yim', age: 25, profession: 'Good at everythign' }, //B
    { firstName: 'William', lastName: 'Jones', age: 45, profession: 'Architect' },
    { firstName: 'Sophia', lastName: 'Moore', age: 27, profession: 'Teacher' },
    { firstName: 'Ethan', lastName: 'Miller', age: 38, profession: 'Project Manager' },
    { firstName: 'Ava', lastName: 'Wilson', age: 33, profession: 'Medical Doctor' }
];

// for each element in the array see if the firstname is Olivia. If true, assign a variable to be the entire element
let firstNameOlivia;
peopleArray.forEach((v,i) => {
    if (firstNameOlivia === undefined && v.firstName === 'Olivia') {
        firstNameOlivia = i;
    }
})

console.log(firstNameOlivia)


let useFind = peopleArray.findIndex(v => v.firstName === 'Olivia')
console.log(useFind)