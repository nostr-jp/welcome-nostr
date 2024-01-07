import { defineUserConfig, defaultTheme } from "vuepress";
import attrs from "markdown-it-attrs";
import { gitPlugin } from "@vuepress/plugin-git";
import footnote from "markdown-it-footnote";
import toc from "markdown-it-table-of-contents";

export default defineUserConfig({
  lang: "ja_JP",
  title: "Welcome to Nostr! ～ Nostrをはじめよう！ ～",
  // Ban README.md. Use index.md instead.
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  extendsMarkdown: (md) => {
    // Allow `# Header Text {#custom-id-attr}` syntax.
    md.use(attrs);
    // Allow `[^1]` syntax.
    md.use(footnote);
    md.use(toc, {
      includeLevel: [2],
    });
  },
  plugins: [
    gitPlugin({
      contributors: false,
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: "GitHub",
        link: "https://github.com/nostr-jp/welcome-nostr",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Nostr の始めかた",
          children: [
            "/get-started/damus.md",
            "/get-started/nostter.md",
          ],
        },
        {
          text: "チュートリアル",
          children: [
            "/tutorial/set-profile-image.md",
            "/tutorial/make-your-timeline.md",
            "/tutorial/explore-client.md",
            "/tutorial/nip-05.md",
            "/tutorial/nip-07.md",
            "/tutorial/pwa-install.md",
          ],
        },
        {
          text: "基礎知識",
          children: ["/guide/key-pair.md", "/guide/relay.md"],
        },
        {
          text: "補遺",
          children: ["/faq.md", "/trouble-shooting.md", "/learn-more.md"],
        },
      ],
    },
    editLinkText: "このページを編集",
    lastUpdatedText: "最終更新日時",
    docsRepo: "https://github.com/nostr-jp/welcome-nostr",
    docsBranch: "master",
    docsDir: "docs",
  }),
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", href: "/icon.webp", type: "image/webp" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
});
