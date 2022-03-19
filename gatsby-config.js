const path = require("path");
const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [{
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `2y0qgi3ch4zc`,
                accessToken: `yCZqvcqyso48MAcgAFBIxCfRybOFUQEiLI6s_9p1cwU`,
            },
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ["develop"],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", "bower_components", ".cache", "public"],
                // Any additional eslint-webpack-plugin options below
            },
        }
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}