export interface ProductType {
  id: number;
  [key: string]: string[] | number;
}

export const TYPES: ProductType[] = [
  {
    id: 1,
    "Тип продукта": ["Фурнитура", "Диваны"],
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
