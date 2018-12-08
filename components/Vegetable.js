import Illustration from "./Illustration";
import TitleDescription from "./TitleDescription";
import GroundType from "./GroundType";

class Vegetable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="vegetable">
          <div className="vegetable__column vegetable__column--centered">
            <Illustration name="laitue" />
          </div>
          <div className="vegetable__column">
            <TitleDescription title="Tomate" description="mabite" />
          </div>
          <div className="vegetable__column">
            <GroundType groundTypes={["test", "toto"]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vegetable;
