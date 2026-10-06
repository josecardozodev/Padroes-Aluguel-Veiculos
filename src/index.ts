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

const sistema1 = SistemaLocadora.obterInstancia();
const sistema2 = SistemaLocadora.obterInstancia();

console.log(sistema1 === sistema2);