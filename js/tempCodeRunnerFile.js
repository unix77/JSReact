//this is an object
const options = {
	name: 'test',
	width: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

//iterate the attributes of an object, object[key] gives us the value of the attribute~key
for(let key in options) {
	console.log(`Attribute ${key} whose value is ${options[key]}`);
}

close.log(Object.keys(options));

