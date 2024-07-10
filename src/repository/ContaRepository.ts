import { Conta } from "../model/Conta";

export interface ContaRepository{

    //Vamos usar coleções (Array) para armazenar informações da conta, ou seja, o objeto completo
    //Vai se tornar um array de objetos, em que vamos acessar com objeto.atributo
    //Em cada linha da coleção, armazena um objeto

    //Métodos CRUD 

    procurarPorNumero(numero: number): void;
    listarTodas(): void; //Listar todas contas
    cadastrar (conta: Conta): void; //Cadastrar conta nova - Objeto modelo/ generico de conta
    atualizar(conta: Conta): void; // Atualizar contas
    deletar(numero: number): void; //Deletar conta

    //Métodos bancários

    sacar(numero:number, valor: number): void; //numero da conta que vai sacar e o valor
    depositar(numero:number, valor:number): void;
    transferir(numeroOrigim: number, numeroDestino: number, valor: number): void; //numero da conta que vai tirar e da conta que vai inserir

}