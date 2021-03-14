Desafio de código de back-end do Ze Delivery
Este projeto é uma API NodeJS REST desenvolvida para o desafio de código de backend da posição Ze Delivery.

Primeiros passos
Siga estas instruções para obter uma cópia deste projeto em seu ambiente local para desenvolver e testar.

Ferramentas
Para executar o projeto, você precisará de:

NodeJS
MongoDB
Instalando Dependências
Clone este repo:

git clone https://github.com/angelobzsouza/ze-backend-challenge.git
 cd ze-backend-challenge
Você pode usar o npm para esta tarefa, mas é recomendado usar o Yarn . Para instalar:

npm install -g yarn
Em seguida, instale as dependências do projeto:

yarn
Ambiente
Crie um arquivo .env e defina suas variáveis ​​de ambiente local:

cp .env-example .env
Observe que, se sua instância local do MongoDB não estiver aguardando autenticação, você deverá excluir as variáveis ​​DB_USER e DB_PASS. Seu arquivo .env será assim:

PORT = < app_port > 
DB_URL = ' mongodb: // localhost: 27017 / ' 
DB_NAME = ' <db_name> '
Base de dados
Para propagar o banco de dados:

banco de dados de fios: sementes
Teste
Crie o arquivo .env.test usando.

cp .env-example .env.test
É importante definir outro banco de dados para fazer testes. Se seu banco de dados não usa autenticação, exclua as variáveis ​​de autenticação como o arquivo .env:

Você pode fazer testes de integração usando

teste de fio
ou com cobertura

teste de fio: cobertura
Correndo
Após a configuração, para executar o aplicativo:

início do fio
Rotas
Você pode acessar a API pelas seguintes rotas:

Método	Rota	Descrição
OBTER	/saúde	Retorne um código de status 200 e uma mensagem dizendo que a API está em execução
OBTER	/ docs	Mostre uma documentação API completa usando Swagger UI Express . Você pode testar as rotas a partir daqui.
OBTER	/ v1 / pdvs /: id	Obtenha um pdv específico por seu id
OBTER	/ v1 / pdvs / mais próximo /: lng /: lat	Obtenha o PDV mais próximo, passando por um local específico (lng, lat), considerando as áreas de cobertura dos PDVs
PUBLICAR	/ v1 / pdvs	Insira um novo pdv no banco de dados
