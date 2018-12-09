import Page from "../layouts/main";
import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import Illustration from "../components/Illustration";
import { Link } from "../routes";

const Landing = ({ vegetables }) => (
  <Page>
    <AutoComplete data={vegetables} />
    <Illustration name="laitue" />
    <Link route="vegetable" params={{ slug: "legumes" }}>
      <a>Legumes</a>
    </Link>
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  //console.log("JSON", res);
  return { vegetables: res.plants };
};

export default Landing;
