import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logoTop}>
            <h1>Justice.</h1>
          </div>
          <div className={styles.navbar}>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Practice</a>
                </li>
                <li>
                  <a href="">Areas</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Attorneys</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <FontAwesomeIcon icon={faHamburger} className={styles.icon} />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
