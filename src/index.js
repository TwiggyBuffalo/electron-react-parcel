import React from "react";
import { render } from "react-dom";
import styles from "./index.css";
import logoReact from "./static/react.svg";
import logoElectron from "./static/electron.svg";

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <div className={styles.logos}>
        <img src={logoReact} className={styles.logo} alt="react" />
        <img src={logoElectron} className={styles.logo} alt="electron" />
      </div>
      <p>
        <span>Edit </span>
        <code>src/index.js</code>
        <span> and save to reload.</span>
      </p>
      <div className={styles.buttons}>
        <a
          className={styles.btnReact}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className={styles.btnElectron}
          href="https://electronjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Electron
        </a>
      </div>
    </header>
  </div>
);

render(<App />, document.getElementById("root"));
