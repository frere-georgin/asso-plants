import LinearIcon from "./LinearIcon";
import Illustration from "./Illustration";

class GroundType extends React.Component {
  render() {
    const array = this.props.groundTypes.map(groundType => {
      return (
        <li className="ground-type__list__item" key={groundType}>
          <Illustration
            className="ground-type__list__item__image"
            name={groundType}
            src={`/static/img/${groundType}.svg`}
          />
          <span className="ground-type__list__item__text">{groundType}</span>
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
