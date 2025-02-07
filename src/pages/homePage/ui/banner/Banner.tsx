// Баннер для главной страницы

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/Button";
import styles from "./Banner.module.scss";
import { ROUTES } from "@/shared/constants/routes";
import { Search } from "@/widgets/productFilters/Search";

export const Banner: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleNavigate = () => {
    navigate(ROUTES.CATALOG);
  };

  return (
    <div className={styles.banner}>
      {/* <span className={styles.search}>
        <Search
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
      </span> */}
      <div className={styles.banner__item}>
        <section className={styles.descr}>
          <h2>
            Роскошная домашняя утварь для тех, кто любит нестареющее качество
            дизайна
          </h2>
          <p>Покупайте новую коллекцию Spring 2025 уже сегодня</p>
        </section>
        <div className={styles.button}>
          <Button onClick={handleNavigate}>Посмотреть коллекцию</Button>
        </div>
      </div>
    </div>
  );
};
