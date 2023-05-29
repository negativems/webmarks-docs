export const SITE = {
	title: 'Docs',
	description: 'Documentation for Webmarks',
	defaultLanguage: 'es-es',
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

export const KNOWN_LANGUAGES = {
	English: 'en',
	Spanish: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'JHWR5CRVQ4',
	apiKey: 'd4bba565bfa68581063d1cf61ada0cce',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
   },
   es: {
      'Sección de encabezado': [
         { text: 'Introducción', link: 'es/introduction' },
         { text: 'Página 2', link: 'es/page-2' },
         { text: 'Página 3', link: 'es/page-3' },
      ],
      'Otra sección': [{ text: 'Página 4', link: 'es/page-4' }],
   },
};
