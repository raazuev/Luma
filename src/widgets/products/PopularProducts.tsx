import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useProducts } from "@/shared/hooks/useProducts";
import { ProductsList } from "@/shared/ui/productsList/ProductsList";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import styles from "./styles/PopularProducts.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PopularProducts: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  const popularFilter = products.filter((product) => product.rating > 3);

  return (
    <div className={styles.container} aria-label="Популярные товары">
      <div className={styles.popular}>
        <div className={styles.popular__title}>
          <h2 className={styles.h2}>Популярные товары</h2>
        </div>
        {popularFilter.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {popularFilter.map((product) => (
              <SwiperSlide className={styles.swiper_container} key={product.id}>
                <ProductsList
                  products={[product]}
                  grid={false}
                  className={styles.popularImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.notProduct}>
            <p>Нет популярных товаров</p>
          </div>
        )}
      </div>
    </div>
  );
};
