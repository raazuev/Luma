// Контейнер главной страницы

import React from "react";
import styles from "./HomePage.module.scss";
import { Banner } from "./ui/banner/Banner";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <Banner />
    </div>
  );
};
