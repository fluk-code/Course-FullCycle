Para subir container keyclock é recomendado utilizar a imagen do banco de imagens da [Red Hat](https://quay.io/repository/keycloak/keycloak), 
pois a imagem do [Docker Hub](https://hub.docker.com/r/jboss/keycloak/ ) parou de ser atualizada dede a versão 16.1.1. 

As configurações basicas para subir o container são:
``` yaml
version: '3'

services:

  keycloack: 
    image: quay.io/keycloak/keycloak:21.1
    command: start-dev
    ports:
      - 8080:8080
    environment:
      - KEYCLOAK_ADMIN=admin
      - KEYCLOAK_ADMIN_PASSWORD=admin
```

Quando não informamos o banco por padrão é utilizado o `H2`, atenção ao utilizar o H2 é que ele funciona semelhante ao sqlite mantendo os dados em um arquivo, e ao perder seu container ele perde também o banco de dados.