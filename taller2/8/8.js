// Dado el objeto {
//     162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
//     4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
//     786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
//     }

//     Use dos ciclos for-in para recorrer los objetos más internos y mostrar sus llaves y valores. Por
//     ejemplo:

//     nombres Pepe
//     apellidos Perez
//     edad 40
//     ---------
//     nombres Maria
//     apellidos Gomez
//     edad 31
//     ---------
//     nombres Raul
//     apellidos Castro
//     edad 80

let objeto ={
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
      }


for (const i in objeto) {

    for (const n in objeto[i]) {
        
        console.log(n,objeto[i][n],);
        
    }
    console.log("-----------------");
}