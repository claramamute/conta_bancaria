//Responsável por implementar os métodos da interface repository em todas as contas

import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Coleção Array que vai guardar os Objetos Conta
    
    private listaContas: Array<Conta> = new Array<Conta>

    //Contador para controlar os numeros da conta -> define o numero
    public numero: number = 0; // É publica pois será usada na classe Menu

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero) //this. referencia ao atributo dentro da classe 

        if(buscaConta!== null){
            buscaConta.visualizar()
        } else{
            console.log('\nConta não encontrada!')
        }

    }

    listarTodas(): void {
       for(let conta of this.listaContas){ //Por inferencia, sabe que é um objeto da Classe Conta
            conta.visualizar(); 
       }
    }

    cadastrar(conta: Conta): void { // Recebe um Objeto Conta
       this.listaContas.push(conta); // Adiciona essa conta obj ao Array listaContas
       console.log("A Conta foi cadastrada com sucesso")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero); //Paga o atributo numero guardado dentro do objeto conta

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)]  = conta; //Colchetes acessa a posição do array por meio do indice e substitui com a nova conta
            console.log(`\n A Conta foi atualizada com sucesso! `)

        } else{
            console.log('\n A Conta não foi encontrada ')
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

            if(buscaConta !== null){
                this.listaContas.splice(this.listaContas.indexOf(buscaConta),1)
                console.log(`\n A Conta ${numero} foi deletada com sucesso! `)

            } else{
                console.log('\n A Conta não foi encontrada ')
            }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero) // Pega o OBJETO CONTA (por isso da acesso aos metodos da conta: sacar, depositar )

        if(conta !== null){ // Se a conta existir 
            if(conta.sacar(valor) == true ){ //Se o saque desse valor for sucesso (valor < saldo), dai saca da conta 
                console.log(`\n O Saque na Conta ${numero} foi realizada com sucesso`)
            } else{
                console.log('\n A Conta não foi encontrada!')
            }
        }
    }

    depositar(numero: number, valor: number): void {
        
        let conta = this.buscarNoArray(numero) // Pega o OBJETO CONTA (por isso da acesso aos metodos da conta: sacar, depositar )

        if(conta !== null){ // Se a conta existir 
            conta.depositar(valor)
            console.log (`\n O Depósito de R$ ${valor} na conta ${numero} foi efetuado com sucesso!`)
        }else{
            console.log('\nConta não foi encontrada!')
        }
        
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
       let conta = this.buscarNoArray(numeroOrigem)
       let contaDestino = this.buscarNoArray(numeroDestino)

       if(conta !== null && contaDestino !== null){
            if(conta.sacar(valor) == true){
                contaDestino.depositar(valor)
                console.log(`\n A Transferência da Conta ${numeroOrigem} para a Conta ${numeroDestino} foi efetuado com sucesso!`)
            }
       }else{
            console.log('\n As Contas não foram encontradas!')
        }
    }

//Métodos auxiliares (n estao na interface)

    public gerarNumero(): number{
        return ++ this.numero; // cada vez que chamar o cadastrar conta, vai incrementar um numero a cada conta criada 
    }

    public buscarNoArray(numero: number): Conta | null{ //Se encontrar o numero na conta, devolve objeto conta, se nao achar, devolve null
        for(let conta of this.listaContas){
            if(conta.numero === numero){ // procura pela conta por meio do atributo numero 
                return conta;
            }
        }

        return null; 
    }
}