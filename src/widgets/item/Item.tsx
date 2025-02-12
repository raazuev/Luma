import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchProducts } from "@/entities/products/store/ProductsSlice";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import { Button } from "@/shared/ui/button/Button";
import styles from "./Item.module.scss";

export const Item: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  const product = products.find((p) => p.id.toString() === id);

  const navigate = useNavigate();

  if (!product) {
    return (
      <div>
        <p>Товар не найден</p>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <h2>{product.title}</h2>
      <span>{Number(product.price).toLocaleString()}</span>
      <img src={product.imageUrl} alt={product.title} loading="lazy" />
      <span>{product.height}</span>
      <Button>В корзину</Button>
    </div>
  );
};
