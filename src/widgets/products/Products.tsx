import { useState } from "react";
import { useProducts } from "@/shared/hooks/useProducts";
import { ProductsList } from "@/shared/ui/productsList/ProductsList";
import { Button } from "@/shared/ui/button/Button";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import styles from "./styles/Products.module.scss";

export const Products: React.FC = () => {
  const { products, loading, error } = useProducts();
  const INITIAL_VISIBLE_PRODUCTS = 4;
  const [visibleProducts, setVisibleProducts] = useState(
    INITIAL_VISIBLE_PRODUCTS
  );
  const [isExpanded, setIsExpanded] = useState(false);

  if (loading) return <Spinner />;
  if (error) return <p className={styles.error}>{error}</p>;

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
        <ProductsList products={products.slice(0, visibleProducts)} grid />
        <div className={styles.btn}>
          <Button onClick={handleToggleList}>{buttonText}</Button>
        </div>
      </section>
    </div>
  );
};
