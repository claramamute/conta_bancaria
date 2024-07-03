import { colors}  from "./src/util/Colors";
import readlinesync = require('readline-sync')

export function main(){
    let opcao: number;

    while(true){
        console.log(colors.reset, 
                    "**********************************************************");
        console.log("                                                          ");
        console.log(colors.reset, colors.fg.magenta,
                    "                     BANCO DO BRAZIL COM Z                ");
        console.log("                                                          ");
        console.log(colors.reset,
                    "**********************************************************");        
        console.log('                                                          ')
        console.log(colors.reset, colors.fg.magenta,
            '              1- Criar Conta                            ')
        console.log('                2- Listar todas Contas                    ')
        console.log('                3- Buscar conta por número                ')
        console.log('                4- Atualizar  Dados Conta                 ')
        console.log('                5- Apagar Conta                           ')
        console.log('                6- Sacar                                  ')
        console.log('                7- Depositar                              ')
        console.log('                8- Transferir valores entre Contas        ')
        console.log('                9- Sair                                   ')
        console.log('                                                          ')
        console.log(colors.reset,
                    '**********************************************************')
        console.log('                                                          ')
        console.log('Entre com a opção desejada: ')
        opcao = readlinesync.questionInt('')

        if(opcao == 9){
            console.log(colors.bg.gray, colors.fg.magenta,'\n Banco do Brazil com Z - seu futuro começa aqui')
            sobre();
            process.exit(0)
        }
        switch (opcao) {
            case 1:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nSaque\n\n");

                break;
            case 7:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nDepósito\n\n");

                break;
            case 8:
                console.log(colors.reset, colors.fg.magentastrong, "\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log(colors.reset, colors.fg.red, "\nOpção Inválida!\n");

                break;
        
        }
    }

}
export function sobre(): void{
    console.log(colors.reset,
                 '\n ************************************************')
    console.log(colors.reset, colors.fg.greenstrong,
                '\nProjeto desenvolvido por: Clara Araujo')
    console.log('\nGeneration Brasil - clara.paula@genstudents.org')
    console.log('\ngithub.com')
    console.log(colors.reset,
                '\n ************************************************')


}

main();
