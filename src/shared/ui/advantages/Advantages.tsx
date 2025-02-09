import React from "react";
import styles from "./Advantages.module.scss";

export const Advantages: React.FC = () => {
  return (
    <section className={styles.advantages}>
      <h3>Что отличает наш бренд</h3>
      <ul>
        <li>
          <svg className={styles.svg} aria-labelledby="car">
            <use href="/sprite_advantages.svg#icon-car"></use>
          </svg>
          <h4>Стандартно на следующий день</h4>
          <p>
            Сделайте заказ до 15:00 и получите его на следующий день в
            стандартном режиме
          </p>
        </li>
        <li>
          <svg className={styles.svg} aria-labelledby="done">
            <use href="/sprite_advantages.svg#icon-done"></use>
          </svg>
          <h4>Сделано настоящими ремесленниками</h4>
          <p>
            Товары ручной работы, сделанные с настоящей страстью и мастерством
          </p>
        </li>
        <li>
          <svg className={styles.svg} aria-labelledby="card">
            <use href="/sprite_advantages.svg#icon-card"></use>
          </svg>
          <h4>Непревзойденные цены</h4>
          <p>Для наших материалов и качества вы нигде не найдете лучших цен</p>
        </li>
        <li>
          <svg className={styles.svg} aria-labelledby="recycled">
            <use href="/sprite_advantages.svg#recycled"></use>
          </svg>
          <h4>Переработанная упаковка</h4>
          <p>
            Мы используем 100% переработанную древесину, чтобы обеспечить
            минимальное воздействие на окружающую среду.
          </p>
        </li>
      </ul>
    </section>
  );
};
