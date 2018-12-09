import React from "react";
import PropTypes from "prop-types";

const LinearIcon = props => (
  <i
    {...props}
    className={`${props.className} linear-icon linear-icon-${props.name}`}
  />
);

LinearIcon.proptypes = {
  name: PropTypes.string.required
};

export default LinearIcon;
