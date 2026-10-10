---
title: satd-miner
description: Pipeline de extração de SATD e resultados dos primeiros lotes.
sidebar:
  order: 1
---

O `satd-miner` é o pipeline em Python que extrai SATD dos repositórios do DTS1.

## Lotes processados

| Lote | Repositórios | SATD após limpeza | Observação |
|---|---|---|---|
| batch-005 | 5 | 232 | Lote de validação |
| batch-050 | 50 | 1.542 | Cerca de 41% de falsos positivos removidos |

No batch-050, cerca de 8,7% dos registros usam vocabulário específico de microfrontends, com predominância de termos de autenticação, token e sessão.

## Regras de falso positivo

| Código | Regra |
|---|---|
| FP-001 | Anotações `@deprecated` em JSDoc |
| FP-002 | Caminhos com `TEMPORARY` |
| FP-003 | `REFACTOR` em mensagens de commit |

## Próximo passo

Expandir para um subconjunto estratificado de cerca de 100 repositórios: todos os projetos de produção, todos os de comunidade, indústria e academia, e os exemplos mais ativos por commits e churn. Esse subconjunto será cruzado com as métricas do DTS1.
