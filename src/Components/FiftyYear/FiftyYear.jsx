import React from "react";
import styles from "./FiftyYear.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FiftyYear = () => {
  return (
    <div>
      <section className={styles.fiftyMain}>
        <div className={styles.fiftyContainer}>
          <div className={styles.fiftyTextOne}>
            <h1>
              <span>50 Years</span>of Experience in Various Cases
            </h1>
          </div>
          <div className={styles.fiftyTextTwo}>
            <h1>
              <span>90</span>+
            </h1>
            <h2>Awards</h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
            <h1>
              <span>90</span>+
            </h1>
            <h2>Awards</h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
          <div className={styles.fiftyTextThree}>
            <h1>
              <span>90</span>+
            </h1>
            <h2>Awards</h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
            <h1>
              <span>90</span>+
            </h1>
            <h2>Awards</h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiftyYear;
