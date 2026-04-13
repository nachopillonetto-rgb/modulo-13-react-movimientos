import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <header style={{ backgroundColor: "#2ec4cc", color: "white", padding: "24px 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <div style={{ fontSize: "48px", fontWeight: "bold", lineHeight: 1 }}>
              AHBC
            </div>
            <div style={{ fontSize: "24px" }}>online banking</div>
          </div>
          <div style={{ fontSize: "28px" }}>Bienvenido</div>
        </div>
      </header>

      <nav style={{ backgroundColor: "#1f2a44", padding: "16px 0" }}>
        <div
          style={{
            display: "flex",
            gap: "48px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="#">
            Mis Cuentas
          </Link>
          <Link
            style={{
              color: "#2ec4cc",
              textDecoration: "none",
              borderBottom: "3px solid #2ec4cc",
              paddingBottom: "4px",
            }}
            to="/movements/1"
          >
            Movimientos
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="#">
            Transferencias
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px" }}>
        <Outlet />
      </main>
    </div>
  );
};