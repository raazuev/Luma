// Точка входа сортировок, фильтров

import { useState } from "react";
import { Search } from "./Search";

export const ProductFilters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Search value={searchTerm} onChange={handleSearchChange} />
    </>
  );
};
