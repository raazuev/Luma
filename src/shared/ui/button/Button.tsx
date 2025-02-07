// Переиспользуемый компонент кнопки

import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};
