const TitleDescription = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <a href={props.wikiUrl} target="_blank">
      En savoir plus
    </a>
  </div>
);

export default TitleDescription;
