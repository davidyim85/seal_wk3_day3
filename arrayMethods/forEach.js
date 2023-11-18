// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

// //here is a function that mimics the forEach method. 
// // It takes in an array as its first parameter.
// // the 2nd parameter is a cb function
// const forEach = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }

// forEach(iceCreams, (el) => { console.log(el) })

// const aCallBack = (el) => {
//     console.log(el)
// }

// forEach(iceCreams, aCallBack)

// //here is a use of the forEach method. this method will do the same as these lines
// /*
// const forEach = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }

// forEach(iceCreams, (el) => { console.log(el) })
// */
// iceCreams.forEach(el => { console.log(el) })


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

// console.log(peopleArray[0].firstName) //john

// peopleArray.forEach(v => { console.log(v.firstName) })
// //result will be
// //john
// //jane
// //michael
// //.
// //.

// let peoples = [];
// peopleArray.forEach(v => { peoples.push(v.firstName) })
// //what will peoples be?
// console.log(peoples)
// /*[
//   'John',    'Jane',
//   'Michael', 'Emily',
//   'Daniel',  'Olivia',
//   'William', 'Sophia',
//   'Ethan',   'Ava'
// ]*/

// //foreach
// // console.log each element
// peopleArray.forEach(v => { console.log(v) })

// // console.log each index
// peopleArray.forEach((v, i) => { console.log(i) })

// // console.log only the first names of each person
// peopleArray.forEach(v => { console.log(v.firstName) })

// // console.log only the last names of each person
// peopleArray.forEach(v => { console.log(v.lastName) })

// // console.log only the age of each person
// peopleArray.forEach(v => { console.log(v.age) })

// // console.log only the profession of each person
// peopleArray.forEach(v => { console.log(v.profession) })

// //on the MAC hold down the CMD button and click on each of the lines below. now we are able to write the same thigns on each line
// //on PC hold down the ALT button and click on each of the lines below. now we are able to write the same thigns on each line

// // console.log only elements where the age value greater than or equal to 32
// peopleArray.forEach(v => {
//     if (v.age >= 32) {
//         console.log(v)
//     }
// })
// // console.log only elements where the age value greater than or equal to 40
// peopleArray.forEach(v => {
//     if (v.age >= 40) {
//         console.log(v)
//     }
// })
// // console.log only elements where the age value less than or equal to 30
// peopleArray.forEach(v => {
//     if (v.age <= 30) {
//         console.log(v)
//     }
// })


// // create a variable that is an empty array.
// // using the forEach push only those elements where the age value greater than or equal to 32
// let greater32 = [];
// peopleArray.forEach(v => {
//     if (v.age >= 32) {
//         greater32.push(v)
//     }
// })


// create a variable that is an empty array. using the forEach push only those elements where the age value greater than or equal to 40
// // [ { firstName: 'Michael', lastName: 'Johnson', age: 40, profession: 'Data Scientist' },...]

// let arr1 = [];
// peopleArray.forEach(v => {
//     if (v.age >= 40) {
//         arr1.push(v)
//     }
// })
// console.log(arr1)

// // create a variable that is an empty array. using the forEach push only those elements where the age value less than or equal to 30
// // [{ firstName: 'John', lastName: 'Doe', age: 30, profession: 'Software Engineer' },...]
// let arr2 = [];
// peopleArray.forEach(v => {
//     if (v.age <= 30) {
//         arr2.push(v)
//     }
// })
// console.log(arr2)

// // create a variable that is an empty array. using the forEach push only the element's firstName where the age value greater than or equal to 32
// // [ 'Michael',...]
// let arr3 = [];
// peopleArray.forEach(v => {
//     if (v.age >= 32) {
//         arr3.push(v.firstName)
//     }
// })
// console.log(arr3)
// // [michael, emily, william...]

