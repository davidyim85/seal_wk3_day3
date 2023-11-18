
//filter
//filters ON those that match the criteria given


const ages = [
    1,2,3,1
]

//here is an example of removing duplicates in an array using .filter and .indexof
const unique = ages.filter((v,i) => {
    return ages.indexOf(v) === i; //0 BUT i is going to be 3
})

console.log(unique)


//here is an example of removing duplicates in an array using .forEach and .indexof
const arr = [];
ages.forEach((v, i) => {
    if(ages.indexOf(v) === i){
        arr.push(v)
    }
})

console.log(arr)