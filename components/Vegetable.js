import Illustration from "./Illustration";
import TitleDescription from "./TitleDescription";
import GroundType from "./GroundType";

class Vegetable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Illustration name="laitue" />
        <TitleDescription title="Tomate" description="mabite" />
        <GroundType groundTypes={["test", "toto"]} />
      </React.Fragment>
    );
  }
}

export default Vegetable;
