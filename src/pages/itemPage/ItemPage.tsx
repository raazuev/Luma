import React from "react";
import styles from "./ItemPage.module.scss";
import { Item } from "@/widgets/item/Item";
import { Advantages } from "@/shared/ui/advantages/Advantages";

export const ItemPage: React.FC = () => {
  return (
    <div className={styles.items}>
      <Item />
      <Advantages />
    </div>
  );
};
