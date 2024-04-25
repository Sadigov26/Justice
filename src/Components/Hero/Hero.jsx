import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.HeroDesc}>
            <h1>
              <span>We Fight </span>For Your Right
            </h1>
            <p>Another cool free template by the fine folks at Colorlib.</p>
            <button>free</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
