module.exports = {
  title: 'Domino-Editor',
  tagline: 'A Block-Style Web Content Editor',
  url: 'https://github.com/psyhyde/domino-editor',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'psyhyde', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Domino Editor',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/psyhyde/domino-editor',
          label: 'GitHub',
          position: 'right',
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
              label: 'Domino Editor',
              to: 'docs/',
            },
            {
              label: 'Docusaurus Style Guide',
              to: 'docs/docstyle/',
            },
          ],
        },
        {
          title: 'More about Psyhyde',
          items: [
            {
              label: 'My Design Docs',
              href: 'https://psyhyde.github.io/Design-Docs/#/',
            },
            {
              label: 'Behance',
              href: 'https://www.behance.net/hydeluo',
            },
            {
              label: 'YuQue',
              href: 'https://www.yuque.com/psyhyde',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@psyhyde',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/psyhyde/domino-editor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Domino Editor, Psyhyde.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/psyhyde/domino-editor',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/psyhyde/domino-editor/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
