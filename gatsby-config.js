module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    MenuLinks: [
      {
        "link": "/search",
        "title": "製品検索",
        "subMenu": [
          {
            "link": "/search_all",
            "title": "キーワード検索",
          },
          {
            "link": "/search_sozai",
            "title": "素材・用途から検索",
          },
          {
            "link": "/search_kinou",
            "title": "機能から検索",
          },
          {
            "link": "/search_series",
            "title": "シリーズ名から検索",
          },
        ],
      },
      {
        "link": "/details",
        "title": "注目の製品",
        "subMenu": [
          {
            "link": "/details_all",
            "title": "全製品の中から",
          },
          {
            "link": "/details_koukin",
            "title": "抗菌剤注目",
          },
          {
            "link": "/details_bouen",
            "title": "防炎剤注目",
          },
          {
            "link": "/details_kinouyaku",
            "title": "機能薬剤注目",
          },
          {
            "link": "/details_kamiyaku",
            "title": "紙薬剤注目",
          },
        ],
      },
      {
        "link": "/research",
        "title": "研究開発",
        "subMenu": null,
      },
      {
        "link": "/about",
        "title": "評価技術センター",
        "subMenu": null,
      },
      {
        "link": "/company",
        "title": "会社案内",
        "subMenu": [
          {
            "link": "/company_greeting",
            "title": "ご挨拶",
          },
          {
            "link": "/company_business",
            "title": "経営理念",
          },
          {
            "link": "/company_establishment",
            "title": "事業所",
          },
          {
            "link": "/company_download",
            "title": "会社案内ダウンロード",
          },
          {
            "link": "/company_outline",
            "title": "会社概要",
          },
          {
            "link": "/company_history",
            "title": "沿革",
          },
          {
            "link": "/company_affiliated",
            "title": "関連会社",
          },
          {
            "link": "/company_access",
            "title": "アクセス",
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
