import Page from "../layouts/main";
import Nav from "../components/Nav";
import AutoComplete from "../components/AutoComplete";
import Illustration from "../components/Illustration";
const Landing = ({ stars }) => (
  <Page>
    <AutoComplete />
    <Illustration name="laitue" />
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  console.log("JSON", res);
  return { stars: JSON.stringify(res) };
};

export default Landing;
