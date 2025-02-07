// // Переиспользуемый инпут для формы отправки почты

import React from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  label?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.input}
      placeholder="Введите Email"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
