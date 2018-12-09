import Autosuggest from "react-autosuggest";
import Router from "next/router";
import Illustration from "./Illustration";
import RecolteSemis from "./RecolteSemis";
import GroundType from "./GroundType";
import Relationship from "./Relationship";
import LinearIcon from "./LinearIcon";

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
class AutoComplete extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.data.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = suggestion => suggestion.name;

  handleClick = name => {
    Router.push(`/vegetable/${name.toLowerCase()}`);
  };

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <div
      className="suggestion"
      key={suggestion.name}
      onClick={() => {
        this.handleClick(suggestion.slug);
      }}
    >
      <Illustration className="suggestion__illustration" src={suggestion.img} />
      <span className="suggestion__name">{suggestion.name}</span>
      <span className="suggestion__name">
        <h3>
          Semis
          {suggestion.hasToSow && <div className="recolte-semis__title__now" />}
        </h3>
        <div>
          {suggestion.sowingStart} - {suggestion.sowingEnd}
        </div>
      </span>
      <span className="suggestion__name">
        <h3>
          Recolte
          {suggestion.hasToHarvest && (
            <div className="recolte-semis__title__now" />
          )}
        </h3>
        <div>
          {suggestion.harvestStart} - {suggestion.harvestEnd}
        </div>
      </span>
      <span className="suggestion__name">
        <h3>Type de sol</h3>
        <div>
          {suggestion.ground.type.map(value => {
            return <span>{value.title}</span>;
          })}
        </div>
      </span>
      <span className="suggestion__name">
        <h3>Amis</h3>
        <div>{suggestion.friends.length}</div>
      </span>
      <span className="suggestion__name">
        <h3>Enemies</h3>
        <div>{suggestion.enemies.length}</div>
      </span>
    </div>
  );

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const data = this.props.data;

    // console.log(JSON.parse(data));
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Trouver une plante de potager...",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div className="auto-complete">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <div className="auto-complete__search">
          <LinearIcon
            name="magnifier"
            className="auto-complete__search__icon"
          />
        </div>
      </div>
    );
  }
}

export default AutoComplete;
