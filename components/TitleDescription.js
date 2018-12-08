const TitleDescription = (props) => (
  <div>
    <h1>
      {props.plantName}
    </h1>
    <p>
      {props.plantDesc}
    </p>
    <a href={props.plantWiki} target="_blank">
      En savoir plus
    </a>
  </div>
);

export default TitleDescription;
