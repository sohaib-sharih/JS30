// console.log(this === window);
let x = this
console.log(x)

/* 
1. This refers to a global object
2. When THIS is used alone, it is referring a global object, as it has a global scope.
3. When THis is used locally/ or within an object, it refers to the object in which it is defined. Example, if you create an object by the name of box, then using the keyword THIS, will refer to 'box' object

*/

// example of THIS locally/ inside a function/method
let box = {
    name: "Sohaib",
    grade: "A",
    room: function (){
        return (`${this.name} got an ${this.grade} + "grade, and he is in class: " + this.room`)
    }
}
console.log(box.room())

/*
FOREACH
1. for each loops are used in Arrays, its a built in method of Javascript.
2. Its a loop normally used for processing data.
3. It will run the loop for each Element of the array.
*/
let arrA = ["Sohaib", "Coure", 2022]
function profile(ele, index){
    console.log(`${ele} is an element of the array and is place on index: ${index}`)
}
arrA.forEach(profile)

// example of ForEach loop using an Arrow function

arrA.forEach(elements => {
    console.log(`Following are the elements of the array arrA: ${elements}`)
});

// using forEach method with an Arrow function with multiple parameters

arrA.forEach((ele, index) => {
    console.log(`${ele} is an element of the array in position: ${index}`)
})

// example arrow function
let boxA = (a, b) => {
    console.log(a + b)
}
boxA(1, 2)

// HTML Testing
let one = function(){
    Object.style.color = 'green'
}

