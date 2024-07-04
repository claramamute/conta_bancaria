import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite:number){
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public get limite(): number{
        return this._limite
    }

    public set limite(limite:number){
        this._limite = limite
    }

    //Sobrescrever o método sacar - polimorfismo - pois o limite entra no jogo 
    public sacar( valor:number): boolean{
        if((this.saldo + this._limite) >= valor){ // _saldo --> só existe na supercalsse
            this.saldo -= valor;
            return true;
        }
        console.log("\nSaldo Insuficiente!");
        return false;
    }
    

    public visualizar(): void{
        super.visualizar();
        console.log('Limite:'+ this._limite.toFixed(2))
    }

}