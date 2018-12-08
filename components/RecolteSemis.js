const TitleDescription = props => (
  <section>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <a href={props.wikiUrl} target="_blank">
      En savoir plus
    </a>
  </section>
);

export default TitleDescription;
