// Маршруты. Динамический маппинг в AppRouter

import path from "path";
import { lazy } from "react";

const HomePage = lazy(async () => {
  const module = await import("@/pages/homePage/HomePage");
  return { default: module.HomePage };
});
const ProductsPage = lazy(async () => {
  const module = await import("@/pages/productsPage/ProductsPage");
  return { default: module.ProductsPage };
});
const ItemPage = lazy(async () => {
  const module = await import("@/pages/itemPage/ItemPage");
  return { default: module.ItemPage };
});
const NotFound = lazy(async () => {
  const module = await import("@/shared/ui/notFound/NotFound");
  return { default: module.NotFound };
});

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:id", element: <ItemPage /> },
  { path: "*", element: <NotFound /> },
];
