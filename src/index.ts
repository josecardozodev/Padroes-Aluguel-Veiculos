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

//=================================================================

/*
Implementação do Factory Method
Definido como um modelo de criação/cadastro de veículos no sistema. É um método básico de criação de objetos e soma com o fator do cliente (se pensarmos dentro do escopo) não precisar saber como o veículo é fabricado, somente é entregue à ele.
*/

interface Veiculo {
    modelo: ModeloBase;
    placa: string;
}

class Carro implements Veiculo {
    constructor(
        public modelo: ModeloBase,
        public placa: string
    ) { }
}

class Moto implements Veiculo {
    constructor(
        public modelo: ModeloBase,
        public placa: string
    ) { }
}

//Classe abstrata para criação do veículo
abstract class CriarVeiculo {
    public abstract criarVeiculo( 
        modelo: ModeloBase,
        placa: string
    ): Veiculo;

    public cadastrarVeiculo(
        modelo: ModeloBase,
        placa: string
    ): Veiculo {
        const veiculo = this.criarVeiculo(modelo, placa);
        console.log("Veículo cadastrado.");
        return veiculo;
    }
}

//Decisão de qual veículo criar
class CriarCarro extends CriarVeiculo {
    public criarVeiculo(
        modelo: ModeloBase, 
        placa: string
    ): Veiculo {
        return new Carro(modelo, placa);
    }
}

class CriarMoto extends CriarVeiculo {
    public criarVeiculo(
        modelo: ModeloBase, 
        placa: string
    ): Veiculo {
        return new Moto(modelo, placa);
    }
}

//=================================================================

/*
Implementação do Abstract Factory
Definido como um modelo de planos de aluguel (Básico e remium), que se encaixam no conceito de 'Famílias' do padrão.
*/

interface Seguro {
    contratar(): void;
}

interface Assistencia {
    ativar(): void;
}

interface FabricaAluguel {
    criarSeguro(): Seguro;
    criarAssistencia(): Assistencia;
}

//Família | Aluguel Básico
class SeguroBasico implements Seguro {
    contratar(): void {
        console.log("Seguro básico contratado");
    }
}

class AssistenciaBasica implements Assistencia {
    ativar(): void {
        console.log("Assistência básica ativada.");
    }
}

//Fábrica | Aluguel Básico
class FabricaBasico implements FabricaAluguel {
    criarSeguro(): Seguro {
        return new SeguroBasico();
    }

    criarAssistencia(): Assistencia {
        return new AssistenciaBasica();
    }
}

//Família | Aluguel Premium
class SeguroPremium implements Seguro {
    contratar(): void {
        console.log("Seguro premium contratado.")
    }
}

class AssistenciaPremium implements Assistencia {
    ativar(): void {
        console.log("Assistência premium ativada.")
    }
}

//Fábrica | Aluguel Premium
class FabricaPremium implements FabricaAluguel {
    criarSeguro(): Seguro {
        return new SeguroPremium();
    }

    criarAssistencia(): Assistencia {
        return new AssistenciaPremium();
    }
}
//=================================================================

/*
Implementação do Builder
Definido como o serviço de preenchimento da reserva do veículo. O Builder facilita a criação de objetos complexos com parâmetros opcionais, com cada um tendo uma própria função e entrega o objeto pronto só quando solicitado.
*/

interface Reserva {
    cliente: string;
    cpf?: string;
    veiculo: string;
    dataRetirada: string;
    dataDevolucao: string;
    quilometragem?: string;
    anoFabricacao?: string;
    valor: number;
    seguro?: Seguro;
    assistencia?: Assistencia;
}

class ReservaBuilder {
    private clienteReserva = "";
    private cpfReserva?: string;
    private veiculoReserva = "";
    private dataRetiradaReserva = "";
    private dataDevolucaoReserva = "";
    private quilometragemReserva?: string;
    private anoFabricacaoReserva?: string;
    private valorReserva = 0;
    private seguroReserva?: Seguro;
    private assistenciaReserva?: Assistencia;

    defCliente(cliente: string) {
        this.clienteReserva = cliente;
        return this;
    }

