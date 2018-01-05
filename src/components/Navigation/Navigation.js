import React, { Component } from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom";
import { FaTwitter, FaMedium, FaGithubAlt } from "react-icons/lib/fa";
import config from "../../../config/SiteConfig";
import styles from "./Navigation.module.scss";
import "./Headroom.scss";

export default class Navigation extends Component {
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <div className={styles.wrapper}>
          <nav className={styles.navigation}>
            <span>
              <Link to="/about" activeClassName="active">
                About
              </Link>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </span>
          </nav>
          <div className={styles.name}>
            <span>
              <Link to="/">
                <h3>{config.siteTitle}</h3>
              </Link>
            </span>
          </div>
          <div className={styles.socialMedia}>
            <span>
              <a
                href="https://www.twitter.com/amanhimself"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.github.com/amandeepmittal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt />
              </a>
              <a
                href="https://medium.com/@amanhimself"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </span>
          </div>
        </div>
      </Headroom>
    );
  }
}
