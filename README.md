# Desafio MB Web

Código realizado como teste de emprego onde foi criado um frontend (vue3) e backend (node.js + express).

## Objetivo

Esse desafio tem como objetivo em nos ajudar a entender seus conhecimentos sobre a plataforma Web, as linguagens, conceitos de base de Javascript, HTML, CSS, protocolo HTTP,  comunicação entre cliente (browser/app) e servidor/APIs e como você constrói a solução técnica com base nos requisitos apresentados.

# Rodando o Projeto

1. Realize o clone do projeto
2. Pelo terminal de sua maquina navegue ate a pasta
3. Entre na pasta frontend, `cd frontend`, e digite os seguintes comandos:
  - `npm i` ou `npm install`
  - `npm run dev`
4. Em uma nova janela do terminal, entre na pasta backend, `cd backend`, e digite os seguintes comandos:
  - `npm i` ou `npm install`
  - `npm run dev`
5. Em seu navegador acesse: [http://localhost:5173/](http://localhost:5173/)
  - Para verificar se o backend esta funcionado acesse: [http://localhost:3000/api/registration](http://localhost:3000/api/registration)

# Layout

O layout foi replicado com base na imagem abaixo

![layout](https://user-images.githubusercontent.com/83235141/225743749-ca86ca69-5902-4a75-bb42-d6c0fc169bf4.png)

As cores foram utilizadas primariamente da seguinte [Paleta](https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff)

Para o desenvolvimento do mesmo não foi utilizada bibliotecas visuais de terceiros, todavia foi utilizado um arquivo para resetar o css, tal arquivo pode ser encontrado no seguinte [Git](https://github.com/MattTrovao/CssBase). 

# Validações

O sistema utiliza validações no frontend, cada etapa possui validações especificas, quando elas são concluidas o botão de 'Continuar' é habilitado.

1. Etapa 1
    - Valida se o campo email esta preenchido e se é um email 
    - Valida se um tipo de pessoa foi escolhido
2. Etapa 2
    - Valida se o campo Nome foi preenchido.
    - Valida se o campo CPF/CNPJ foi preenchido. Utiliza a biblioteca [VueMask](https://vuejs-tips.github.io/vue-the-mask/) para as máscaras.
    - Valida se o campo Data de Nascimento/Abertura foi preenchido. Utiliza a biblioteca [VueMask](https://vuejs-tips.github.io/vue-the-mask/) para as máscaras.
    - Valida se o campo Telefone foi preenchido.
    - Valida se o usuário for pessoa fisica o campo CPF possuiu 14 caracteres.
    - Valida se o usuário for pessoa juridica o campo CNPJ possuiu 18 caracteres.
3. Etapa 3
    - Valida se o campo Senha foi preenchido.
4. Etapa 4
    - Valida se todos os campos foram preenchidos.

Foi optado por realizar validações apenas client-side para manter uma aplicação mais simples e rápida. Não sendo necessário chegar na última etapa para validar se um campo foi preenchido incorretamente e assim retornar todo o processo.

# Possíveis melhorias no Front
- Utilizar um metodo de validação mais seguro para o campo email.
- Adicionar regras de como a senha deve se comportar (Número de caracteres, símbolos especificiais, números)

# Possíveis melhorias no Back
- Melhorar mensagem de erro, atualmente vem uma mensagem genérica e o front usa um texto genérico.
- Adicionar validação do CPF/CNPJ de forma a evitar duplicatas.

