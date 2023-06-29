// Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
// proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
// operación.

class CuentaBancaria{

    constructor( titular,saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
        
    }
    nombre(titular,saldo){
        console.log(this.titular,"Su saldo es de", this.saldo);
    }
    depositar(cantidad){
       this.saldo = cantidad
    }
    retirar(cantidad){
        if (this.saldo - cantidad >= 0) {
            this.saldo = this.saldo - cantidad
        }
        else{
            console.log("La cantidad que desea retirar es superior a su saldo");
        }
    }
}

let miCuenta = new CuentaBancaria("Juan Jose");

miCuenta.depositar(100)
miCuenta.retirar(10);
miCuenta.nombre()
