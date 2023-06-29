// 1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
// imprima en la consola "¡Woof!" junto al nombre del perro.

class Perro {
    
        constructor(nombre){
            this.nombre = nombre;
        }
        ladrar(){
            console.log(this.nombre,"¡Woof!");
        }
}
let perro = new Perro("samy");

perro.ladrar()

// 2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
// ladrar() de la instancia.


let miPerro = new Perro ("Enso");

miPerro.ladrar()