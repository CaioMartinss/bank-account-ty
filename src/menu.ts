import { select, input } from '@inquirer/prompts';
import Conta_corrente from './conta_corrente.js';
import Conta_poupanca from './conta_poupanca.js';
import Banco from './banco.js';

async function mainMenu() {
    const name = await input({ message: 'Digite seu nome:' });
    const cpf = await input({ message: 'Digite seu CPF:' });

    const tipoConta = await select({
        message: 'Escolha o tipo de conta:',
        choices: [
            { name: 'Conta Corrente', value: 'corrente' },
            { name: 'Conta Poupança', value: 'poupanca' },
            { name: 'Sair', value: 'sair' },
        ],
    });

    if (tipoConta === 'sair') {
        console.log('Saindo...');
        process.exit(0);
    }

    const id = Math.floor(Math.random() * 10000);
    let conta;

    if (tipoConta === 'corrente') {
        conta = new Conta_corrente(name, cpf, id);
    } else {
        conta = new Conta_poupanca(name, cpf, id);
    }

    console.log(`Conta ${tipoConta} criada com sucesso!`);
    console.log(JSON.stringify(conta, null, 2));

    while (true) {
        const operacao = await select({
            message: 'Escolha a operação:',
            choices: [
                { name: 'Depositar', value: 'depositar' },
                { name: 'Sacar', value: 'sacar' },
                { name: 'Consultar Saldo', value: 'consultar' },
                { name: 'Sair', value: 'sair' },
            ],
        });

        if (operacao === 'sair') {
            console.log('Saindo...');
            break;
        }

        if (operacao === 'depositar') {
            let valor = Number(
                await input({ message: 'Digite o valor a depositar:' })
            );
            if (valor <= 0) {
                console.log('Valor inválido para depósito. Tente novamente.');
                continue;
            }
            conta.depositar(valor);
        } else if (operacao === 'sacar') {
            let valor = Number(
                await input({ message: 'Digite o valor a sacar:' })
            );
            if (valor <= 0) {
                console.log('Valor inválido para saque. Tente novamente.');
                continue;
            }
            conta.sacar(valor);
        } else if (operacao === 'consultar') {
            conta.consultar_saldo();
        }
    }
}

mainMenu();
