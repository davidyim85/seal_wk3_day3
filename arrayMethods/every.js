

//every method
//it tests to see if EVERY instance passes a criteria given

const peopleArray = [
    { firstName: 'John', lastName: 'Doe', age: 30, profession: 'Software Engineer' },
    { firstName: 'Jane', lastName: 'Smith', age: 25, profession: 'Graphic Designer' },
    { firstName: 'Michael', lastName: 'Johnson', age: 40, profession: 'Data Scientist' },
    { firstName: 'Emily', lastName: 'Williams', age: 35, profession: 'Marketing Specialist' },
    { firstName: 'Daniel', lastName: 'Brown', age: 28, profession: 'UX/UI Designer' },
    { firstName: 'Olivia', lastName: 'Davis', age: 32, profession: 'Financial Analyst' },
    { firstName: 'William', lastName: 'Jones', age: 45, profession: 'Architect' },
    { firstName: 'Sophia', lastName: 'Moore', age: 27, profession: 'Teacher' },
    { firstName: 'Ethan', lastName: 'Miller', age: 38, profession: 'Project Manager' },
    { firstName: 'Ava', lastName: 'Wilson', age: 33, profession: 'Medical Doctor' }
];

// we are going to see if EVERY person is over the age of 30. if true, that variable's value will be true. otherwise false
let everyOverThiry;
console.log(everyOverThiry) //undefined
peopleArray.forEach(v => {
    if ((everyOverThiry === undefined || everyOverThiry === true) && v.age > 30) {
        everyOverThiry = true;
    } else {
        everyOverThiry = false
    }
})
console.log(everyOverThiry)



let usingEvery1 = peopleArray.every(v => v.age > 30)
console.log(everyOverThiry)


let usingEvery2 = peopleArray.every(v => v.age < 500)
console.log(usingEvery2)