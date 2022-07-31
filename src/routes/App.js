import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { Scanner } from "../pages/Access/QrScanner";
import { PrivateRoutes } from "./PrivateRoutes";

const HomePage = lazy(() => import("../pages/HomePage"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Access/Login"));
const OrderView = lazy(() => import("../pages/Access/Pedidos/OrderView"));
const OrderAdmin = lazy(() => import("../pages/Access/Pedidos/OrderAdmin.jsx"));
const AsistentesAdmin = lazy(() =>
  import("../pages/Access/Asistentes/AsistentesAdmin")
);

export const App = () => {
  return (
    <Suspense fallback={<SpinnerLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="order" element={
            <PrivateRoutes>
              <OrderAdmin />
            </PrivateRoutes>
          } />
          <Route path="order_view/:userId" element={
            <PrivateRoutes>
              <OrderView />
            </PrivateRoutes>
          } />
          <Route path="asistentes" element={
            <PrivateRoutes>
              <AsistentesAdmin />
            </PrivateRoutes>
          } />
          <Route path="scanner" element={
            <PrivateRoutes>
              <Scanner />
            </PrivateRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
