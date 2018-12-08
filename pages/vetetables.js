import Page from "../layouts/main";
import { Link } from "../routes";
export default class Vegetables extends React.Component {
  render() {
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
      </Page>
    );
  }
}
