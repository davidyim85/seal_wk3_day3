 //some method
 //looks to see if just 1 matches the criteria given

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

// we are going to see there is AT LEAST 1 PERSON is over the age of 30. if true, that variable's value will be true. otherwise false
let atleast30;
peopleArray.forEach(v => {
    if (atleast30 === undefined && v.age > 30) {
        atleast30 = true;
    }
})

if (atleast30 === undefined) {
    atleast30 = false;
}

console.log(atleast30)

let usingSome = peopleArray.some(v =>  v.age > 30)
console.log(usingSome)