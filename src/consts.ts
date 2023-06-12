export const SITE = {
   title: 'Webmarks Docs',
   description: 'Documentation for Webmarks',
} as const;

export const OPEN_GRAPH = {
   image: {
      src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
      alt:
         'astro logo on a starry expanse of space,' +
         ' with a purple saturn-like planet floating in the right foreground',
   },
   twitter: 'astrodotbuild',
};

export const GITHUB_EDIT_URL = `https://github.com/negativems/webmarks-docs/tree/master`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
   indexName: 'XXXXXXXXXX',
   appId: 'JHWR5CRVQ4',
   apiKey: 'd4bba565bfa68581063d1cf61ada0cce',
};

export const SIDEBAR = {
   'Documentación usuario': [
      { text: 'Introducción', link: 'introduccion' },
      { text: 'Tecnologías', link: 'tecnologias' },
      { text: 'Hosting', link: 'hosting' },
      { text: 'Cloudflare', link: 'cloudflare' },
      { text: 'Diseño', link: 'design' },
      { text: 'Rendimiento', link: 'rendimiento' },
      { text: 'Monetización', link: 'monetization' },
      { text: 'IA', link: 'ia' },
      { text: 'Herramientas', link: 'herramientas' },
   ],
   'Documentación técnica': [
      { text: 'Instalación', link: 'instalacion' },
      { text: 'Estructura', link: 'estructura' },
      { text: 'CI/CD', link: 'ci-cd' },
   ],
};
