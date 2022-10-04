**RF** => Requisitos funcionais 
**RNF** => Requisitos não funcionais 
**RN** => Regras de negócios 

#Cadstro de Carro
**RF** Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RN**

Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão por disponibilidade.
O usuario responsável pelo cadastro deve ser um usuario admin.

#Listagem de carros

**RF**
Deves ser possível listar todos os carros disponíveis
Deve ser posssível listar todos os carros disponíveis pelo nome da categoria
Deve ser posssível listar todos os carros disponíveis pelo nome da marca
Deve ser posssível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema

#Cadastro de Especificação no carro
**RF**
Deve ser posssível cadastrar uma especificação para um carro
Deve ser posssível  listar todas as especificações
Deve ser posssível listar todos os carros

**RN**
Não deve ser possivel cadastar uma especificação para um carro não cadastrado
Não deve ser possivel cadastar uma especificação já existente para o mesmo carro

#Cadastro de imagens do carro
**RF**

Deve ser posssível cadastrar  a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**

O usuário pode cadastrar mais de uma imagem para o mesmo  carro
O usuário responsável pelo cadastro deve ser um admin


#Aluguel de carros 

**RF**
Deves ser possível cadastrar um aluguel 

**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
