import React from "react";
import propTypes from "prop-types";

const InlineError = ({ text }) => <span style={{ color: "#ae5856"}}> {text} </span>

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError;