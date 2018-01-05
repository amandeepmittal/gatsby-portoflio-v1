import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import SEO from "../components/Seo/Seo";
import config from "../../config/SiteConfig";
import "../utils/starter.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <SEO />
        <Navigation />
        {children()}
      </div>
    );
  }
}
