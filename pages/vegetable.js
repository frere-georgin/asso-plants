import Page from "../layouts/main";

// vegetable Component
import Illustration from "../components/Illustration";
import TitleDescription from "../components/TitleDescription";
import GroundType from "../components/GroundType";
import InfoNutrition from "../components/InfoNutrition";
import RecolteSemis from "../components/RecolteSemis";
import { Link } from "../routes";
import Relationship from "../components/Relationship";

const Vegetable = props => {
  const { slug } = props.url.query;
  let vegetable = props.vegetables.find(e => e.slug === slug);

  const links = props.vegetables.map(e => (
    <li style={{ display: "inline-block", padding: "0 2px" }}>
      <Link route="vegetable" params={{ slug: e.slug }}>
        <a>{e.name}</a>
      </Link>
    </li>
  ));

  return (
    <Page>
      <div className="vegetable">
        <div className="vegetable__column vegetable__column--centered">
          <Illustration
            className="vegetable__illustration"
            name={`vegetables/${vegetable.name}`}
          />
          <TitleDescription
            title={vegetable.name}
            description={vegetable.desc}
          />
        </div>
        <div className="vegetable__column">
          <RecolteSemis
            sowingDate={vegetable.sowing_date}
            harvestDate={vegetable.harvest_date}
          />
          <InfoNutrition info={vegetable} />
        </div>
        <div className="vegetable__column">
          <GroundType groundTypes={vegetable.ground_type} />
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
