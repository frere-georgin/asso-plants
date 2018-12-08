import Illustration from "./Illustration";
import TitleDescription from "./TitleDescription";

class Vegetable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Illustration name="laitue" />
        <TitleDescription title="Tomate" description="mabite" />
        <GroundType name={["test", "toto"]} />
      </React.Fragment>
    );
  }
}

export default Vegetable;
