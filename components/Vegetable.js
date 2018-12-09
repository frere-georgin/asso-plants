import Illustration from "./Illustration";
import TitleDescription from "./TitleDescription";
import GroundType from "./GroundType";
import InfoNutrition from "./InfoNutrition";

class Vegetable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="vegetable">
          <div className="vegetable__column vegetable__column--centered">
            <Illustration name="vegetables/laitue" />
          </div>
          <div className="vegetable__column">
            <TitleDescription
              title="Tomate"
              description="Le Raifort est une plante vivace de la famille des Brassicacées, cultivée pour sa racine à usage condimentaire. Noms scientifiques : Armoracia rusticana G. Gaertn. et al., famille des Brassicacées, sous-famille des Brassicoideae."
            />
            <InfoNutrition />
          </div>
          <div className="vegetable__column">
            <GroundType groundTypes={["sable", "argile", "terreau"]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vegetable;
