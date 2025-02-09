import { useState } from "react";
import { PRODUCTS } from "./store/MockData";
import { Button } from "@/shared/ui/button/Button";
import styles from "./styles/Products.module.scss";

export const Products: React.FC = () => {
  const INITIAL_VISIBLE_PRODUCTS = 4;
  const [visibleProducts, setVisibleProducts] = useState(
    INITIAL_VISIBLE_PRODUCTS
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleList = () => {
    setIsExpanded((prev) => !prev);
    setVisibleProducts(isExpanded ? INITIAL_VISIBLE_PRODUCTS : PRODUCTS.length);
  };

  const buttonText = isExpanded ? "Свернуть" : "Показать больше";

  return (
    <div>
      <section className={styles.products}>
        <div className={styles.descr}>
          <h2 className={styles.h2}>Вся коллекция</h2>
        </div>
        <ul className={styles.products__item}>
          {PRODUCTS.slice(0, visibleProducts).map((products) => (
            <li className={styles.li} key={products.id}>
              <img
                className={styles.img}
                src={products.img}
                alt={products.title}
              />
              <h3 className={styles.title}>{products.title}</h3>
              <span className={styles.price}>{products.price}</span>
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
