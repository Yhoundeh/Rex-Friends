module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  buildOptions: {
    out: "build",
    baseUrl: "/rexchat/build/",
    clean: true,
    htmlFragments: true
  },
  optimize: {
    // 'bundle': true,
    minify: true,
    target: "es2015",
  },
};
