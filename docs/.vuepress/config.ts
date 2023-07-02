import { defineUserConfig, defaultTheme } from "vuepress";
import attrs from "markdown-it-attrs";

export default defineUserConfig({
  // To host on GitHub Pages.
  lang: "ja_JP",
  title: "Welcome to Nostr!",
  // Ban README.md. Use index.md instead.
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  extendsMarkdown: (md) => {
    // Allow `# Header Text {#custom-id-attr}` syntax.
    md.use(attrs);
  },
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
          text: "チュートリアル",
          children: [
            "/tutorial/set-profile-image.md",
            "/tutorial/make-your-timeline.md",
            "/tutorial/explore-client.md",
            "/tutorial/nip-05.md",
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
    docsRepo: "https://github.com/nostr-jp/welcome-nostr",
    docsBranch: "master",
    docsDir: "docs",
  }),
});
