# API de Games
Esta API é utilizada para controle de estoque de GAMES
## Endpoints
### POST /games
Esse endpoint cadastra um game na base de dados
#### Paramentros
Nenhum
#### Respostas
#### caso 201
Cria um game na base
#### Exemplos de criação
```
{
	"title": "Fifa",
	"year": "2020",
	"price": "159"
}
```
#### Exemplo de resposta

```
{
  "id": "2b953828-b03b-4d04-9daf-3d99dfb4c3c2",
  "title": "Fifa",
  "year": "2020",
  "price": "159"
}
```
#### Falha na autenticação 401
Caso aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição, Motivos: Token invalido, Token Expirado.

#### Exemplo de Token invalido ou Expirado
```
{
  "err": "Token invalido"
}
```
-----------------------------------------------------------------------------------------------------------------------------------------------
### GET /games/:id
Esse endpoint busca um game pelo id
#### Paramentros
id: ID de busca relacionado ao game, ID tipo UUID

Exemplo: 
```

/games/2803d488-edc6-4fe7-9e58-a8c81d34b905

```

#### Respostas
#### caso 200
Casso essa resposta aconteça voçe vai receber o game referente ao ID buscado.

Exemplo:
```
{
  "id": "2803d488-edc6-4fe7-9e58-a8c81d34b905",
  "title": "Super Mario",
  "year": "2012",
  "price": "98"
}
```
-----------------------------------------------------------------------------------------------------------------------------------------------
### GET /findGames
Esse endpoint busca todos os games cadastrado na base
#### Paramentros
nenhum

#### Respostas
#### caso 200
Casso essa resposta aconteça voçe vai receber o game referente ao ID buscado.

Exemplo:
```

{
    "id": "b6146228-9c83-4ebd-875f-047784ed5a3e",
    "title": "CallOFDuty",
    "year": "2020",
    "price": "39"
  },
  {
    "id": "2803d488-edc6-4fe7-9e58-a8c81d34b905",
    "title": "Super Mario",
    "year": "2012",
    "price": "98"
  },
  {
    "id": "c2f6edc9-0872-4e80-b8af-7b54072994db",
    "title": "007",
    "year": "1998",
    "price": "120"
  },
  {
    "id": "2b953828-b03b-4d04-9daf-3d99dfb4c3c2",
    "title": "Fifa",
    "year": "2020",
    "price": "159"
  }

```
-----------------------------------------------------------------------------------------------------------------------------------------------
### PUT /:id
Esse endpoint faz update em um game por ID
#### Paramentros
id: ID de update relacionado ao game, ID tipo UUID, modificações no json abaixo chamando essa rota será atualizado

Exemplo: 
```
{
  "title": "Normaland - vence oscar",
  "year": "2020",
  "price": "1252"
}

```

#### Respostas
#### caso 200
Casso essa resposta aconteça voçe vai receber o game referente ao ID buscado.

Exemplo:
```
{
  "id": "2803d488-edc6-4fe7-9e58-a8c81d34b905",
  "title": "Super Mario",
  "year": "2012",
  "price": "98"
}
```
-----------------------------------------------------------------------------------------------------------------------------------------------

### DELETE /:id
Esse endpoint faz Deleta em um game por ID
#### Paramentros
id: ID de update relacionado ao game, ID tipo UUID, D no json abaixo chamando essa rota será atualizado


#### Respostas
#### caso 200
Casso essa resposta aconteça voçe deletou um game.


-----------------------------------------------------------------------------------------------------------------------------------------------

### POST /auth
Esse endpoint authentica o processo de login
#### Paramentros
email: email do usuario no sistema

password: Senha do usuario cadastrado no sistema, com aquele respectivo email

Exemplo: 
```
{
	"email": "teste@gmail.com",
	"password": "123"
}
```

#### Respostas
#### caso 200
Casso essa resposta aconteça voçe vai receber o token jwt para conseguir acessar endpoints protegidos na API
#### Exemplos de criação
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MDA5ZmI5LTU2MTAtNGNlYi1hN2Q5LWU1OGQyZmViOGQxNyIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjIwMDczNTU0LCJleHAiOjE2MjAyNDYzNTR9.c8Ovvr1ftIporKZcvfn_m
  }
```
#### Falha na autenticação 400
Caso aconteça, isso significa que aconteceu alguma falha durante o a geração do token. Erro sign do JWT

#### Exemplo de resposta
```
{
  token: "Falha na geraçao de token"
}
```

#### Falha na autenticação 400
Caso aconteça, isso significa que aconteceu alguma falha durante o a geração do token. Email enviado para autenticar não é valido

#### Exemplo de resposta
```
{
  err: "E-mail enviado é invalido" 
}
```

#### Falha na autenticação 401
Caso aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição, Motivos: Senha ou e-mail incorretos.

#### Exemplo de resposta
```
{
  err: "Credencial invalida" 
}
```
#### Falha na autenticação 404
Caso aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição, Motivos: Email não existe na base de dados.

#### Exemplo de resposta
```
{
  err: "Credencial invalida" 
}
```
-----------------------------------------------------------------------------------------------------------------------------------------------
### POST /userCreate
Esse endpoint cria um usuario no banco, esse usuario será usado para o acesso a plataforma
#### Paramentros
nenhum

Exemplo: 
```
{
	"name": "Samuel",
	"email": "teste@gmail.com",
	"password": "123"
}

```

#### Respostas
#### caso 200
Casso essa resposta aconteça voçe vai receber o game referente ao ID buscado.

Exemplo:
```
{
  "id": "14009fb9-5610-4ceb-a7d9-e58d2feb8d17",
  "name": "Samuel",
  "email": "teste@gmail.com",
  "password": "123"
}
```
-----------------------------------------------------------------------------------------------------------------------------------------------
