// Точка входа сортировок, фильтров

import { useState } from "react";
import { Search } from "./Search";
import { TypeFilter } from "./TypeFilter";
import styles from "./styles/ProductFilters.module.scss";

export const ProductFilters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className={styles.filters}>
      <Search value={searchTerm} onChange={handleSearchChange} />
      <TypeFilter />
    </div>
  );
};
