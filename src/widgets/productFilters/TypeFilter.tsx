import React from "react";
import { TYPES } from "@/shared/constants/type";
import styles from "./styles/TypesFilter.module.scss";

export const TypeFilter: React.FC = () => {
  return (
    <div className={styles.types}>
      {TYPES.map(({ id, ...filters }) => (
        <div key={id}>
          {Object.entries(filters).map(([filterName, types]) => (
            <section className={styles.types__item} key={filterName}>
              <h3 className={styles.title}>{filterName}</h3>
              {Array.isArray(types) ? (
                <ul className={styles.ul}>
                  {types.map((type) => (
                    <li className={styles.subtitle} key={type}>
                      <label className={styles.label}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          name={filterName}
                          value={type}
                        />
                        {type}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Invalid filter data</p>
              )}
            </section>
          ))}
        </div>
      ))}
    </div>
  );
};
