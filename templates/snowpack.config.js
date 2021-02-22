module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  mount: {
    src: "/",
  },
  buildOptions: {
    out: "build",
    baseUrl: "/rexchat/build/",
    clean: true,
    htmlFragments: true
  },
  experiments: {
    optimize: {
      // 'bundle': true,
      minify: true,
      target: "es2015",
    },
  },
};