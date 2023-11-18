// .vitepress/config.js
export default {
  titleTemplate: ":title - Sketchub",
  description:
    "Portál pro 3D modely. Tvorba 3D modelů, tutoriály, návody, tipy a triky, zdroje a další.",
  lang: "cs-CZ",
  rewrites: {
    "packages/:pkg/src/(.*)": ":pkg/index.md",
  },

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Sketchub - 3D modely",

    nav: [
      { text: "Projekt", link: "/projekt" },
      { text: "Nástroje", link: "/nastroje" },
      {
        text: "Výstupy",
        items: [
          { text: "1. Náčrty", link: "/vystup/1" },
          { text: "2. 3D Modely", link: "/vystup/2" },
          { text: "3. Dioráma", link: "/vystup/3" },
          { text: "4. Webová stránka", link: "/vystup/4" },
          { text: "Finální práce", link: "/vystup/finalni" },
        ],
      },
    ],
    // Anonymous
    socialLinks: [
      { icon: "github", link: "https://github.com/LukasKalenda/Sketchub.eu" },
    ],
    //Sidebar
    sidebar: {
      "/vystupy/": [
        {
          text: "1.výstup - Náčrty",
          collapsible: true,
          items: [
            { text: "Důmyslný rytíř don Quijote", link: "/ark-royal/" },
            { text: "Lakomec", link: "/ark-royal/one" },
          ],
        },
        {
          text: "2.výstup - 3D Modely",
          collapsible: true,
          items: [
            { text: "Jáma a kyvadlo", link: "/introduction" },
            { text: "Havran", link: "/getting-started" },
            { text: "Quo vadis?", link: "/getting-started" },
            { text: "Obraz Doriana graye", link: "/getting-started" },
          ],
        },
        {
          text: "3.výstup - Dioráma",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
        {
          text: "4.výstup - Webová stránka",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
      ],
      // is on `config` directory.
      "/ark-royal/": [
        {
          text: "Tvorba modelu",
          collapsible: true,
          items: [
            { text: "Autodesk", link: "/ark-royal/autodesk" },
            { text: "Úprava modelu", link: "/ark-royal/uprava-modelu" },
          ],
        },
        {
          text: "3D tištění a úpravy",
          collapsible: true,
          items: [
            { text: "3D tisknutí", link: "/ark-royal/3d-tisk" },
            { text: "Natírání povrchu", link: "/ark-royal/natirani-povrchu" },
          ],
        },
        {
          text: "Tvorba podložky",
          collapsible: true,
          items: [
            { text: "Dřevěnný rámeček", link: "/ark-royal/drevenny-ramecek" },
            { text: "Vodní hladina", link: "/ark-royal/vodni-hladina" },
          ],
        },
        {
          text: "Kompletní model",
          collapsible: true,
          items: [
            { text: "Statistiky", link: "/ark-royal/statistiky" },
            { text: "Ukázky", link: "/ark-royal/ukazky" },
          ],
        },
        {
          text: "Historie bitevní lodi",
          collapsible: true,
          items: [
            { text: "Konstrukce", link: "/ark-royal/konstrukce" },
            { text: "Bojové operace", link: "/ark-royal/bojove-operace" },
          ],
        },
      ],
      "/king-george-v/": [
        {
          text: "Tvorba modelu",
          collapsible: true,
          items: [
            { text: "AutoCAD a náčrty", link: "/ark-royal/autocad" },
            { text: "Fusion 360", link: "/ark-royal/fusion" },
            { text: "Filamenty", link: "/ark-royal/tvorba-modelu" },
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
