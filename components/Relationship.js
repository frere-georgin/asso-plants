import Link from "next/link";
import Illustration from "./Illustration";
import LinearIcon from "./LinearIcon";

export default ({ relations }) => {
  if (!(relations && relations.friends && relations.enemies)) {
    return <div>pas de relation</div>;
  } else {
    const friends = relations.friends.map(friend => (
      <li className="relationship__list__item" key={friend}>
        <Illustration
          className="relationship__list__item__image"
          name={`vegetables/${friend.toLowerCase()}`}
        />
        <div className="relationship__list__item__title">{friend}</div>
      </li>
    ));
    const enemies = relations.enemies.map(enemy => (
      <li className="relationship__list__item" key={enemy}>
        <Illustration
          className="relationship__list__item__image"
          name={`vegetables/${enemy.toLowerCase()}`}
        />
        <div className="relationship__list__item__title">{enemy}</div>
      </li>
    ));
    return (
      <div className="relationship">
        <h3 className="relationship__title">
          <LinearIcon name="smile" /> Amis
        </h3>
        <ul className="relationship__list">{friends}</ul>
        <h3 className="relationship__title">
          <LinearIcon name="sad" /> Ennemis
        </h3>
        <ul className="relationship__list">{enemies}</ul>
      </div>
    );
  }
};
