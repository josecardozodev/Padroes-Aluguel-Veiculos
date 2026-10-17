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

Como existem vários objetos para criar para cada plano e não um (como no caso da criação de carros no Factory Method), o Abstract supre a necessidade de criar grupos de objetos relacionados, tendo esse grau à mais de complexidade em comparação ao Factory.


# Builder
Onde: src/index.ts | Linha 184
Por quê: esse padrão auxilia na criação de objetos complexos que possuem vários parâmetros e parâmetros opcionais. 

Dentro do escopo, o defini como um serviço da reserva do aluguel, como se fosse um formulário no qual apenas certos campos são de preenchimento obrigatório.

# Prototype
Onde: src/index.ts | Linha 291
Por quê: o padrão permite criar um modelo para um objeto e reutilizá-lo para criação de novos, sem interferir no original.

Dentro do escopo, está sendo usado como um serviço de clonagem de modelos de carros