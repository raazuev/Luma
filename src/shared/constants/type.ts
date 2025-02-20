export interface ProductType {
  id: number;
  [key: string]: string[] | number;
}

export const TYPES: ProductType[] = [
  {
    id: 1,
    "Тип продукта": [
      "Стулья",
      "Кресла",
      "Вазы",
      "Тарелки",
      "Потолочный светильник",
      "Настольный светильник",
    ],
  },
  {
    id: 2,
    Цена: ["0 - 100", "101 - 250", "250"],
  },
  {
    id: 3,
    Дизайнеры: ["Роберт", "Том"],
  },
];
