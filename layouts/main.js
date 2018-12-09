import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import "../css/main.scss";
import associations from "../static/association.js";

export default ({ children }) => (
  <React.Fragment>
    <Nav />
    <AutoComplete data={associations} />
    {children}
  </React.Fragment>
);
