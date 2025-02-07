import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "@/shared/ui/input/InputField";
import { Button } from "@/shared/ui/button/Button";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <section className={styles.footer__inner}>
        <h3>Присоединяйтесь к нашей рассылке</h3>
        <form className={styles.footer__inner_form} onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit}>Подписаться</Button>
        </form>
      </section>
      <nav className={styles.footer__nav}>
        <ul>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
