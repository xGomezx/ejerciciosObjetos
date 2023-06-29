// 6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números


let objeto = { numeros: [45, 78, 22, 89, 8]};

for (const i in objeto) {

    for (let j = 0; j < objeto[i].length; j++) {

        console.log(objeto[i][j]);
        
    }
}