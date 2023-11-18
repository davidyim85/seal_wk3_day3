
// reduce
// reduces thing down to a specific value

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


//using foreach concatnate all the first names together.
let names = '';
peopleArray.forEach(v => {
    names = names + v.firstName;
})
console.log(names)


const useReduce = peopleArray.reduce(
    (acc, v) => acc + v.firstName,
    ''  //on first loop'John' //on second loop 'John' + 'Jane' //on third loop 'JohnJane'+ 'Michael'
)

/////////////////////////////////////////////////////////
//using for each add up all the ages.
let summedAges = 0;
peopleArray.forEach(v => {

    summedAges = summedAges + v.age;
})
console.log(summedAges)


const useReduce2 = peopleArray.reduce(
    (acc, v) => acc + v.age,
    0  
)

console.log(useReduce2)