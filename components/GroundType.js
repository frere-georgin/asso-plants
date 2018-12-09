class GroundType extends React.Component {
  render() {
    const array = this.props.groundTypes.map(groundType => {
      const src = `../static/img/${groundType}.svg`;

      return (
        <div key={groundType}>
          <img src={src} />
          {groundType}
        </div>
      );
    });

    return (
      <div>
        <h3>
          <i className={this.props.groundTypeLabelIcon || ""} />
          Type de sol
        </h3>
        {array}
      </div>
    );
  }
}

export default GroundType;
