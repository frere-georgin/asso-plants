import React from "react";
import Page from "../layouts/main";

// vegetable Component
import Illustration from "../components/Illustration";
import TitleDescription from "../components/TitleDescription";
import GroundType from "../components/GroundType";
import InfoNutrition from "../components/InfoNutrition";
import RecolteSemis from "../components/RecolteSemis";
import { Link } from "../routes";
import Relationship from "../components/Relationship";

class Vegetable extends React.Component {
  render() {
    const { slug } = this.props.url.query;
    const { vegetables } = this.props;
    let vegetable = vegetables.find(e => e.slug === slug);

    const links = vegetables.map(e => (
      <li style={{ display: "inline-block", padding: "0 2px" }}>
        <Link route="vegetable" params={{ slug: e.slug }}>
          <a>{e.name}</a>
        </Link>
      </li>
    ));

    let { friends, enemies } = vegetable;
    friends = friends.map(e => {
      return {
        name: e,
        slug: findVegetableByFieldName(vegetables, e, "slug"),
        imgSrc: findVegetableByFieldName(vegetables, e, "img")
      };
    });

    enemies = enemies.map(e => {
      return {
        name: e,
        slug: findVegetableByFieldName(vegetables, e, "slug"),
        imgSrc: findVegetableByFieldName(vegetables, e, "img")
      };
    });

    console.log("Enemies", enemies);

    return (
      <Page>
        <div className="vegetable">
          <div className="vegetable__column vegetable__column--centered">
            <Illustration
              className="vegetable__illustration"
              name={`vegetables/${vegetable.name}`}
              src={vegetable.img}
              size="300"
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
            <Relationship relations={{ friends, enemies }} />
          </div>
        </div>
      </Page>
    );
  }
}

const findVegetableByFieldName = (vegetables, name, attr) =>
  vegetables.find(e => e.name === name)[attr];

Vegetable.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  return { vegetables: res.plants };
};

export default Vegetable;
