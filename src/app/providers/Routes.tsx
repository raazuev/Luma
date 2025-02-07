// Маршруты. Динамический маппинг в AppRouter

import { lazy } from "react";

const HomePage = lazy(async () => {
  const module = await import("@/pages/homePage/HomePage");
  return { default: module.HomePage };
});

export const appRoutes = [{ path: "/", element: <HomePage /> }];
