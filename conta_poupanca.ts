import Banco from "./banco.ts";

export default class Conta_salario extends Banco {
    constructor(nome_titular: string, cpf: string, numero_conta: number) {
        super(nome_titular, cpf, numero_conta);
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

    sacar(valor: number): number {
        if (this.conta_ativa) {
            if (valor > this.saldo) {
                console.log("saldo insuficiente!");
                return 0;
            }
            this.saldo -= valor;
            return valor;
        }
        return 0;
    }
}