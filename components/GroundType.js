import LinearIcon from "./LinearIcon";
import Illustration from "./Illustration";

class GroundType extends React.Component {
  render() {
    const array = this.props.ground.type.map(elem => {
      return (
        <li className="ground-type__list__item" key={elem.title}>
          <Illustration
            className="ground-type__list__item__image"
            src={elem.img}
          />
          <span className="ground-type__list__item__text">{elem.title}</span>
        </li>
      );
    });

    return (
      <section className="ground-type">
        <h3>
          <LinearIcon name="landscape" /> Type de sol
        </h3>
        <ul className="ground-type__list">{array}</ul>
      </section>
    );
  }
}

export default GroundType;
