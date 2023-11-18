
// map method returns a new array.
//We have access to all the elements from the original array used. 


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


//for each element give me a brand new object. push that into an array.
// property will be called 'doubleAge'and the value will be the age doubled
// property name will be in lastname/firstName format
let newArr = []
peopleArray.forEach((v, i) => {
    newArr.push({
        doubleAge: 2 * v.age,
        name: `${v.lastName}/${v.firstName}`,
    })
})

console.log(newArr)




let newArrMap = peopleArray.map(v => {
    return {
        doubleAge: 2 * v.age,
        name: `${v.lastName}/${v.firstName}`,
    }
})