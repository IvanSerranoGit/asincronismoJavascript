/* 
Ya conociendo Async/Await vamos a implementarlo en el desafío.

Creamos una función async con su estructura try()catch . Dentro de catch() pedimos que ejecuten tres peticiones. Para acceder a ellas colocamos la palabra reservada await y llamando nuestro fetchData indicamos dentro de sus parámetros la ruta que se debe tomar para acceder a la información que queremos imprimir en cada una de nuestras constantes.
⠀⠀
Después imprimimos los resultados. En catch() colocamos que código que queremos imprimir en caso de que no se cumpla la petición de try() . Ya por último llamamos la función anotherFunction() para ejecutarla. */


// traemos nuestra funcion que llamara a la API
const fetchData = require('../utils/fetchData');
// el link de la API
const API = 'https://rickandmortyapi.com/api/character/';

// nuestra funcion asíncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincrónica
  try {
    // esperamos que se aga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se aga la segunda llamada
    const character = await fetchData(`${API}${data.results[0].id}`)

    // esperamos que se aga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
}

console.log('before');
// mandamos a llamar nuestra api
anotherFunction(API);
console.log('After');
