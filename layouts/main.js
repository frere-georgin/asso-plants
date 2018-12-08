import Nav from "../components/Nav";
import "../css/main.scss";

export default ({ children }) => (
  <div className="screen-size">
    <Nav />
    {children}
  </div>
);
