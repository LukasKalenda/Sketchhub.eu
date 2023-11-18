// .vitepress/config.js
export default {
  titleTemplate: ':title - Sketchub',
  description: "Portál pro 3D modely. Tvorba 3D modelů, tutoriály, návody, tipy a triky, zdroje a další.",
  lang: "cs-CZ",
  rewrites: {
    "packages/:pkg/src/(.*)": ":pkg/index.md",
  },

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Sketchub - 3D modely",

    nav: [
      { text: "Projekt", link: "/projekt" },
      { text: "Pro školy", link: "/pro-skoly" },
      { text: "Vytvořit rozbor", link: "/vytvorit-rozbor" },
      {
        text: 'Výstupy',
        items: [
          { text: '1 - Náčrty', link: '/vystup-1/' },
          { text: '2 - 3D Modely', link: '/vystup-2/' },
          { text: '3 - Dioráma', link: '/vystup-3/' },
          { text: '4 - Webová stránka', link: '/vystup-4/' },
          { text: 'Finální práce', link: '/vystup-finalni/' }
        ]
      }
    ],
    // Anonymous
    socialLinks: [
      { icon: "github", link: "https://github.com/LukasKalenda/Sketchub.eu" },
    ],
    //Sidebar
    sidebar: {
      "/rozbory/": [
        {
          text: "Světová a česká lit. 18. st.",
          collapsible: true,
          items: [
            { text: "Důmyslný rytíř don Quijote", link: "/rozbory/" },
            { text: "Lakomec", link: "/rozbory/one" },
          ],
        },
        {
          text: "Světová a česká literatura 19. st.",
          collapsible: true,
          items: [
            { text: "Jáma a kyvadlo", link: "/introduction" },
            { text: "Havran", link: "/getting-started" },
            { text: "Quo vadis?", link: "/getting-started" },
            { text: "Obraz Doriana graye", link: "/getting-started" },
          ],
        },
        {
          text: "Světová literatura 20. a 21. st.",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
      ],
      // is on `config` directory.
      "/literatura/": [
        {
          text: "Světová a česká lit. 18. st.",
          collapsible: true,
          items: [
            { text: "Důmyslný rytíř don Quijote", link: "/rozbory/" },
            { text: "Lakomec", link: "/rozbory/one" },
          ],
        },
        {
          text: "Světová a česká literatura 19. st.",
          collapsible: true,
          items: [
            { text: "Jáma a kyvadlo", link: "/introduction" },
            { text: "Havran", link: "/getting-started" },
            { text: "Quo vadis?", link: "/getting-started" },
            { text: "Obraz Doriana graye", link: "/getting-started" },
          ],
        },
        {
          text: "Světová literatura 20. a 21. st.",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
      ],
    },

    // Footer
    footer: {
      message: "Tvorba 3D modelů",
      copyright: "Copyright © 2023 - Sketchub.eu",
    },
  },
};
