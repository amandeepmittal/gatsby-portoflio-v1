import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

export default class About extends React.Component {
  render() {
    return (
      <div className="container about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Header>About</Header>
        <Container text>
          <h1>Hi!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dignissim vitae mi quis tempor. Morbi pretium enim leo, in venenatis
            ipsum efficitur accumsan. Integer placerat volutpat metus, sit amet
            vulputate nulla blandit eget. Duis tristique gravida lacus at
            imperdiet. Vestibulum elementum erat sed pellentesque dapibus.
            Curabitur semper sem urna, sed posuere nibh finibus eget. Sed ac
            enim lorem. Nulla facilisi. Praesent lectus ante, dignissim a
            aliquam sit amet, euismod vitae nibh. Pellentesque dignissim elit eu
            neque mollis, eu finibus enim efficitur.
          </p>
        </Container>
        <Footer />
      </div>
    );
  }
}
