// // next.config.js
// module.exports = {
//   exportPathMap: async function(defaultPathMap) {
//     return {
//       "/": { page: "/index" }
//     };
//   }
// };

const withSass = require("@zeit/next-sass");
module.exports = withSass();
