// next.config.js
module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/landing" }
    };
  }
};
