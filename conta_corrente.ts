import Banco  from "./banco.ts";


export default class Conta_corrente extends Banco {
    constructor(nome_titular: string, cpf: string, numero_conta: number) {
        super(nome_titular, cpf, numero_conta);
    }

    sacar(valor: number): void {
        if (this.conta_ativa) {
            if (valor > this.saldo) {
                console.log("saldo insuficiente!");
                return
            }
            this.saldo -= valor;
        }
    }

    depositar(valor: number): void {
        if (this.conta_ativa) {
            if (valor <= 0) {
                console.log("valor inválido");
                return;
            }
            this.saldo += valor;
        }
    }


    consultar_saldo(): void {
        console.log(`O saldo da conta é ${this.saldo}`);
    }





}



let conta1 = new Conta_corrente("João", "000", 12345678910);
conta1.depositar(100);
console.log(conta1);


