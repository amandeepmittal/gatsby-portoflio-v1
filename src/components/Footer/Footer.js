import React from "react";
import Link from "gatsby-link";
import styles from "./Footer.module.scss";
import config from "../../../config/SiteConfig";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        {config.copyright} <a href="#">Portfolio v1 Theme</a>
        {" by "}
        <a href="http://www.amanhimself.me">Aman Mittal</a>.
      </footer>
    );
  }
}
