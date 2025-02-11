import React from "react";
import styles from "./ProductsPage.module.scss";
import { Products } from "@/widgets/products/Products";
import { ProductFilters } from "@/widgets/productFilters/ProductFilters";

export const ProductsPage: React.FC = () => {
  return (
    <div className={styles.products_page}>
      <div className={styles.products}>
        <ProductFilters />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};
