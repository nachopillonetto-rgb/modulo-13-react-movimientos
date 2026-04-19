import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccount, getMovements } from "./movements.api";
import { AccountVm, MovementVm } from "./movements.api-model";

export const MovementsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [account, setAccount] = useState<AccountVm | null>(null);
  const [movements, setMovements] = useState<MovementVm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const [accountData, movementsData] = await Promise.all([
          getAccount(id),
          getMovements(id),
        ]);

        setAccount(accountData);
        setMovements(movementsData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize: "64px", marginBottom: "24px" }}>Movimientos</h1>

      {account && (
        <div style={{ marginBottom: "24px" }}>
          <p><strong>Alias:</strong> {account.alias}</p>
          <p><strong>IBAN:</strong> {account.iban}</p>
          <p><strong>Saldo:</strong> {account.balance} €</p>
          <p><strong>Última transacción:</strong> {account.lastTransaction}</p>
        </div>
      )}

      <button
        onClick={() => navigate("/account-add")}
        style={{ marginBottom: "24px" }}
      >
        Agregar nueva cuenta
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "12px" }}>Fecha</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Fecha valor</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Concepto</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Importe</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Saldo disponible</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement) => (
            <tr key={movement.id}>
              <td style={{ padding: "12px" }}>{movement.transaction}</td>
              <td style={{ padding: "12px" }}>{movement.realTransaction}</td>
              <td style={{ padding: "12px" }}>{movement.description}</td>
              <td style={{ padding: "12px" }}>{movement.amount} €</td>
              <td style={{ padding: "12px" }}>{movement.balance} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
EOFcat > src/pages/movements/movements.page.tsx <<'EOF'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccount, getMovements } from "./movements.api";
import { AccountVm, MovementVm } from "./movements.api-model";

export const MovementsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [account, setAccount] = useState<AccountVm | null>(null);
  const [movements, setMovements] = useState<MovementVm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const [accountData, movementsData] = await Promise.all([
          getAccount(id),
          getMovements(id),
        ]);

        setAccount(accountData);
        setMovements(movementsData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize: "64px", marginBottom: "24px" }}>Movimientos</h1>

      {account && (
        <div style={{ marginBottom: "24px" }}>
          <p><strong>Alias:</strong> {account.alias}</p>
          <p><strong>IBAN:</strong> {account.iban}</p>
          <p><strong>Saldo:</strong> {account.balance} €</p>
          <p><strong>Última transacción:</strong> {account.lastTransaction}</p>
        </div>
      )}

      <button
        onClick={() => navigate("/account-add")}
        style={{ marginBottom: "24px" }}
      >
        Agregar nueva cuenta
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "12px" }}>Fecha</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Fecha valor</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Concepto</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Importe</th>
            <th style={{ textAlign: "left", padding: "12px" }}>Saldo disponible</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement) => (
            <tr key={movement.id}>
              <td style={{ padding: "12px" }}>{movement.transaction}</td>
              <td style={{ padding: "12px" }}>{movement.realTransaction}</td>
              <td style={{ padding: "12px" }}>{movement.description}</td>
              <td style={{ padding: "12px" }}>{movement.amount} €</td>
              <td style={{ padding: "12px" }}>{movement.balance} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
