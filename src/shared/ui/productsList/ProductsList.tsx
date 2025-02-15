import { Link } from "react-router-dom";
import { useCallback } from "react";
import { Product } from "@/app/types/types";
import classNames from "classnames";
import FallBack from "@/shared/assets/img/fallback/fallback.jpg";
import styles from "./ProductsList.module.scss";

interface ProductListProps {
  products: Product[];
  grid?: boolean;
  className?: string;
}

export const ProductsList: React.FC<ProductListProps> = ({
  products,
  grid = true,
  className,
}) => {
  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = FallBack;
    },
    []
  );


  return (
    <ul className={classNames(grid ? styles.grid : styles.slider, className)}>
      {products.map((product) => (
        <li key={product.id} className={styles.li}>
          <Link to={`/products/${product.id}`}>
            <img
              loading="lazy"
              className={styles.img}
              src={product.imageUrl}
              alt={product.title || "Товар"}
              onError={handleError}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>{product.price}$</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
