# Sistema para Aluguel de Veículos

Anotações Inicias: É um bom tema para trabalhar certos padrões, principalmente o Abstract Factory, visto que com carros conseguimos criar facilmente as famílias (como 'Esportivo', 'Popular') e suas classes (como 'Elétrico', 'Combustão', etc.), assim como já apresentado em aula.

Singleton: está sendo aplicado neste contexto como o próprio sistema da locadora, sendo responsável por conectar as funcionalidades de forma centralizada. Só pode haver um único sistema em uso aqui.

Factory Method: penso em implementar como o serviço de criação dos veículos no sistema, e desenvolver mais com outros padrões restantes.

Builder: penso em implementar como o serviço de aluguel. Como esse padrão utiliza de vários elementos e precisa que o usuário final preencha com várias informações, imagino que serviria como um "formulário" no qual você preenche os dados necessários para efetuar o aluguel. 
Como haveriam vários aluguéis com dados diferentes mas utilizando da mesma base, creio que esse padrão se encaixa bem.

Prototype: possivelmente irei utilizar para clonar modelos dos veículos ou algo semelhante.