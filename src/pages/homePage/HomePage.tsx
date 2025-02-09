// Контейнер главной страницы

import React from "react";
import styles from "./HomePage.module.scss";
import { Banner } from "./ui/banner/Banner";
import { Advantages } from "@/shared/ui/advantages/Advantages";
import { Products } from "@/widgets/products/Products";
import { PopularProducts } from "@/widgets/products/PopularProducts";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <Advantages />
      <Products/>
      <PopularProducts/>
    </div>
  );
};
