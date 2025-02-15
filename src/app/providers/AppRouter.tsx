// Роутинг страниц приложения

import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./Routes";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { Spinner } from "@/shared/ui/spinner/Spinner";
import { ErrorBoundary } from "@/shared/ui/errorBoundary/ErrorBoundary";

export const AppRouter: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary>
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
