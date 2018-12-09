import Page from "../layouts/main";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { Link } from "../routes";

const Landing = ({ vegetables }) => (
  <Page>
    <div className="home">
      <div className="home__column">
        <h1 className="home__title">ASSO-PLANTES</h1>
        <h3 className="home__sub-title">
          Tableau d’association des plantes de potager !
        </h3>
      </div>
      <div className="home__column">
        <Carousel />
      </div>
    </div>
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  //console.log("JSON", res);
  return { vegetables: res.plants };
};

export default Landing;
