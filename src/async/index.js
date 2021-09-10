const doSomethingAsync = () => { //generamos nuestra función
	return new Promise((resolve, reject) => { //generamos nuestra promesa
		(true) ?
		setTimeout(() => resolve('Do something ASYNC'), 3000) //le ponemos un tiempo de espera con "setTimeout"
			: reject(new Error('Test error'))
	});
}

const doSomething = async () => { //indicamos con "async" que esta función es asíncrona y debe esperar algo para seguir su rumbo
	const something = await doSomethingAsync(); //indicamos con "await" que esta constante es la que debe esperar.
	console.log(something); //imprimimos something que tiene como valor nuestra función principal y eso es lo que debe esperar
}

console.log('before');
doSomething(); //llamamos nuestra función asíncrona para que imprima "something" y se cumplen los 3000 ms 
console.log('After');

//acá hacemos lo mismo pero ingresando nuestro código en una estructura try/catch
const anotherFunction = async () => {
	try {
		const something = await doSomethingAsync();
		console.log(something);
	} catch (error) {
		console.log(error)
	}
}

console.log('before1');
anotherFunction();
console.log('After1');