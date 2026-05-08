// @ts-check
// Docusaurus 3 config for the Pirate Souls wiki.
// The "Edit this page" link is rerouted to the local edit-service so players
// never see a GitHub UI. Update EDIT_SERVICE_URL when you deploy the service.

require('dotenv').config();

const EDIT_SERVICE_URL =
  process.env.EDIT_SERVICE_URL || 'http://localhost:8000';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pirate Souls Wiki',
  tagline: 'Player-built guide to the high seas',
  favicon: 'img/logo.png',

  url: 'https://diamondsouls.github.io',
  baseUrl: '/pirate-souls-wiki/',

  organizationName: 'DiamondSouls',
  projectName: 'pirate-souls-wiki',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Reroute "Edit this page" to our submission form.
          editUrl: ({ docPath }) =>
            `${EDIT_SERVICE_URL}/edit?page_path=${encodeURIComponent(
              'docs/' + docPath
            )}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
      navbar: {
        title: 'Pirate Souls',
        logo: { alt: 'Pirate Souls', src: 'img/logo.png' },
        items: [
          { to: '/guides', label: 'Guides', position: 'left' },
          { to: '/quests', label: 'Quests', position: 'left' },
          { to: '/npcs', label: 'NPCs', position: 'left' },
          { to: '/spells', label: 'Techniques', position: 'left' },
          {
            type: 'dropdown',
            label: 'Items',
            position: 'left',
            items: [
              { to: '/items', label: 'All Items' },
              { to: '/itemattributes', label: 'Item Attributes' },
              { to: '/rewarditems', label: 'Reward Items' },
              { to: '/cashshopitems', label: 'Cash Shop Items' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Crafts',
            position: 'left',
            items: [
              { to: '/crafts', label: 'All Crafts' },
              { to: '/craftingtables', label: 'Crafting Tables' },
            ],
          },
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            items: [
              { to: '/achievements', label: 'Achievements' },
              { to: '/autoevents', label: 'Auto Events' },
              { to: '/resources', label: 'Resources' },
              { to: '/shops', label: 'Shops' },
            ],
          },
          { to: '/', label: 'About', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              { label: 'How to contribute', to: '/' },
            ],
          },
        ],
        copyright: 'Made with salt and blood. © 2026 Pirate Souls. All rights reserved.',
      },
      docs: {
        sidebar: { hideable: true, autoCollapseCategories: true },
      },
    }),
};

module.exports = config;
