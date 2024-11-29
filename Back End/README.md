# Projeto Pet Connect Avanti

## Contribuidores:
### Josimara Silva

 * Rotas e Controller de Histórico Médico
### Gleice Kelly

Rotas e Controller de Adoção.
No arquivo `AdocaoController.js` foram criadas as ações mais relevantes para as rotas de adoções
1. Listar adoções (Visualiza as adoções já realizadas);
2. Visualizar adoção por ID (Obtém detalhes específicos de uma adoção, caso seja necessário);
3. Criar uma adoção (Cria um novo registro de adoção, e atualiza o status do pet para “adotado”);
4. Excluir adoção (Rota opcional, caso uma adoção precise ser anulada, essa rota pode remover o registro da adoção e atualizar o status do pet de volta para “disponível”).
No arquivo AdocaoRoutes.js estão as rotas referentes a cada ação.

### Cairo Carrilho

Rotas, Controller e Configuração do Banco de Dados PostgreSQL no Servidor Render
No arquivo de rotas foram criados os caminhos da tabela pet. No arquivo Controller foram criadas as requisições HTTP: GET, POST, UPDATE e DELETE.

### Yuri Oliveira

* Modelagem do banco de dados;
* Criação da regra de negócio da entidade Adotante;
* Criação das rotas para a entidade Adotante;
* Integração das branches.


# Configuração do Projeto Após um Pull

Após puxar o projeto com um `git push`, siga as etapas abaixo para configurar e iniciar o projeto em sua máquina local.

## 1. Instale as Dependências

Execute o comando abaixo para garantir que todas as dependências necessárias estão instaladas:

```bash
npm install
```

## 2. Para iniciar o servidor

```bash
npm start
```

## 3. Gerar o Client do Prisma

```bash
npx prisma generate
```



