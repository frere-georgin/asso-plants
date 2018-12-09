import Page from "../layouts/main";
import Vegetable1 from "../components/Vegetable";

// vegetable Component
import Illustration from "../components/Illustration";
import TitleDescription from "../components/TitleDescription";
import GroundType from "../components/GroundType";
import InfoNutrition from "../components/InfoNutrition";
import { Link } from "../routes";
import Relationship from "../components/Relationship";

const Vegetable = props => {
  const { slug } = props.url.query;
  let vegetable = props.vegetables.find(e => e.slug === slug);

  const links = props.vegetables.map(e => (
    <li style={{ display: "inline-block", padding: "0 2px" }}>
      <Link route="vegetable" params={{ slug: e.name.toLowerCase() }}>
        <a>{e.name}</a>
      </Link>
    </li>
  ));

  return (
    <Page>
      <ul>{links}</ul>
      Legume : {slug && <div>{slug}</div>}
      <div className="vegetable">
        <div className="vegetable__column vegetable__column--centered">
          <Illustration name="vegetables/laitue" />
        </div>
        <div className="vegetable__column">
          <TitleDescription title="Tomate" description="mabite" />
          <InfoNutrition />
        </div>
        <div className="vegetable__column">
          <GroundType groundTypes={["argile", "sable", "terreau"]} />
          <Relationship relations={vegetable} />
        </div>
      </div>
    </Page>
  );
};

Vegetable.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  return { vegetables: res.plants };
};

export default Vegetable;
