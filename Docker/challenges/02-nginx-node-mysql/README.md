# FullCycle 3.0
## Curso Docker 

### Challenge Nginx com Node.js
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
  <h1>Full Cycle Rocks!</h1>

  ... Lista  de nomes cadastrados.
```

### Executar projeto

```
git clone git@github.com:fluk-code/Course-FullCycle.git

cd Docker/challenges/02-nginx-node-mysql

docker-compose up -d
```
