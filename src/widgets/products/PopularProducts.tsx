import { POPULAR } from "./store/PopularMock";
import styles from "./styles/PopulatProducts.module.scss";

export const PopularProducts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.popular}>
        <div className={styles.popular__title}>
          <h2 className={styles.h2}>Популярные товары</h2>
        </div>
        <ul className={styles.popular__item}>
          {POPULAR.map((popular) => (
            <li className={styles.li} key={popular.id}>
              <img
                className={styles.img}
                src={popular.img}
                alt={popular.title}
              ></img>
              <h3 className={styles.h3}>{popular.title}</h3>
              <span className={styles.span}>{popular.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
