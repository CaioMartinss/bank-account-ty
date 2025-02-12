import Banco from './banco.js';

export default class Conta_corrente extends Banco {
    constructor(nome_titular: string, cpf: string, numero_conta: number) {
        super(nome_titular, cpf, numero_conta);
    }

    sacar(valor: number): void {
        if (this.conta_ativa) {
            if (valor > this.saldo) {
                console.log('Saldo insuficiente!');
                return;
            }
            this.saldo -= valor;
            console.log(
                `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`
            );
        }
    }

    depositar(valor: number): void {
        if (this.conta_ativa) {
            if (valor <= 0) {
                console.log('Valor inválido para depósito.');
                return;
            }
            this.saldo += valor;
            console.log(
                `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`
            );
        }
    }

    consultar_saldo(): void {
        console.log(`O saldo da conta é R$${this.saldo}`);
    }
}
