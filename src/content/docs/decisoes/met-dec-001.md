---
title: "MET-DEC-001: contagem de módulos"
description: Manter a contagem ampla e a restrita de módulos em colunas separadas.
sidebar:
  label: MET-DEC-001 Contagem de módulos
  order: 1
---

| Campo | Valor |
|---|---|
| Código | MET-DEC-001 |
| Status | Aceita |
| Data | A preencher |
| Afeta | DTS1 |

## Contexto

Repositórios de microfrontends declaram workspaces que nem sempre são aplicações de frontend. Contar tudo infla o número de módulos; contar só as aplicações perde informação sobre a estrutura do repositório.

## Decisão

Manter as duas contagens, em colunas separadas:

- **Ampla:** todos os workspaces declarados.
- **Restrita:** apenas as aplicações de frontend funcionais.

## Consequências

:::note[A escrever]
O que muda na análise por ter as duas contagens.
:::
