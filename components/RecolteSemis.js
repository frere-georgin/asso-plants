import LinearIcon from "./LinearIcon";

const RecolteSemis = props => (
  <section className="recolte-semis">
    <div className="recolte-semis__column">
      <h3 className="recolte-semis__title">
        <LinearIcon name="calendar-full" /> Semi
      </h3>
      <p className="recolte-semis__info">{props.sowingDate}</p>
    </div>
    <div className="recolte-semis__column">
      <h3 className="recolte-semis__title">
        <LinearIcon name="calendar-full" /> Recolte
      </h3>
      <p className="recolte-semis__info">{props.harvestDate}</p>
    </div>
  </section>
);

export default RecolteSemis;
