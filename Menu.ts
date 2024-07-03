import { Conta } from "./src/model/Conta";
import { colors}  from "./src/util/Colors";
import readlinesync = require('readline-sync')

export function main(){
    let opcao: number;

    //Novas instancias da classe Conta (Objetos)
    const c1: Conta = new Conta(1,1234,1,'clara',10000) //colocar dados da conta
    const c2: Conta = new Conta(2,2345,2,'julia',9000) //colocar dados da conta

    c1.visualizar();
    c2.visualizar();

    //Saque nas contas:
    console.log(colors.bg.black, colors.fg.cyan,`Saque de 100: ${c1.sacar(100)}`); //true
    c1.visualizar(); // false


    console.log(`Saque de 70000: ${c2.sacar(70000)}`);
    c2.visualizar()

    //Deposito nas contas
    console.log(`Deposito de 70000: ${c2.depositar(200)}`);
    c2.visualizar()

    while(true){
        console.log(colors.bg.black, colors.fg.cyan,
                    "**********************************************************");
        console.log("                                                          ");
        console.log(
                    "                     BANCO DO BRAZIL COM Z                ");
        console.log("                                                          ");
        console.log(
                    "**********************************************************");        
        console.log('                                                          ')
        console.log(
            '                1- Criar Conta                            ')
        console.log('                2- Listar todas Contas                    ')
        console.log('                3- Buscar conta por número                ')
        console.log('                4- Atualizar  Dados Conta                 ')
        console.log('                5- Apagar Conta                           ')
        console.log('                6- Sacar                                  ')
        console.log('                7- Depositar                              ')
        console.log('                8- Transferir valores entre Contas        ')
        console.log('                9- Sair                                   ')
        console.log('                                                          ')
        console.log(
                    '**********************************************************')
        console.log('                                                          ')
        console.log('Entre com a opção desejada: ')
        opcao = readlinesync.questionInt('')

        if(opcao == 9){
            console.log('\n Banco do Brazil com Z - seu futuro começa aqui')
            sobre();
            process.exit(0)
        }
        switch (opcao) {
            case 1:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nCriar Conta\n\n");
                keyPress()
                break;
            case 2:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nListar todas as Contas\n\n");
                keyPress()
                break;
            case 3:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nConsultar dados da Conta - por número\n\n");
                keyPress()
                break;
            case 4:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nAtualizar dados da Conta\n\n");
                keyPress()
                break;
            case 5:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nApagar uma Conta\n\n");
                keyPress()
                break;
            case 6:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nSaque\n\n");
                keyPress()
                break;
            case 7:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nDepósito\n\n");
                keyPress()
                break;
            case 8:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nTransferência entre Contas\n\n");
                keyPress()
                break;
            default:
                console.log(colors.bg.black, colors.fg.redstrong, "\nOpção Inválida!\n");
                keyPress()
                break;
        
        }
    }

}
export function sobre(): void{
    console.log(colors.bg.black, colors.fg.greenstrong,
                 '\n ************************************************')
    console.log(
                '\nProjeto desenvolvido por: Clara Araujo')
    console.log('\nGeneration Brasil - clara.paula@genstudents.org')
    console.log('\ngithub.com')
    console.log(
                '\n ************************************************')


}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
