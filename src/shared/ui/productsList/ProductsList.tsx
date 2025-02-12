import { Link } from "react-router-dom";
import { Product } from "@/app/types/types";
import styles from "./ProductsList.module.scss";

interface ProductListProps {
  products: Product[];
  grid?: boolean;
}

export const ProductsList: React.FC<ProductListProps> = ({
  products,
  grid = true,
}) => {
  return (
    <ul className={grid ? styles.grid : styles.slider}>
      {products.map((product) => (
        <li key={product.id} className={styles.li}>
          <Link to={`/products/${product.id}`}>
            <img
              className={styles.img}
              src={product.imageUrl}
              alt={product.title}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <span className={styles.price}>{product.price}$</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
