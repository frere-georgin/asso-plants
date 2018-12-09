const TitleDescription = props => (
  <section>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <a href={props.wikiUrl} target="_blank">
      En savoir plus
    </a>
  </section>
);

export default TitleDescription;
