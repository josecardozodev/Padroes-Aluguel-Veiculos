/*
Implementação do Singleton
Definido como o próprio sistema/gerenciamento. Os métodos aqui efetuados pertencem à um único sistema, uma única instância, e utilizarão dele constantemente para serem executados. É algo centralizado.

Motivo da Alteração de Proprietário > Sistema: Por mais que cada veículo só tenha um proprietário/locatário por vez, vários carros terão pessoas diferentes os alugando, o que quebraria o Singleton. Por esse raciocínio, decidi alterar para algo mais abrangente, como o sistema utilizado.
*/

class SistemaLocadora {

    private static instancia: SistemaLocadora;
    private conexao: string;

    private constructor() {
        this.conexao = "Ativa";
    }

    static obterInstancia(): SistemaLocadora {
        if (!SistemaLocadora.instancia) {
            SistemaLocadora.instancia = new SistemaLocadora();
        }

        return SistemaLocadora.instancia;

    }

    obterNome(): string {
        return this.conexao;
    }
}

//Teste da implementação
const sistema1 = SistemaLocadora.obterInstancia();
const sistema2 = SistemaLocadora.obterInstancia();

console.log(sistema1 === sistema2);

//=================================================================

/*
Implementação do Factory Method
Definido como um modelo de criação/cadastro de veículos no sistema. É um método básico de criação de objetos e soma com o fator do cliente (se pensarmos dentro do escopo) não precisar saber como o veículo é fabricado, somente é entregue à ele.
*/

interface Veiculo {
    modelo: string;
    placa: string;
}

class Carro implements Veiculo {
    constructor(
        public modelo: string,
        public placa: string
    ) { }
}

class Moto implements Veiculo {
    constructor(
        public modelo: string,
        public placa: string
    ) { }
}

//Classe abstrata para criação do veículo
abstract class CriarVeiculo {
    public abstract criarVeiculo( 
        modelo: string,
        placa: string
    ): Veiculo;

    public cadastrarVeiculo(
        modelo: string,
        placa: string
    ): Veiculo {
        const veiculo = this.criarVeiculo(modelo, placa);
        console.log("Veículo cadastrado.");
        return veiculo;
    }
}

//Decisão de qual veículo criar
class CriarCarro extends CriarVeiculo {
    public criarVeiculo(modelo: string, placa: string): Veiculo {
        return new Carro(modelo, placa);
    }
}

class CriarMoto extends CriarVeiculo {
    public criarVeiculo(modelo: string, placa: string): Veiculo {
        return new Moto(modelo, placa);
    }
}

//Teste da implementação
const criar = new CriarCarro();
const carro = criar.cadastrarVeiculo("Chevrolet Chevette","ABC1B34");

console.log(carro);