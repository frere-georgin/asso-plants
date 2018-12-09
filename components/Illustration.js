class Illustration extends React.Component {
  render() {
    const props = this.props;
    const className = `${props.className || ""} illustration`;
    // const src = `/static/img/${props.name}.svg`;

    return (
      <React.Fragment>
        <div className={className}>
          <img {...props} src={props.src} className="illustration__img" />
          <div className="illustration__ground-shadow" />
        </div>
      </React.Fragment>
    );
  }
}

export default Illustration;

// <svg
// {...props}
// className={`${props.className} illustration illustration--${props.name}`}
// >
// <use xlink:href={`#${props.name}`} />
// </svg>
