import { Component } from "react";
import LinearIcon from "./LinearIcon";

class RecolteSemis extends Component {
  render() {
    return (
      <section className="recolte-semis">
        <div className="recolte-semis__column">
          <h3 className="recolte-semis__title">
            <LinearIcon name="calendar-full" /> Semi
            {this.props.vegetable.hasToSow && (
              <div className="recolte-semis__title__now" />
            )}
          </h3>
          <p className="recolte-semis__info">
            {this.props.vegetable.sowingStart} -{" "}
            {this.props.vegetable.sowingEnd}
          </p>
        </div>
        <div className="recolte-semis__column">
          <h3 className="recolte-semis__title">
            <LinearIcon name="calendar-full" /> Recolte
            {this.props.vegetable.hasToHarvest && (
              <div className="recolte-semis__title__now" />
            )}
          </h3>
          <p className="recolte-semis__info">
            {this.props.vegetable.harvestStart} -{" "}
            {this.props.vegetable.harvestEnd}
          </p>
        </div>
      </section>
    );
  }
}

export default RecolteSemis;
