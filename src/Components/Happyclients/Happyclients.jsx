import React from "react";
import styles from "./Happyclients.module.css";

const Happyclients = () => {
  return (
    <div>
      <section className={styles.happyMain}>
        <div className={styles.happyContainer}>
          <div className={styles.happyTop}>
            <h4>
              <span>Happy </span>Clients
            </h4>
          </div>
          <div className={styles.happyImg}></div>
        </div>
      </section>
    </div>
  );
};

export default Happyclients;
