import Link from "next/link";

export default ({ relations }) => {
  if (!(relations && relations.friends && relations.enemies)) {
    return <div>pas de relation</div>;
  } else {
    const friends = relations.friends.map(friend => (
      <li key={friend}>{friend}</li>
    ));
    const enemies = relations.enemies.map(enemy => (
      <li key={enemy}>{enemy}</li>
    ));
    return (
      <div>
        amis <ul>{friends}</ul>
        enemis :<ul>{enemies}</ul>
      </div>
    );
  }
};
