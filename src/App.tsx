import { Routes, Route, Navigate } from "react-router-dom";
import { MovementsPage } from "./pages/movements/movements.page";
import { AppLayout } from "./layout/app.layout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/movements/1" />} />
        <Route path="/movements/:id" element={<MovementsPage />} />
      </Route>
    </Routes>
  );
}

export default App;