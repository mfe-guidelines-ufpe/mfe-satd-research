// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'SATD em Microfrontends',
      description: 'Documentação da pesquisa de mestrado sobre dívida técnica autoadmitida em arquiteturas de microfrontends (CIn/UFPE).',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: { root: { label: 'Português', lang: 'pt-BR' } },
      customCss: ['./src/styles/synapse.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/SamaraSilvia81' },
      ],
      sidebar: [
        { label: 'Visão geral', items: [{ autogenerate: { directory: 'visao-geral' } }] },
        { label: 'Metodologia', items: [{ autogenerate: { directory: 'metodologia' } }] },
        { label: 'DTS1: mapeamento do ecossistema', items: [{ autogenerate: { directory: 'dts1' } }] },
        { label: 'DTS2: mineração de SATD', items: [{ autogenerate: { directory: 'dts2' } }] },
        { label: 'Taxonomia', items: [{ autogenerate: { directory: 'taxonomia' } }] },
        { label: 'Decisões', items: [{ autogenerate: { directory: 'decisoes' } }] },
        { label: 'Check-ins', collapsed: true, items: [{ autogenerate: { directory: 'check-ins' } }] },
        { label: 'Referências', items: [{ autogenerate: { directory: 'referencias' } }] },
        { label: 'Glossário', slug: 'glossario' },
      ],
      lastUpdated: false,
      pagination: true,
    }),
  ],
});
