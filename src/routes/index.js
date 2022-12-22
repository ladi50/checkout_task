import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import React from "react";

const Shows = lazy(() => import("pages/Shows/Shows"));
const Checkout = lazy(() => import("pages/Checkout/Checkout"));

const Router = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path={"/"} element={<Shows />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
