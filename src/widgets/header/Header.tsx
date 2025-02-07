// Глобальный контейнер для компонента Header

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SliderTheme } from "./ui/sliderTheme/SliderTheme";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.top}>
          <div>
            <SliderTheme />
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <h1>Luma</h1>
            </Link>
          </div>
          <div
            className={classNames(styles.menu_btn, {
              [styles.active]: menuOpen,
            })}
            onClick={toggleMenu}
            aria-label="Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={classNames(styles.icons_link, { [styles.icons_active]: menuOpen })}
          >
            <div className={styles.icons}>
              <Link to="/cart">
                <svg aria-labelledby="cart">
                  <use href="/sprite.svg#icon-cart"></use>
                </svg>
              </Link>
              <Link to="/user">
                <svg aria-labelledby="user">
                  <use href="/sprite.svg#icon-user"></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div
          className={classNames(styles.link, { [styles.active]: menuOpen })}
          onClick={closeMenu}
        >
          <ul className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <li>
              <Link to="/">Посуда</Link>
            </li>
            <li>
              <Link to="/">Кровати</Link>
            </li>
            <li>
              <Link to="/">Стулья</Link>
            </li>
            <li>
              <Link to="/">Диваны</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
