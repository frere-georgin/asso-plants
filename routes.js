const routes = require("next-routes");

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add("about") // about  about     /about
  .add("sources") // about  about     /about
  .add("contribute") // about  about     /about
  .add("vegetables") // about  about     /about
  .add("vegetable", "/vegetable/:slug"); // about  about     /about
