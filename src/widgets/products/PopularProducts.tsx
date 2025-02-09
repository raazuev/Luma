import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchProducts } from "@/entities/products/store/ProductsSlice";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import styles from "./styles/PopularProducts.module.scss";

export const PopularProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.popular}>
        <div className={styles.popular__title}>
          <h2 className={styles.h2}>Популярные товары</h2>
        </div>
        <ul className={styles.popular__item}>
          {products.map((popular) => (
            <li className={styles.li} key={popular.id}>
              <img
                className={styles.img}
                src={popular.imageUrl}
                alt={popular.title}
              ></img>
              <h3 className={styles.h3}>{popular.title}</h3>
              <span className={styles.span}>{popular.price}$</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
