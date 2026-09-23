/*
Implementação do Singleton
Defini a classe principal como "Proprietário", que seria a pessoa proprietária do veículo e estaria o cedendo para aluguel. À princípio o usarei no Singleton, visto que cada veículo somente tem um único proprietário.
*/ 
class Proprietario {

private static instancia: Proprietario;
private nome: string;

private constructor() {
this.nome = "José Cardozo";
}

static obterInstancia(): Proprietario {
if (!Proprietario.instancia) {
Proprietario.instancia = new Proprietario();
}

return Proprietario.instancia;

}

obterNome(): string {
return this.nome;
}
}