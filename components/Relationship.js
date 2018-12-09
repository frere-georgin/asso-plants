import Link from "next/link";
import Illustration from "./Illustration";
import LinearIcon from "./LinearIcon";

export default ({ relations }) => {
  console.log("relations", relations);
  if (!(relations && relations.friends && relations.enemies)) {
    return <div>pas de relation</div>;
  } else {
    const friends = relations.friends.map(friend => (
      <li className="relationship__list__item" key={friend}>
        <Illustration
          className="relationship__list__item__image"
          name={`vegetables/${friend.name.toLowerCase()}`}
        />
        <div className="relationship__list__item__title">{friend.name}</div>
      </li>
    ));
    const enemies = relations.enemies.map(enemy => (
      <li className="relationship__list__item" key={enemy}>
        <Illustration
          className="relationship__list__item__image"
          name={`vegetables/${enemy.name.toLowerCase()}`}
        />
        <div className="relationship__list__item__title">{enemy.name}</div>
      </li>
    ));
    return (
      <div className="relationship">
        <h3 className="relationship__title">
          <LinearIcon name="smile" /> Amis{" "}
          <span className="relationship__title__info">{friends.length}</span>
        </h3>
        <ul className="relationship__list">{friends}</ul>
        <h3 className="relationship__title">
          <LinearIcon name="sad" /> Ennemis{" "}
          <span className="relationship__title__info">{enemies.length}</span>
        </h3>
        <ul className="relationship__list">{enemies}</ul>
      </div>
    );
  }
};
