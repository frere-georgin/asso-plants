import LinearIcon from "./LinearIcon";

class GroundType extends React.Component {
  render() {
    const array = this.props.groundTypes.map(groundType => {
      const src = `../static/img/${groundType}.svg`;

      return (
        <li className="ground-type__list__item" key={groundType}>
          <img className="ground-type__list__item__image" src={src} />
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
