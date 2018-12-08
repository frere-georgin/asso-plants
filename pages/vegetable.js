import Page from "../layouts/main";
import { Link } from "../routes";
export default class Vegetable extends React.Component {
  static async getInitialProps({ query }) {
    console.log("QUERY", query);
    // query.slug
    return "blue";
  }
  render() {
    const { slug } = this.props.url.query;

    console.log("props", slug);
    return (
      <Page>
        vegetable
        <div>
          <Link route="vegetable" params={{ slug: "salade" }}>
            <a>Salade</a>
          </Link>
          <Link route="vegetable" params={{ slug: "carotte" }}>
            <a>Carotte</a>
          </Link>
          <Link route="vegetable" params={{ slug: "choux" }}>
            <a>Choux</a>
          </Link>
          <Link route="vegetable" params={{ slug: "viande" }}>
            <a>Viande</a>
          </Link>
        </div>
        Legume : {slug && <div>{slug}</div>}
      </Page>
    );
  }
}
