import Page from "../layouts/main";
import { Link } from "../routes";

const Landing = ({ vegetable }) => (
  <Page>
    landing <pre>{vegetable}</pre>
    <Link route="vegetables">
      <a>Legumes</a>
    </Link>
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  console.log("JSON", res);
  return { vegetable: JSON.stringify(res) };
};

export default Landing;