    defCPF(cpf: string) {
        this.cpfReserva = cpf;
        return this;
    }

    defVeiculo(veiculo: string) {
        this.veiculoReserva = veiculo;
        return this;
    }

    defDataRetirada(dataRetirada: string) {
        this.dataRetiradaReserva = dataRetirada;
        return this;
    }

    defDataDevolucao(dataDevolucao: string) {
        this.dataDevolucaoReserva = dataDevolucao;
        return this;
    }

    defQuilometragem(quilometragem: string) {
        this.quilometragemReserva = quilometragem;
        return this;
    }

    defAnoFabricacao(anoFabricacao: string) {
        this.anoFabricacaoReserva = anoFabricacao;
        return this;
    }
    
    defValor(valor: number) {
        this.valorReserva = valor;
        return this;
    }

    defSeguro(seguro: Seguro) {
        this.seguroReserva = seguro;
        return this;
    }

    defAssistencia(assistencia: Assistencia) {
        this.assistenciaReserva = assistencia;
        return this;
    }

    build(): Reserva {
        const reserva: Reserva = {
            cliente: this.clienteReserva,
            veiculo: this.veiculoReserva,
            dataRetirada: this.dataRetiradaReserva,
            dataDevolucao: this.dataDevolucaoReserva,
            valor: this.valorReserva,
        };

        if(this.cpfReserva !== undefined) {
            reserva.cpf = this.cpfReserva;
        }

        if(this.quilometragemReserva !== undefined) {
            reserva.quilometragem = this.quilometragemReserva;
        }

        if(this.anoFabricacaoReserva !== undefined) {
            reserva.anoFabricacao = this.anoFabricacaoReserva;
        }

        if(this.seguroReserva !== undefined) {
            reserva.seguro = this.seguroReserva;
        }

        if(this.assistenciaReserva !== undefined) {
            reserva.assistencia = this.assistenciaReserva;
        }

        return reserva;
    }
}

//=================================================================

/*
Implementação do Prototype
Definido como um serviço de clonagem e alteração de modelos. Os modelos podem ter uma base definida no sistema, mas podem ser gerados clones com alterações seguindo a base, mantendo a integridade da base.
*/

class ModeloBase {
    constructor(
        public nomeModelo: string,
        public categoria: string,
        public cambio: string,
        public gps: boolean
    ) {}

    clone(): ModeloBase {
        return new ModeloBase(
            this.nomeModelo,
            this.categoria,
            this.cambio,
            this.gps
        );
    }
}

//=================================================================

/*
Implementação de Uso:
-> Singleton (Uso de um único sistema)
-> Factory (Criando o veículo) + Prototype (Utilizando bases e cópias na criação)
-> Abstract (Definindo plano) + Builder (Criação da reserva)
*/

console.log("\nSINGLETON");

const sistema1 = SistemaLocadora.obterInstancia();
const sistema2 = SistemaLocadora.obterInstancia();

console.log(sistema1 === sistema2);

console.log("\nPROTOTYPE + FACTORY METHOD");

//Criando um modelo base (Prototype)
const corollaBase = new ModeloBase(
    "Toyota Corolla",
    "Sedan",
    "Automático",
    true
);

const corollaCopia = corollaBase.clone();

//Criando veículo (Factory)
const criadorCarro = new CriarCarro();

const carro = criadorCarro.cadastrarVeiculo(
    corollaCopia, //Usa um objeto 
    "ABC1B34"
);

console.log(carro);

console.log("\nABSTRACT FACTORY + BUILDER");

//Escolhendo o plano Premium, definindo Seguro e Assistência (Abstract)
const fabrica = new FabricaPremium();

//Cadastro da reserva (Builder)
const reserva = new ReservaBuilder()
    .defCliente("José Cardozo")
    .defVeiculo(carro.modelo.nomeModelo)
    .defDataRetirada("20/10/2026")
    .defDataDevolucao("25/10;2026")
    .defSeguro(fabrica.criarSeguro())
    .defAssistencia(fabrica.criarAssistencia())
    .defValor(800)
    .build();

console.log(reserva);