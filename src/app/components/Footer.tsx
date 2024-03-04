"use client";

import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "../styles/Home.module.scss";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <footer className={styles.footer}>Created by Jim Hazlewood </footer>
      </div>
    );
  }
}

export default Footer;
