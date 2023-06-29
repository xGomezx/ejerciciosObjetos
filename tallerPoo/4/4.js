// Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
// Deposita 100 en la cuenta llamando al método depositar().

class CuentaBancaria{

    constructor( titular,saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(){
       console.log("Señor", this.titular,"su saldo ha sido actualizado a",this.saldo);
    }
}

let miCuenta = new CuentaBancaria("Juan Jose",100);

miCuenta.depositar()