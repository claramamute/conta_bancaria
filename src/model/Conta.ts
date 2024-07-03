import { colors } from "../util/Colors";
export class Conta{
    //Definir atributos(caracteristicas)

    private _numero : number; //são privados (só poderam ser usados nessa classe)
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //Método para construir o objeto 
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero; //this -> refere ao atributo da Classe e o outro refere ao parâmetro passado para o constructor
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    //Métodos GET e SET de todos atributos (usar fora da classe)

	public get numero(): number { //Vai retornar um numero
		return this._numero; // O numero da classe
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}


	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) { //Não retorna nada, apenas troca o valor | recebe um valor(number) e atribui ao atributo 
		this._numero = value; 
	}

	public set agencia(value: number) {
		this._agencia = value;
	}


	public set tipo(value: number) {
		this._tipo = value;
	}

    
	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}
    
    //Método para sacar dinheiro
    public sacar(valor:number): boolean{ //A idia é saber se o saco deu certo ou errado ( true-> bem sucedido e false -> n funfa)

        if(this._saldo < valor){
            console.log('O saldo é insuficiente')
            return false
        } 
        
        this._saldo -= valor
        console.log('Saque realizado com sucesso!')
        return true
        

    }

    public depositar(valor:number): void{
        this._saldo += valor;
    }

    public visualizar(): void{

        let tipo: string = ""; //variavel com switch para checar o tipo da conta
        
        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente"
                break;
            case 2:
                tipo = "Conta Poupança"
                break;
        }

        console.log(colors.bg.black, colors.fg.cyan,"\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo);

    }


}