import { Link } from "react-router-dom";
import { Product } from "@/app/types/types";
import classNames from "classnames";
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
  return (
    <ul className={classNames(grid ? styles.grid : styles.slider, className)}>
      {products.map((product) => (
        <li key={product.id} className={styles.li}>
          <Link to={`/products/${product.id}`}>
            <img
              className={styles.img}
              src={product.imageUrl}
              alt={product.title}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>{product.price}$</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
