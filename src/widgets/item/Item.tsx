import { useEffect } from "react";
import { useProducts } from "@/shared/hooks/useProducts";
import { useParams } from "react-router-dom";
import { fetchProducts } from "@/entities/products/store/ProductsSlice";
import { NotFound } from "@/shared/ui/notFound/NotFound";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import { Button } from "@/shared/ui/button/Button";
import styles from "./Item.module.scss";

export const Item: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error, dispatch } = useProducts();

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <NotFound message="Товар не найден" />;

  return (
    <div className={styles.item}>
      <section className={styles.item__img}>
        <img
          className={styles.itemImg}
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
        />
      </section>
      <section className={styles.item__descr}>
        <div className={styles.title}>
          <h2>{product.title}</h2>
          <span>{Number(product.price).toLocaleString()} $</span>
        </div>
        <hr />
        <div className={styles.descr}>
          <h3>Описание товара</h3>
          <p>{product.description}</p>
        </div>
        <div className={styles.size}>
          <p>Размеры</p>
          <span>{product.height ?? "-"} см</span>
        </div>
        <div className={styles.count}>
          <p>Количество</p>
          <span></span>
        </div>
        <div className={styles.btn}>
          <Button>Добавить в корзину</Button>
          <Button>Сохранить в избранное</Button>
        </div>
      </section>
    </div>
  );
};
