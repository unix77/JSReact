//this is an object, it can have within:
//simple type variables
//objects
//functions
const options = {
	name: 'test',
	width: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
    makeTest: function() {
        console.log("This is a test !");
    }
};

//iterate the attributes of an object, object[key] gives us the value of the attribute~key
for(let key in options) {
	console.log(`Attribute ${key} whose value is ${options[key]}`);
}

//print all the values of the keys of an object
console.log(Object.keys(options));

//calling a function declared within an object
options.makeTest();

//destructuring an object: extracting a key, or other object
const {border, bg} = options.colors;
console.log(border);

//video 21 arrays 

const arr = [2, 3, 4, 5];

//extract the last element of the array
arr.pop();

//add an element at the end of the array
arr.push(10);
console.log(arr);

//iterate an array
for (let value of arr){
    console.log(value);
}

//using for each
//function() is a callback function
// which will be applied over each element of the array
//a callback function can have 3 != arguments:
//function(the element of the array itself, the position of the element in the array, a link to the array we are iteretin on)
arr.forEach(function(item, position, arr){
    console.log(`${position}: ${item} within the array ${arr}`);
});

//transform a string in an array, deleting some components using split
const str = prompt("","");
const products = str.split(", ");
console.log(products);

//transform an array into a string, inserting between each other a "; "
console.log(products.join('; '));

//to sort an array we can use sort
//it will sort arrays who contain strings
arr.sort();


//if we want to sort an array with other data types within
//we can use a callback function inside the sort() method
arr.sort(compareNum());

function compareNum(a , b){
    return a-b;
}
