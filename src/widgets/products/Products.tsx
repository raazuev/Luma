import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchProducts } from "@/entities/products/store/ProductsSlice";
import { Button } from "@/shared/ui/button/Button";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import styles from "./styles/Products.module.scss";

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const INITIAL_VISIBLE_PRODUCTS = 4;
  const [visibleProducts, setVisibleProducts] = useState(
    INITIAL_VISIBLE_PRODUCTS
  );
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleToggleList = () => {
    setIsExpanded((prev) => !prev);
    setVisibleProducts(isExpanded ? INITIAL_VISIBLE_PRODUCTS : products.length);
  };

  const buttonText = isExpanded ? "Свернуть" : "Показать больше";

  return (
    <div>
      <section className={styles.products}>
        <div className={styles.descr}>
          <h2 className={styles.h2}>Вся коллекция</h2>
        </div>
        <ul className={styles.products__item}>
          {products.slice(0, visibleProducts).map((product) => (
            <li className={styles.li} key={product.id}>
              <img
                className={styles.img}
                src={product.imageUrl}
                alt={product.title}
              />
              <h3 className={styles.title}>{product.title}</h3>
              <span className={styles.price}>{product.price}$</span>
            </li>
          ))}
        </ul>
        <div className={styles.btn}>
          <Button onClick={handleToggleList}>{buttonText}</Button>
        </div>
      </section>
    </div>
  );
};