// // create a variable that is an empty array. using the forEach push only the element's lastName where the age value greater than or equal to 40
// //[ 'Johnson',...]
// let arr4 = [];
// peopleArray.forEach(v => {
//     if (v.age >= 40) {
//         arr4.push(v.lastName)
//     }
// })
// console.log(arr4)
// // create a variable that is an empty array. using the forEach push only the element's profession where the age value less than or equal to 30
// //['Software Engineer',...]
// let arr5 = [];
// peopleArray.forEach(v => {
//     if (v.age >= 30) {
//         arr5.push(v.profession)
//     }
// })
// console.log(arr5)

// // create a variable that is an empty array. double each element's age and push that element's age
// //[ 60,....]
// let arr6 = [];
// peopleArray.forEach(v => {
//     arr6.push(v.age * 2)
// })
// console.log(arr6)
// // create a variable that is an empty array. divide each element's age and push only the element's age
// //[15,....]
// let arr7 = [];
// peopleArray.forEach(v => {
//     arr7.push(v.age / 2)
// })
// console.log(arr7)


// create a variable that is an empty array. using the element, create an object with properties name and hobby.
//the name's value will be concatenation WITH A SPACE IN BETWEEN of the element's first and last name.
//hobby's value will be the value of the profession
// [{ name: 'John Doe', hobby: 'Software Engineer' },...]

// let arr8 = [];
// peopleArray.forEach(v => {
//     arr8.push({
//         // name: `${v.firstName} ${v.lastName}`,
//         name: v.firstName + ' ' + v.lastName,
//         hobby: v.profession,
//         doubledAge: v.age * 2
//     })
// })
// console.log(arr8)


//using for each add up all the ages.
let summedAges = 0;
peopleArray.forEach(v => {

    summedAges = summedAges + v.age;
})
console.log(summedAges)

//using foreach concatnate all the first names together.
let names = '';
peopleArray.forEach(v => {
    names = names + v.firstName;
})
console.log(names)


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

//we are going to see if EVERY person is under the age of 50. if true, that variable's value will be true. otherwise false
let everyOver50;
peopleArray.forEach(v => {
    if ((everyOver50 === undefined || everyOver50 === true) && v.age < 50) {
        everyOver50 = true;
    } else {
        everyOver50 = false
    }
})
console.log(everyOver50)


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

// we are going to see if every AT LEAST 1 PERSON under the age of 39. if true, that variable's value will be true. otherwise false
let atleast39;
peopleArray.forEach(v => {
    if (atleast39 === undefined && v.age < 39) {
        atleast39 = true;
    }
})

if (atleast39 === undefined) {
    atleast39 = false;
}

console.log(atleast39)


//for each element in the array see if the last name is Johnson. If true,  assign a variable to be the entire element
let lastNameJohnson;
peopleArray.forEach(v => {
    if ( v.lastName === 'Johnson') {
        lastNameJohnson = v;
    }
})

console.log(lastNameJohnson)

// for each element in the array see if the firstname is Olivia. If true, assign a variable to be the entire element
let firstNameOlivia;
peopleArray.forEach(v => {
    if ( v.firstName === 'Olivia') {
        firstNameOlivia = v;
    }
})

console.log(firstNameOlivia)

//for each element look for age = 27. assign a variable to be the index of that element in the array
let indOf27;
peopleArray.forEach((v,i) => {
    if ( v.age === 27) {
        indOf27 = i;
    }
})

console.log(indOf27)

//for each element where the first and last name are Jane and Smith respectively. assign a variable to be the index of that element in the array
let arrJaneSmith = []
peopleArray.forEach((v,i) => {
    if ( v.firstName === 'Jane') {
        arrJaneSmith.push(i);
    }else if ( v.lastName === 'Smith') {
        arrJaneSmith.push(i);
    }
})

console.log(arrJaneSmith)


//for each element give me a brand new object. push that into an array.
// property will be called 'doubleAge'and the value will be the age doubled
// property name will be in lastname/firstName format
let newArr = []
peopleArray.forEach((v,i) => {
    newArr.push({
        doubleAge: 2 * v.age,
        name: `${v.lastName}/${v.firstName}`,
    })
})

console.log(newArr)
