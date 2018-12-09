// // next.config.js
// module.exports = {
//   exportPathMap: async function(defaultPathMap) {
//     return {
//       "/": { page: "/index" }
//     };
//   }
// };

const withSass = require("@zeit/next-sass");
//module.exports = withSass();

// next.config.js
const withFonts = require("next-fonts");
module.exports = withSass(
  withFonts({
    webpack(config, options) {
      return config;
    }
  })
);
