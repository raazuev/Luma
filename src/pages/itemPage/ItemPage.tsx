import React from "react";
import styles from "./ItemPage.module.scss";
import { Item } from "@/widgets/item/Item";

export const ItemPage: React.FC = () => {
  return (
    <div className={styles.items}>
      <Item />
    </div>
  );
};
