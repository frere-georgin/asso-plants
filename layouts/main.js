import { Component } from "react";
import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import "../css/main.scss";
// import associations from "../static/association.json";

class Layout extends Component {
  state = {
    associations: []
  };

  async componentDidMount() {
    const associations = await import("../static/association.json");
    this.setState({ associations: associations.plants });
  }

  render() {
    const { associations } = this.state;
    if (associations) {
      return (
        <React.Fragment>
          <Nav />
          <AutoComplete data={associations} />
          {this.props.children}
        </React.Fragment>
      );
    }
  }
}

Layout.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  //console.log("JSON", res);
  console.log("GET initially PROPS");
  return { associations: res.plants };
};

export default Layout;
