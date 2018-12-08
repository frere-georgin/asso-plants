import Page from "../layouts/main";
import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import Illustration from "../components/Illustration";
import { Link } from "../routes";

const Landing = ({ vegetable }) => (
  <Page>
    <AutoComplete data={vegetable} />
    <Illustration name="laitue" />
    <Link route="vegetables">
      <a>Legumes</a>
    </Link>
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  //console.log("JSON", res);
  return { vegetable: res.plants };
};

export default Landing;
