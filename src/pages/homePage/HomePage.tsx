// Контейнер главной страницы

import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants/routes";
import styles from "./HomePage.module.scss";
import { Banner } from "./ui/banner/Banner";
import { Advantages } from "@/shared/ui/advantages/Advantages";
import { Products } from "@/widgets/products/Products";
import { PopularProducts } from "@/widgets/products/PopularProducts";
import { Button } from "@/shared/ui/button/Button";

export const HomePage: React.FC = () => {
  const productsNavigate = useNavigate();

  const handleProducts = () => {
    productsNavigate(ROUTES.CATALOG);
  };

  return (
    <div className={styles.home}>
      <Banner />
      <Advantages />
      <>
        <Products />
        <div className={styles.products_btn}>
          <Button onClick={handleProducts}>Посмотреть коллекцию</Button>
        </div>
      </>
      <PopularProducts />
    </div>
  );
};
