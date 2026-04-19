import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f3f3", color: "black", padding: "24px" }}>
      <h1>Layout OK</h1>
      <Outlet />
    </div>
  );
};
