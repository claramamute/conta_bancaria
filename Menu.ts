import { ContaController } from "./src/controller/ContaController";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors}  from "./src/util/Colors";
import readlinesync = require('readline-sync')

export function main(){

    let opcao,numero,agencia,tipo,saldo,limite,aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'] //Ajudar na construcao pois a readlinesync tem opcao de escolher apenas oq esta no vetor
    
    //Instancia da Classe Controller para ter acesso aos métodos
    const contas: ContaController = new ContaController()

       // Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(),1234,1,'titular',200.00,1000.00))
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(),5678,1,'clara',10000.00,20000.00))
 
    // Novas Instâncias da Classe Poupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, 'Camila Ribeiro', 2523443.00, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 3214, 2, ' Ribeiro', 10000.00, 10));

    while(true){
        console.log(colors.bg.black, colors.fg.cyan,
                    "**********************************************************");
        console.log("                                                          ");
        console.log("                     OKCTO BANK                           ");
        console.log("                                                          ");
        console.log("**********************************************************");        
        console.log('                                                          ')
        console.log('                1- Criar Conta                            ')
        console.log('                2- Listar todas Contas                    ')
        console.log('                3- Buscar conta por número                ')
        console.log('                4- Atualizar  Dados Conta                 ')
        console.log('                5- Apagar Conta                           ')
        console.log('                6- Sacar                                  ')
        console.log('                7- Depositar                              ')
        console.log('                8- Transferir valores entre Contas        ')
        console.log('                9- Sair                                   ')
        console.log('                                                          ')
        console.log('**********************************************************')
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
                
                //Etiquetas para entrada de dados
                console.log('Digite o Número da Agência: ')
                agencia = readlinesync.questionInt('')

                console.log('Digite o Nome do Titular da Conta: ')
                titular = readlinesync.question('')

                console.log('Digite o Tipo da Conta: ')
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1 // Obrigando a pessoa a escolher um tipo de conta, colocou o +1 pois não existe conta 0
                

                console.log('Digite o Saldo da Conta: ')
                saldo = readlinesync.questionFloat('')

                //Checar o tipo da conta -> tipo 1 informar limite, tipo 2 - informar niver

                switch(tipo){ //Independente do tipo, vai armazenar na Coleção contas

                    case 1: // Se escolher tipo 1, vai criar objeto tipo corrente
                        console.log('Digite o Limite da Conta: ')
                        limite = readlinesync.questionFloat('')
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(),agencia,tipo,titular,saldo,limite)
                            )
                        break

                    case 2: // Se escolher tipo 2, vai criar objeto tipo poupanca
                        console.log('Digite a Data de Aniversário da Conta: ')
                        aniversario = readlinesync.questionInt('')
                            contas.cadastrar(
                                new ContaPoupanca(contas.gerarNumero(),agencia,tipo,titular,saldo,aniversario)
                            )
                        break
                }

                keyPress()
                break;
            case 2:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nListar todas as Contas\n\n");
                    contas.listarTodas(); // lista todas as contas do Array
                keyPress()
                break;
            case 3:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nConsultar dados da Conta - por número\n\n");
                
                console.log('Digite o número da conta: ')
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero)

                keyPress()
                break;
            case 4:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nAtualizar dados da Conta\n\n");

                console.log('Digite o número da conta: ')
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)// para saber se a conta existe ou n

                if(conta){

                    console.log('Digite o Número da Agência: ')
                    agencia = readlinesync.questionInt('')

                    console.log('Digite o Nome do Titular da Conta: ')
                    titular = readlinesync.question('')

                    
                    tipo = conta.tipo 
                    
                    console.log('Digite o Saldo da Conta: ')
                    saldo = readlinesync.questionFloat('')

                    //Checar o tipo da conta -> tipo 1 informar limite, tipo 2 - informar niver

                    switch(tipo){ //Independente do tipo, vai armazenar na Coleção contas

                        case 1: // Se escolher tipo 1, vai criar objeto tipo corrente
                            console.log('Digite o Limite da Conta: ')
                            limite = readlinesync.questionFloat('')
                                contas.atualizar(
                                    new ContaCorrente(numero,agencia,tipo,titular,saldo,limite)
                                )
                            break

                        case 2: // Se escolher tipo 2, vai criar objeto tipo poupanca
                            console.log('Digite a Data de Aniversário da Conta: ')
                            aniversario = readlinesync.questionInt('')
                                contas.atualizar(
                                    new ContaPoupanca(numero,agencia,tipo,titular,saldo,aniversario)
                                )
                            break
                    }
                
                } else{
                    console.log(`\nA Conta ${numero} não existe!`)
                }
                keyPress()
                break;
            case 5:
                console.log(colors.bg.black, colors.fg.cyanstrong, "\n\nApagar uma Conta\n\n");

                console.log('Digite o número da conta: ')
                numero = readlinesync.questionInt("")

                contas.deletar(numero)

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
