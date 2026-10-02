class CuentaBancaria {

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.historial = [];
    }

    consultarSaldo() {
        return `Saldo Actual: ${this.saldo}`;
    }

    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.historial.push(`Depósito: +${monto}`);
            return `Se depositaron ${monto}. Nuevo saldo: ${this.saldo}`;
        } else {
            return "Error: El monto debe ser mayor a 0";
        }
    }

    retirar(monto) {
        if (monto <= 0) {
            return "Error: El monto debe ser mayor a 0";
        } else if (monto > this.saldo) {
            return "Error: No se puede retirar más de lo disponible.";
        } else {
            this.saldo -= monto;
            this.historial.push(`Retiro: -${monto}`);
            return `Se retiraron ${monto}. Nuevo saldo: ${this.saldo}`;
        }
    }

    verHistorial() {
        if (this.historial.length > 0) {
            return this.historial.join("<br>");
        } else {
            return "No hay movimientos registrados.";
        }
    }
}


// Crear la cuenta
const cuenta = new CuentaBancaria("Ana", 1000);

// Mostrar resultados en pantalla
const resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <p>${cuenta.consultarSaldo()}</p>
    <p>${cuenta.depositar(500)}</p>
    <p>${cuenta.retirar(200)}</p>
    <p>${cuenta.retirar(2000)}</p>

    <h3>Historial de movimientos:</h3>
    <p>${cuenta.verHistorial()}</p>
`;
