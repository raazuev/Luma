import { useEffect, useState } from "react";

export const TestError: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(() => {
        throw new Error("Ошибка загрузки данных!");
      });
    }, 1000);
  }, []);

  return <div>{data ? "Данные загружены" : "Загрузка..."}</div>;
};
