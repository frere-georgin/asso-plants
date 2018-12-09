const TitleDescription = props => (
  <section className="title-description">
    <h1 className="title-description__title">{props.title}</h1>
    <p className="title-description__description">{props.description}</p>
    <a className="title-description__link" href={props.wikiUrl} target="_blank">
      En savoir plus
    </a>
  </section>
);

export default TitleDescription;
