import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f3f3f3" }}>
      <header style={{ background: "#32c2cf", color: "white", padding: "24px" }}>
        <h1 style={{ margin: 0 }}>AHBC</h1>
        <p style={{ margin: 0 }}>online banking</p>
      </header>

      <nav style={{ background: "#1f2d55", padding: "16px", display: "flex", gap: "24px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Mis Cuentas</Link>
        <Link to="/movements/1" style={{ color: "#35d7ff", textDecoration: "none" }}>Movimientos</Link>
        <span style={{ color: "white" }}>Transferencias</span>
      </nav>

      <main style={{ padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};
