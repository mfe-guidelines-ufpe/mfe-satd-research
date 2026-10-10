# SATD em Microfrontends

Documentação da pesquisa de mestrado de Samara Silvia Sabino no CIn/UFPE, orientada pelo Prof. Vinicius Cardoso Garcia: dívida técnica autoadmitida (SATD) como lente de diagnóstico para os desafios arquiteturais de microfrontends.

O site é feito com [Astro Starlight](https://starlight.astro.build) e usa a identidade visual do Synapse.

## Rodando

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera o site estático em dist/
```

## Onde fica cada coisa

```
src/content/docs/
├── index.mdx          # página inicial
├── visao-geral/       # objetivo, questões de pesquisa, escopo
├── metodologia/       # protocolo de validação cruzada circular
├── dts1/              # mapeamento do ecossistema
├── dts2/              # mineração de SATD
├── taxonomia/         # categorias de dívida técnica
├── decisoes/          # MET-DEC-001, MET-DEC-002...
├── check-ins/         # check-ins semanais com o orientador
├── referencias/       # artigos centrais e fichamentos
└── glossario.md
src/styles/synapse.css # identidade visual
templates/             # modelos de decisão e de check-in
```

Cada pasta vira um grupo da barra lateral automaticamente. Para criar uma página, basta adicionar um arquivo `.md` na pasta certa.

## Registrando uma decisão

1. Copie `templates/decisao.md` para `src/content/docs/decisoes/met-dec-XXX.md`.
2. Preencha o código, o status, a data, o contexto, a decisão e as consequências.
3. Faça o commit com a decisão no título, por exemplo: `docs(decisoes): add MET-DEC-002 on stratified sampling`.

Uma decisão substituída não é apagada. Mude o status para "Substituída por MET-DEC-YYY" e crie a nova.

## Registrando um check-in

Copie `templates/check-in.md` para `src/content/docs/check-ins/AAAA-MM-DD.md`.

## Publicação

A pesquisa ainda não foi publicada. Antes de fazer deploy, decida se o site fica só local ou se vai para um serviço com proteção por senha. Um deploy comum na Vercel ou na Netlify deixa o conteúdo público.
