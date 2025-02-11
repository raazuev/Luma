import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fetchProducts } from "@/entities/products/store/ProductsSlice";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import styles from "./styles/PopularProducts.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className={styles.container} aria-label="Популярные товары">
      <div className={styles.popular}>
        <div className={styles.popular__title}>
          <h2 className={styles.h2}>Популярные товары</h2>
        </div>
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
          {products.map((popular) => (
            <SwiperSlide className={styles.swiper_container} key={popular.id}>
              <div className={styles.li}>
                <img
                  className={styles.img}
                  src={popular.imageUrl}
                  alt={popular.title}
                />
                <h3 className={styles.h3}>{popular.title}</h3>
                <span className={styles.span}>{popular.price}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
