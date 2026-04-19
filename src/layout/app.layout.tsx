import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#fff" }}>
      <header
        style={{
          background: "#35c1cf",
          color: "white",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "56px", fontWeight: "bold", lineHeight: 1 }}>
            AHBC
          </div>
          <div style={{ fontSize: "24px" }}>online banking</div>
        </div>
        <div style={{ fontSize: "24px" }}>Bienvenido</div>
      </header>

      <nav
        style={{
          background: "#1f2d55",
          padding: "20px 32px",
          display: "flex",
          gap: "48px",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Mis Cuentas
        </Link>
        <Link
          to="/movements/1"
          style={{ color: "#21d4f3", textDecoration: "none" }}
        >
          Movimientos
        </Link>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Transferencias
        </a>
      </nav>

      <main style={{ minHeight: "70vh", background: "#f4f4f4", padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
};
