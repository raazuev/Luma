// Компонент поиска товаров

import { useState } from "react";
import classNames from "classnames";
import styles from "./styles/Search.module.scss";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleInput = () => {
    setIsInputVisible((prev) => !prev);
  };

  return (
    <>
      <svg aria-labelledby="search" onClick={toggleInput}>
        <use href="/src/shared/assets/img/icons/sprite.svg#icon-search"></use>
      </svg>
      <input
        type="text"
        placeholder="Поиск товара"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(styles.input, {
          [styles.active]: isInputVisible,
        })}
      />
    </>
  );
};
