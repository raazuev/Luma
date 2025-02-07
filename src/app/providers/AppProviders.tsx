// Объединение провайдеров и рендеринг AppRouter

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export const AppProviders: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
);
