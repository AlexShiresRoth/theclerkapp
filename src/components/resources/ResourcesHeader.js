import React from "react";
import PropTypes from "prop-types";
import resourceStyles from "./styles/ResourcesHeader.module.scss";
const ResourcesHeader = props => {
  return (
    <header className={resourceStyles.header}>
      <div className={resourceStyles.resources__container}>
        <div className={resourceStyles.title__container}>
          <h1>Resources</h1>
          <p>Check out other resources I personally recommend.</p>
        </div>
      </div>
    </header>
  );
};

ResourcesHeader.propTypes = {};

export default ResourcesHeader;
