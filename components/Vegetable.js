import Illustration from "./Illustration";
import TitleDescription from "./TitleDescription";
import GroundType from "./GroundType";
import InfoNutrition from "./InfoNutrition";

class Vegetable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Illustration name="laitue" />
        <TitleDescription title="Tomate" description="mabite" />
        <GroundType groundTypes={["clay", "sand"]} />
        <InfoNutrition infoNutrition="data" />
      </React.Fragment>
    );
  }
}

export default Vegetable;
