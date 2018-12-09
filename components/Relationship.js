import { withRouter } from "next/router";
import { Fragment } from "react";
import Illustration from "./Illustration";
import LinearIcon from "./LinearIcon";

class Relationship extends React.Component {
  goToVegetable = slug => {
    this.props.router.push(`/vegetable/${slug}`);
  };

  renderProtagonists(list) {
    return list.map(item => (
      <li
        className="relationship__list__item"
        key={item}
        onClick={() => this.goToVegetable(item.slug)}
      >
        <Illustration
          className="relationship__list__item__image"
          name={`vegetables/${item.name.toLowerCase()}`}
          src={item.imgSrc}
        />
        <div className="relationship__list__item__title">{item.name}</div>
      </li>
    ));
  }

  render() {
    const { relations } = this.props;
    if (!(relations && relations.friends && relations.enemies)) {
      return <div>pas de relation</div>;
    } else {
      return (
        <div className="relationship">
          <h3 className="relationship__title">
            <LinearIcon name="smile" /> Amis{" "}
            <span className="relationship__title__info">
              {relations.friends.length}
            </span>
          </h3>
          <ul className="relationship__list">
            {this.renderProtagonists(relations.friends)}
          </ul>
          <h3 className="relationship__title">
            <LinearIcon name="sad" /> Ennemis{" "}
            <span className="relationship__title__info">
              {relations.enemies.length}
            </span>
          </h3>
          <ul className="relationship__list">
            {this.renderProtagonists(relations.enemies)}
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Relationship);
