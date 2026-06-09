# Pipeline de Integração Contínua com GitHub Actions

## Descrição

Este repositório contém uma aplicação responsável por realizar e consultar pagamentos, além de testes automatizados de unidade desenvolvidos com Mocha.

O projeto também possui uma pipeline de Integração Contínua (CI) configurada no GitHub Actions, responsável por automatizar a execução dos testes e a geração de relatórios.

## Formas de execução da pipeline

A pipeline pode ser executada de três maneiras:

* **Execução manual** através do recurso `workflow_dispatch`.
* **Execução automática por push** na branch `master`.
* **Execução agendada** diariamente à 01:00 através da configuração `schedule` utilizando expressão cron.

## Funcionamento da pipeline

A pipeline é executada em uma máquina Ubuntu provisionada pelo GitHub Actions e realiza as seguintes etapas:

1. Clona o repositório.
2. Instala a versão configurada do Node.js.
3. Instala as dependências do projeto.
4. Executa os testes automatizados de unidade.
5. Gera um relatório de execução utilizando o reporter Mochawesome.
6. Armazena o relatório como artefato da execução da pipeline.

## Tecnologias utilizadas

* GitHub Actions
* Node.js
* Mocha
* Mochawesome

## Relatórios

Após a execução da pipeline, o relatório gerado pode ser acessado na seção **Artifacts** da execução do workflow no GitHub Actions.

O relatório contém informações sobre:

* Quantidade de testes executados.
* Testes aprovados.
* Testes reprovados.
* Tempo de execução.
* Detalhes de eventuais falhas.
