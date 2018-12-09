import LinearIcon from "./LinearIcon";

const RecolteSemis = props => (
  <section>
    <h3>
      <LinearIcon name="calendar-full" />Semi
    </h3>
    <p>{props.sowing_date}</p>
    <h3>Recolte</h3>
    <p>{props.harvest_date}</p>
  </section>
);

export default RecolteSemis;
