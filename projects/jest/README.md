# Boas vindas ao repositório do projeto de Jest Assíncrono e Mocking!

---

# Sumário
- [Boas vindas ao repositório do projeto de Jest Assíncrono e Mocking!](#boas-vindas-ao-repositório-do-projeto-de-jest-assíncrono-e-mocking)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
    - [Revisando um pull request](#revisando-um-pull-request)
- [Como desenvolver](#como-desenvolver)
  - [Code Climate](#code-climate)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)
    - [1 - Crie testes para uma função assíncrona](#1-crie-testes-para-uma-função-assíncrona)
    - [2 - Crie um "Mock" no arquivo test/mockFunctions.spec.js](#2-Crie-um-"Mock"-no-arquivo-test/mockFunctions.spec.js)
    - [3 - Crie um Mock para o retorno da API](#3-Crie-um-Mock-para-o-retorno-da-API)
    - [4 - Crie funções no arquivo test/setupTeardown.spec.js](#4-Crie-funções-no-arquivo-test/setupTeardown.spec.js)
- [Avisos finais](#avisos-finais)

---

# Habilidades testadas

- Escrever testes para funções assíncronas;
- Aplicar conhecimentos acerca de testes utilizando o Jest;
- "Mockar" funções;
- "Mockar" APIs;

---

# Entregáveis

Implementar testes utilizando o **Jest** para verificar se uma série de funções estão funcionando corretamente. Colocar em prática todo o conteúdo aprendido sobre Jest assíncrono e Mocks aplicados a testes em Javascript.

---

# Como desenvolver

## Code Climate

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o `Code Climate`. Para rodar o Code Climate localmente no seu projeto, execute o comando abaixo:

```bash
codeclimate analyze
```
---

# Requisitos do projeto

## Lista de requisitos

### 1. Crie testes para uma função assíncrona

Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

### 2. Crie um "Mock" no arquivo test/mockFunctions.spec.js

Crie mock functions no arquivo `test/mockFunctions.spec.js` para que os testes mockados 'sobrescrevam' o código definido na pasta `src`. A idéia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

### 3. Crie um Mock para o retorno da API

Crie um API mock no arquivo `test/mockApi.spec.js` para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

Exemplo de resposta da API randomuser.me:

```js

{
  gender: 'female',
  name: { title: 'Ms', first: 'Deborah', last: 'Hanson' },
  location: {
    street: { number: 1299, name: 'Rochestown Road' },
    city: 'Birr',
    state: 'Wicklow',
    country: 'Ireland',
    postcode: 16223,
    coordinates: { latitude: '26.2451', longitude: '45.2995' },
    timezone: {
      offset: '+5:30',
      description: 'Bombay, Calcutta, Madras, New Delhi'
    }
  },
  email: 'deborah.hanson@example.com',
  login: {
    uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
    username: 'bluewolf366',
    password: 'iverson3',
    salt: 'XKOOGc2x',
    md5: '8cb7b4686f3869247b3ed189de780ea6',
    sha1: 'c24641f415cf36f4494ea4007fb3d77b47a6aad5',
    sha256: 'a7bdd079ead0adf21f30cee5b94e5581a9fa0d5fc8b3c1881dbc864dabc55a80'
  },
  dob: { date: '1965-10-01T06:35:49.694Z', age: 55 },
  registered: { date: '2009-02-11T05:48:39.772Z', age: 11 },
  phone: '021-953-7205',
  cell: '081-160-6277',
  id: { name: 'PPS', value: '0109675T' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/7.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg'
  },
  nat: 'IE'
}

```

### 4. Crie funções no arquivo test/setupTeardown.spec.js

Intercale funções entre os testes definidos no arquivo `test/setupTeardown.spec.js`.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
