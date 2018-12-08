import Page from "../layouts/main";
const Landing = ({ stars }) => (
  <Page>
    landing <pre>{stars}</pre>
  </Page>
);

Landing.getInitialProps = async ({ req }) => {
  const res = await import("../static/association.json");
  // const json = await res.json();
  console.log("JSON", res);
  return { stars: JSON.stringify(res) };
};

export default Landing;
