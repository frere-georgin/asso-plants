import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import "../css/main.scss";
import associations from "../static/association.js";

export default ({ children }) => (
  <div className="screen-size">
    <Nav />
    <AutoComplete data={associations} />
    {children}
  </div>
);
