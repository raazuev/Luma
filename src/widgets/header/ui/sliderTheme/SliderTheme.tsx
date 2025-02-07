// Слайдер для светлой/тёмной темы

import React from "react";
import styles from "./SliderTheme.module.scss";

export const SliderTheme: React.FC = () => {
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slideSwitchRound}></span>
      </label>
    </>
  );
};
