
import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", background: "#f3f3f3", minHeight: "100vh" }}>
      <header style={{ background: "#36c2cf", color: "white", padding: "24px 32px" }}>
        <h1 style={{ margin: 0, fontSize: "48px" }}>AHBC</h1>
        <p style={{ margin: 0 }}>online banking</p>
      </header>

      <nav style={{ background: "#1f2d55", padding: "16px 32px", display: "flex", gap: "24px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Mis Cuentas</Link>
        <Link to="/movements/1" style={{ color: "#35d7ff", textDecoration: "none" }}>Movimientos</Link>
        <Link to="/account-add">Agregar cuenta</Link>
        <span style={{ color: "white" }}>Transferencias</span>
      </nav>

      <main style={{ padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};
