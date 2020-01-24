import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../layout";
import ResourcesHeader from "../resources/ResourcesHeader";
const Resources = props => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <Layout>
      <ResourcesHeader />
    </Layout>
  );
};

Resources.propTypes = {};

export default Resources;
