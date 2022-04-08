# GESTÃO REGISTRO
- Responsavel pelo registro das atividades dos funcionarios.
- Listagem de usuarios ativos e inativos.
- Cadastro de novos projetos.

## CENTRO DE CUSTO 
+ calcular as horas trabalhadas,
+ fazer a porcentagem desse valor, NOVOS REGISTROS DEVERÃO ADICIONAR O TEMPO TRABALHADO NO CENTRO DE CUSTO. 
+ somar o total das horas trabalhadas por centro de custo por mes ( new Date(), pegar o mês e fazer o calculo)


#Models DB
+ Aloca 
  + + id
  + + assunto
  + + nome_usuario
  + + email_usuario
  + + createAt
  + + finallyAt
  + + projeto.rel.centrodcusto
+ Adm
  + + nome
  + + setor
  + + cargo
  + + email
  + + phone
+ Projeto
  + + nome
  + + gerente.rel.ge
  + + setor
  + + createAt
  + + finallyAt
  + + assunto
+ Gerente
  + + nome
  + + email
  + + phone
  + + setor
  + + cargo

# Implementação
### Centro de custo
+ + Cada registro tem um centro de custo (projeto).
+ + Cada centro de custo tem um gerente.

### Cadastrar novos gerentes
+ + Cadastro de novos gerentesa o centro de custos.


## Atividades

### Painel funcionario
+ + Criar novo registro.
+ + Lista todos seus registro.
+ + Excluir registros.
+ + Editar registros.

### Painel administrador
+ + Criar novos administradores.
+ + Criar novos centros de custos.
+ + Cadastras novos gerentes ao centro de custos.
+ + Editar, exclui registros.

## Administrador
+ + Cadastrar novos administradores.
+ + Edita registros.
+ + Excluir registros.
+ + Notifica funcionario.
+ + Filtrar funcionarios.


### Funcionario
+ + Criar novo registro.
+ + Excluir registro antigo.
+ + Acessa todos os seus registro.
