# google-spreadsheets :bookmark_tabs:

Este serviço foi criado com o intuito de utilizar a API do Google Planilhas usando Node JS.

## Tecnologias usadas :bulb:
1. Node JS
2. DotEnv

## Antes de executar :hand:
Você precisará de algumas informações e credenciais, para consegui-las, será necessário seguir os seguintes passos:

1. Criar um novo projeto no [Google Console](https://console.developers.google.com/)
![Tela de criação de projeto](/assets/images/imagem-1.png)

Você precisará preencher o campo _Nome do projeto_:
![Informações para criar o projeto](/assets/images/imagem-2.png)

2. Ativar APIs e Serviços
Para este projeto você usará a API do Google Spreadsheet. Para ativá-la, você deverá clicar em _+ ATIVAR APIS E SERVIÇOS_, no topo da imagem abaixo:
![Ativar APIs e Serviços](/assets/images/imagem-3.png)

Buscar por _Google Spreadsheet_ e ativar esta API:
![Ativa a API Google Spreadsheet](/assets/images/imagem-4.png)

3. Criar as credenciais necessárias:
No menu lateral esquerdo, você deve clicar em _Credenciais_ e, em seguida, em _+ CRIAR CREDENCIAIS_:
![Tela de criar credenciais](/assets/images/imagem-5.png)

Escolha a opção _CONTA DE SERVIÇO_ e conceda acesso de **editor** para a conta de serviço criada.

Após esse processo, será feito o download de um arquivo json com as credenciais necessárias. Desse arquivo JSON, você só usará o *client_email* e o *private_key*. No meu caso, eu peguei esses valores e usei no arquivo `.env`, caso não queira fazer o mesmo, lembre-se de alterar no arquivo _index.js_.

Quando você criar a planilha (ou caso já tenha uma existente), você precisará compartilhar ela com a sua conta de serviço criada. Para esta etapa você seguirá o fluxo de compartilhamento da planilha normalmente, mas adicionando o email da sua conta de serviço.

:warning: **O email da sua conta de serviço não é o seu email pessoal, e sim o email que está disponível dentro do [Google Console](https://console.developers.google.com/)**

## Informações importantes :speech_balloon:
### Imprimir todas as linhas
Basta usar o seguinte comando: 
`console.log(rows)`

### Imprimir colunas específicas
`console.log(row.studentname, row.gender)`

`studentname` e `gender` são colunas específicas da minha planilha, mas você adicionar as estão na sua planilha.

### Adicionar uma nova linha
~~~
    await promisify(worksheet.addRow)({
        studentname: "novo nome",
        gender: "female",
        classlevel: "1. Freshman",
        homestate: "CA",
        major: "English",
        extracurricularactivity: "Drama Club"
    })
~~~

### Filtrar, imprimir e deletar a informação encontrada
~~~
    const rows = await promisify(worksheet.getRows)({
        query: "studentname = Thomas"
    })
    rows.forEach(row => {
        console.log(row.studentname, row.gender)
        row.del()
    })
~~~

## Para executar o projeto
- `npm install`
- `node ./index.js`

## Referências
- [Google Apps Script](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
- [Node JS Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)