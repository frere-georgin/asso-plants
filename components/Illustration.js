class Illustration extends React.Component {
  render() {
    const props = this.props;
    const className = `${props.className || ""} illustration illustration--${
      props.name
    }`;
    const src = `/static/img/${props.name}.svg`;
    const size = `${props.size}px`;

    return (
      <img {...props} src={src} style={{ width: size }} className={className} />
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
