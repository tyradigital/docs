// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tyra Digital',
  tagline: 'Documentation for everything from Tyra Digital.',
  url: 'https://tyra-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Tyra Digital', // Usually your GitHub org/user name.
  projectName: 'tyra-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/main.js'),
          path: "docs/main",
          routeBasePath: "docs/main",
          // Please change this to your repo.
          editUrl: 'https://github.com/tyradigital/docs/edit/next/docs/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'CICWEZ2RUQ',
  
        // Public API key: it is safe to commit it
        apiKey: 'f0fdda3621a6107443529254479c814e',
  
        indexName: 'tyra',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
  
        //... other Algolia params
      },
      navbar: {
        hideOnScroll: true,
        title: 'Tyra Digital',
        logo: {
          alt: 'Tyra Digital Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'rbx-products',
          //   position: 'right'
          // },
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
                to: '/docs/main/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discord.gg/z69AMHDc4u',
              // },
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
        copyright: `Copyright ?? ${new Date().getFullYear()} Tyra Digital. Built with Docusaurus. "ROBLOX" and the ROBLOX logo are owned by <a href="roblox.com">roblox.com</a>`,
      },
      announcementBar: {
        id: 'in_works',
        content:
          'This documentation is in ongoing progress | <strong>NEW SPAWNER RELEASED! Check it out!</strong>',
        backgroundColor: '#0000001a',
        textColor: '#5f98c0',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua', /*'luau'*/]
      },
    }),

    plugins: [
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'rbx-products',
            path: 'docs/rbx-products',
            routeBasePath: 'docs/rbx-products',
            sidebarPath: require.resolve('./sidebars/rbx-products.js'),
            showLastUpdateAuthor: true,
            showLastUpdateTime: true
          },
        ],
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'tyblox-js',
            path: 'docs/tyblox-js',
            routeBasePath: 'docs/tyblox-js',
            sidebarPath: require.resolve('./sidebars/tyblox-js.js'),
            showLastUpdateAuthor: true,
            showLastUpdateTime: true
          },
        ],
        [
          'client-redirects',
          /** @type {import('@docusaurus/plugin-client-redirects').Options} */
          ({
            redirects: [
                {
                  from: ['/docs'],
                  to: '/docs/main/intro',
                },
            ],
          }),
        ],
    ]
};

module.exports = config;
