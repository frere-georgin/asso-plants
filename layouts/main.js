import Header from "../components/Header";
import TitleDescription from "../components/TitleDescription";
import GroundType from "../components/GroundType";

export default ({ children }) => (
  <div>
    <Header />
    {/*<TitleDescription plantName={"Nom"} plantDesc={"Description"} plantWiki={""} />*/}
    <GroundType groundTypes={["clay", "sand"]} />
    {children}
  </div>
);
