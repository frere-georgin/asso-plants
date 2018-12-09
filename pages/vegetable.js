import Page from "../layouts/main";
import { Link } from "../routes";
import Relationship from "../components/Relationship";

const Vegetable = props => {
  const { slug } = props.url.query;
  let vegetable = props.vegetables.find(e => e.slug === slug);
  console.log("Props", vegetable);

  const links = props.vegetables.map(e => (
    <li style={{ display: "inline-block", padding: "0 2px" }}>
      <Link route="vegetable" params={{ slug: e.name.toLowerCase() }}>
        <a>{e.name}</a>
      </Link>
    </li>
  ));

  return (
    <Page>
      <ul>{links}</ul>
      Legume : {slug && <div>{slug}</div>}
      <Relationship relation={vegetable} />
    </Page>
  );
};

Vegetable.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  return { vegetables: res.plants };
};

export default Vegetable;
