import LinearIcon from "./LinearIcon";

const InfoNutrition = props => (
  <section className="info-nutrition">
    <h3 className="info-nutrition__title">
      <LinearIcon name="clipboard-empty" /> Valeurs nutritionelles
    </h3>
    <h5 className="info-nutrition__sub-title">pour 100 grammes</h5>

    <ul className="info-nutrition__list">
      <li className="info-nutrition__list__item">
        <b>Calories</b> 15
      </li>
      <li className="info-nutrition__list__item">
        <b>Lipides</b> 0.2mg
      </li>
      <li className="info-nutrition__list__item">
        <b>Cholestérol</b> Omg
      </li>
      <li className="info-nutrition__list__item">
        <b>Sodium</b> 28mg
      </li>
      <li className="info-nutrition__list__item">
        <b>Potassium</b> 194mg
      </li>
      <li className="info-nutrition__list__item">
        <b>Glucides</b> 2.9g
      </li>
      <ul className="info-nutrition__list">
        <li className="info-nutrition__list__item">
          {" "}
          <b>Fibres alimentaires</b> 1.3mg
        </li>
        <li className="info-nutrition__list__item">
          {" "}
          <b>Sucres</b> 0.8mg
        </li>
      </ul>
      <li className="info-nutrition__list__item">
        <b>Protéines</b> 1.4mg
      </li>
    </ul>

    <div className="info-nutrition__wrapper">
      <ul className="info-nutrition__list info-nutrition__wrapper__column">
        <li className="info-nutrition__list__item">
          <b>Vitamine A</b> 7 405 IU
        </li>
        <li className="info-nutrition__list__item">
          <b>Calcium</b> 36mg
        </li>
        <li className="info-nutrition__list__item">
          <b>Vitamine D</b> 0 IU{" "}
        </li>
        <li className="info-nutrition__list__item">
          <b>Vitamine B₁₂</b> 0 µg
        </li>
      </ul>

      <ul className="info-nutrition__list info-nutrition__wrapper__column">
        <li className="info-nutrition__list__item">
          <b>Vitamine C</b> 9.2mg
        </li>
        <li className="info-nutrition__list__item">
          <b>Fer</b> 0.9mg
        </li>
        <li className="info-nutrition__list__item">
          <b>Vitamine B6</b> 0.1mg
        </li>
        <li className="info-nutrition__list__item">
          <b>Magnésium</b> 13mg
        </li>
      </ul>
    </div>
  </section>
);

export default InfoNutrition;
