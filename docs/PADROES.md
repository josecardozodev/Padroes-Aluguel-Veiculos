# Singleton
Onde: src/index.ts | Linha 2
Por quê: dentro do contexto o Singleton seria o sistema como um todo. Só pode haver um único sistema, e outras funcionalidades só poderão utilizar de um único sistema para serem executadas.

Está sendo aplicado neste contexto como o próprio sistema da locadora, sendo responsável por conectar as funcionalidades de forma centralizada. Só pode haver um único sistema em uso aqui.

# Factory Method 
Onde: src/index.ts | Linha 42
Por quê: este padrão permite uma simples criação e manipulação de objetos através de interfaces e extensões, mostrando ao usuário final somente o objeto já criado, sem dar detalhes de como é criado.

Em meu escopo, foi implementado como um serviço de criação/cadastro de veículos no sistema (carros e motos). O usuário pode decidir qual tipo de veículo criar sem precisar ter detalhes de como é fabricado, informando somente o modelo e placa. 

Se encaixa nesse cenário se pensarmos que nem o funcionário que cadastrar o veículo no sistema e nem o cliente que está alugando um veículo precisam saber como ele é fabricado, apenas precisam decidir se é carro ou moto, e após, informar modelo e placa.

Esse padrão ajuda na escabilidade. Caso eu precisasse cadastrar outros veículos, como bicicletas, caminhões, carretas, entre outros, eu poderia apenas criar novos tipos de veículo sem interferir na interface base e sem necessitar de alta reescrita e manutenção. 

# Abstract Factory
Onde: src/index.ts | Linha 106
Por quê: permite criação de "famílias" de objetos relacionados entre si. Dentro do escopo, está sendo utilizado como um serviço de escolha de planos de aluguel (Básico ou Premium).

Como existem vários objetos para criar e não só um, como no caso da criação de carros no Factory Method, o Abstract supre a necessidade de criar grupos de objetos relacionados, tendo esse grau à mais de complexidade em comparação ao Factory.

# Demais planejamentos pré-implementação:

Builder: penso em implementar como o serviço de aluguel. Como esse padrão utiliza de vários elementos e precisa que o usuário final preencha com várias informações, imagino que serviria como um "formulário" no qual você preenche os dados necessários para efetuar o aluguel. 
Como haveriam vários aluguéis com dados diferentes mas utilizando da mesma base, creio que esse padrão se encaixa bem.

Prototype: possivelmente irei utilizar para clonar modelos dos veículos ou algo semelhante.