const { defineConfig } = require("@vue/cli-service");

const PrerenderSPAPlugin = require("prerender-spa-plugin-next");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // 需要预渲染的页面，跟router路由一致
        routes: [
          "/singer",
          "/rank",
          "/search",
          "/account",
          "/detail",
          "/recommend",
        ],
      }),
    ],
  },
});
