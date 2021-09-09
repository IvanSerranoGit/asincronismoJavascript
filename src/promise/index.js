//Crear funcion 
const somethingWillHappen = () => {
	//retornar una promesa con dos argumentos (resolve=si se ejecuta, reject=si se rechaza)
	return new Promise((resolve, reject) => {
		//si es verdadero, vamos a devolver hey
		if (true) {
			resolve('Hey!')
		}
		//si no entonces devolvemos wooops
		else {
			reject('Woooops!')
		}
	})
}
//ejecutamos la funcion
somethingWillHappen()
	//si estamos obteniendo un resolve
	.then(response => console.log(response))
	//si obtenemos un reject
	.catch(err => console.error(err))

//Crear segunda funcion
const somethingWillHappen2 = () => {
	// retuornamos la promesa
	return new Promise((resolve, reject) => {
		// Si es verdadero, devolvemos True en 2 segundos
		if (true) {
			setTimeout(() => {
				resolve('True')
			}, 2000)
		}
		// Si no entonces devolvemos el error
		// De esta forma "new Error" podemos debbugear mejor
		else {
			const error = new Error('Whoppps!')
			reject(error)
		}
	})
}
//ejecutamos la Funcion 2
somethingWillHappen2()
	//Si obtenemos un resolve
	.then(response => console.log(response))
	//si obtenemos un reject
	.catch(err => console.error(err))

//ejecutamos todas las promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
	//Si obtenemos un resolve
	.then(response => {
		console.log('Array of results', response);
	})
	//Si obtenemos un reject
	.catch(err => {
		console.error(err)
	})