
// // Here is an example of the a callback pattern
// //we have a function-a that takes in a function as a parameters
// //this funciton which is called a invokes that parameter
// const a = (anything) => {
//     console.log('a')
//     anything()
// }

// const b = () => {
//     console.log('1')
//     console.log('2')
//     console.log('3')
//     console.log('4')
// }

// a(b)

// //////////////////////////////////////////////////////////////

// const myCallBack = () => {
//     console.log('hello from the callback')
// }

// const executeCallBack = (callback) => {
//     console.log('Executing callback....')
//     callback()
// }

// executeCallBack(myCallBack)

// //////////////////////////////////////////////////////////////

// const aFunctionWParamert = (whateverIwant) => {
//     console.log(whateverIwant)
// }

// let z = 'z'
// aFunctionWParamert(z) //result will be a log of z

// let c = 'c'
// aFunctionWParamert(c) //result will be a log of c

// let name = 'Jason'
// aFunctionWParamert(name) //result will be a log of Jason


// //////////////////////////////////////////////////////////////

// setTimeout(
//     () => {
//         console.log('hi');
//     },
//     2000
// );


// //////////////////////////////////////////////////////////////

// //these are the callback functions.
// function s500() {
//     console.log("gather s500 parts");
// }

// //these are the callback functions.
// function black() {
//     console.log("paint black");
// }

// //these are the callback functions.
// function e350() {
//     console.log(`gather e350 parts`);
// }

// //these are the callback functions.
// function red() {
//     console.log("paint red");
// }

// //a function that accept another function as a parameter
// //and then invoke those parameters (which are functions)
// function build(model, color) {
//     console.log("get engine");
//     model();
//     console.log("assembly");
//     color();
//     console.log(`send to storage`);
// }

// //invoke the build funtion using the callback patteren
// build(s500, black);
// build(e350, red);

///////
//lesson exercises: 

//declare a variable called henchmen, and this variable will be a function.
//when variable is ran it will log I am the henchmen
//we can INVOKE the variable because the variable holds a function
// const henchmen = () => {
//     console.log('I am the henchmen')
// }

// //declare a variable called mobboss, and this variable will be a function.
// //This function will accept a parameter call employee - which will be a function
// //we can INVOKE the parameter when we INVOKE the mobboss (higher order function) function because it takes a parameter that is a function
// const mobboss = (employee) => {
//     employee()
// }

// mobboss(henchmen) //result: I am the henchmen

// ///////
// const mobboss1 = (employee) => {
//     employee()
// }

// //here is another example where instead of declaring a variable that holds a function as its value. 
// //we passing in a function during the invoke of mobboss1
// mobboss1(() => { console.log('I am henchmen2') })


// /////////

// //here are more examples of calling a function and passing a function-as-an-argument-during-the-invocation.
// const badGuy = (action) => {
//     console.log('Im going to do something...')
//     action()
//     console.log('Im done')
// }

// badGuy(
//     () => {
//         console.log('Stealing a safe...')
//     }
// )

// badGuy(
//     () => {
//         console.log('imtimidating a local businessman')
//     }
// )

// ///////////
// const iceCreams = ['vanilla', 'chocolate', 'stawberry', 'rocky road']
// //here is an array method w/ a CALLBACK function. 
// //this code below is logging each to the array's element
// iceCreams.forEach(
//     ic => { //ic represent the element's value at the time of the iteration
//         console.log(ic)
//     }
// )

// //2 examples of declaring a variable. the variable holds a function. 
// //when we use the forEach method we use the variable as an arguement
// const printEachIcecream = (ic) => {
//     console.log(ic)
// }

// iceCreams.forEach(printEachIcecream)


// const peic = (anythign) => {
//     console.log(anythign)
// }

// iceCreams.forEach(peic)


const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

// for(let ic of iceCreams){
//     console.log(ic)
// }

// for(let i=0; i<iceCreams.length;i++){
//     console.log(iceCreams[i])
// }


iceCreams.forEach((x, ind) => {
    console.log(`the value at this index: ${ind}, is ${x}`)
})


function goOverEach(array) {
    for (let i = 0; i < array.length; number++) {
        console.log(array[i]);
    }
}

goOverEach(iceCreams);

