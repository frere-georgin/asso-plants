import { Component } from "react";
import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import "../css/main.scss";

import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);
moment.locale("fr");

class Layout extends Component {
  state = {
    associations: []
  };

  async componentDidMount() {
    let associations = await import("../static/association.json");

    this.setState({ associations: associations.plants });
  }

  render() {
    let { associations } = this.state;
    if (associations) {
      const currentYear = moment().format("YY");
      const today = moment();

      associations.map(elem => {
        const sowingStart = moment(
          `${elem.sowing_range[0]}/${currentYear}`,
          "DD-MM-YY"
        );
        const sowingEnd = moment(
          `${elem.sowing_range[1]}/${currentYear}`,
          "DD-MM-YY"
        );
        const sowingRange = moment.range(sowingStart, sowingEnd);
        elem.sowingStart = sowingStart.format("MMM");
        elem.sowingEnd = sowingEnd.format("MMM");
        elem.hasToSow = sowingRange.contains(today);

        const harvestStart = moment(
          `${elem.harvest_range[0]}/${currentYear}`,
          "DD-MM-YY"
        );
        const harvestEnd = moment(
          `${elem.harvest_range[1]}/${currentYear}`,
          "DD-MM-YY"
        );
        const harvestRange = moment.range(harvestStart, harvestEnd);
        elem.harvestStart = harvestStart.format("MMM");
        elem.harvestEnd = harvestEnd.format("MMM");
        elem.hasToHarvest = harvestRange.contains(today);
      });

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
