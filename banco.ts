

export default abstract class Banco {
    nome_titular: string;
    cpf: string;
    numero_conta: number;
    saldo: number= 0;
    conta_ativa: boolean = true;

    constructor(nome_titular: string, cpf: string, numero_conta: number) {
        this.nome_titular = nome_titular;
        this.cpf = cpf;
        this.numero_conta = numero_conta;
        this.saldo;
        this.conta_ativa = true;
    }

    verifica_nome_titular(): string {
        const regex = /^[a-zA-Z]+$/; //apenas letras
        if (!regex.test(this.nome_titular)) {
            return "Nome inválido";
        }
        return this.nome_titular;
    }

    verifica_cpf(): number {
        const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; //apenas números
        if (!regex.test(this.cpf)) {
            console.log("CPF inválido");
        }
        return parseInt(this.cpf);
    }



    abstract consultar_saldo(): void;
    

}







