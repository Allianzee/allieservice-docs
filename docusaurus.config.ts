import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AllieService",
  tagline: "The best data service for Roblox",
  favicon: "img/favicon.ico",

  url: "https://allieservice.vercel.app",
  baseUrl: "/",

  organizationName: "your-github-username",
  projectName: "allieservice-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/your-github-username/allieservice-docs/tree/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    announcementBar: {
      id: "welcome",
      content: "⭐ If you like AllieService, give it a star on GitHub!",
      backgroundColor: "#7c3aed",
      textColor: "#ffffff",
      isCloseable: true,
    },

    navbar: {
      title: "AllieService",
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/docs/api/server-api",
          position: "left",
          label: "API",
        },
        {
          href: "https://github.com/your-github-username/allieservice-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/setup/installation",
            },
            {
              label: "Server API",
              to: "/docs/api/server-api",
            },
            {
              label: "Client API",
              to: "/docs/api/client-api",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Paths",
              to: "/docs/guides/paths",
            },
            {
              label: "Global Messages",
              to: "/docs/guides/global-messages",
            },
            {
              label: "Best Practices",
              to: "/docs/guides/best-practices",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/your-github-username/allieservice-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AllieService. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["lua", "bash", "json"],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
