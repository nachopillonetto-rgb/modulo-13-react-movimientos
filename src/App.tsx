import { AccountAddPage } from "./pages/account-add/account-add.page";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/app.layout";
import { MovementsPage } from "./pages/movements/movements.page";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/movements/1" replace />} />
        <Route path="/movements/:id" element={<MovementsPage />} />
        <Route path="/account-add" element={<AccountAddPage />} />
      </Route>
    </Routes>
  );
}

export default App;
