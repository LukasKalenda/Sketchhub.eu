// .vitepress/config.js
export default {
  titleTemplate: "Sketchub",
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
          { text: "3. Webová stránka", link: "/vystup/3" },
          { text: "4. Dioráma", link: "/vystup/4" },
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
          text: "3.výstup - Webová stránka",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
        {
          text: "4.výstup - Dioráma + krabice",
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
            { text: "Vybavení a pomůcky", link: "/ark-royal/vybaveni" },
            { text: "3D tisknutí", link: "/ark-royal/3d-tisk" },
            { text: "Natírání povrchu", link: "/ark-royal/natirani-povrchu" },
          ],
        },
        {
          text: "Výroba krabice a vodní hladiny",
          collapsible: true,
          items: [
            { text: "Krabice", link: "/ark-royal/krabice" },
            { text: "Vodní hladina", link: "/ark-royal/vodni-hladina" },
          ],
        },
        {
          text: "Animace a video",
          collapsible: true,
          items: [
            { text: "Animace 2D", link: "/ark-royal/animace-2D" },
            { text: "Animace 3D", link: "/ark-royal/animace-3D" },
            { text: "Střih videa", link: "/ark-royal/strih-videa" },
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
      ],
      "/king-george-v/": [
        {
          text: "Tvorba modelu",
          collapsible: true,
          items: [
            { text: "AutoCAD a náčrty", link: "/king-george-v/autocad" },
            { text: "Fusion 360", link: "/king-george-v/fusion" },
          ],
        },
        {
          text: "Elektronika",
          collapsible: true,
          items: [
            { text: "Arduino", link: "/king-george-v/arduino" },
          ],
        },
        {
          text: "Fyzický model",
          collapsible: true,
          items: [
            { text: "Typ tisku", link: "/king-george-v/typ-tisku" },
            { text: "Filament", link: "/king-george-v/filament" }
          ],
        },
        {
          text: "Shrnutí",
          collapsible: true,
          items: [
            { text: "Statistiky", link: "/king-george-v/statistiky" },
            { text: "Fotografie", link: "/king-george-v/fotografie" }
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
