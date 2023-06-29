// Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
// método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.


class CuentaBancaria{

    constructor( titular,saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(){
       this.saldo = parseInt(prompt("Ingrese el saldo 1que va a actualizar"));
       console.log("Señor", this.titular,"su saldo ha sido actualizado a",this.saldo);
    }
}

let saldo1 = new CuentaBancaria("juan",this.saldo);

saldo1.depositar()