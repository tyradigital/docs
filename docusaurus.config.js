// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tyblox.js',
  tagline: 'The most powerful ROBLOX api wrapper',
  url: 'https://tyblox-js-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Tyra Digital', // Usually your GitHub org/user name.
  projectName: 'tyblox.js-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tyradigital/tyblox.js-docs/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tyradigital/tyblox.js-docs/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Tyblox.js',
        logo: {
          alt: 'Tyra Digital Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/discord',
            label: 'Discord Community',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/z69AMHDc4u',
              },
              {
                label: 'Tyra Digital Twitter',
                href: 'https://twitter.com/tyradigital',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tyradigital/tyblox.js',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tyra Digital. Built with Docusaurus. "ROBLOX" and the ROBLOX logo are owned by <a href="roblox.com">roblox.com</a>`,
      },
      announcementBar: {
        id: 'in_works',
        content:
          '<strong>This documentation is extremely in progress, just as <code>tyblox.js</code> itself is</strong>',
        backgroundColor: '#0000001a',
        textColor: '#5f98c0',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
