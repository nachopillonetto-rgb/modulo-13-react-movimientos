import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

interface Movement {
  id: string;
  fecha: string;
  concepto: string;
  importe: number;
  saldoDisponible: number;
}

export const MovementsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movements, setMovements] = useState<Movement[]>([]);

  useEffect(() => {
    const getMovements = async () => {
      try {
        const { data } = await Axios.get<Movement[]>(
          `http://localhost:3000/movements/${id}`
        );
        setMovements(data);
      } catch (error) {
        console.error("Error al cargar movimientos:", error);
      }
    };

    if (id) {
      getMovements();
    }
  }, [id]);

  return (
    <>
      <div style={{ padding: "24px" }}>
        <h1>Movimientos</h1>

        <button
          onClick={() => navigate("/account-add")}
          style={{ marginBottom: "16px" }}
        >
          Agregar nueva cuenta
        </button>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px" }}>Fecha</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Concepto</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Importe</th>
              <th style={{ textAlign: "left", padding: "12px" }}>
                Saldo disponible
              </th>
            </tr>
          </thead>

          <tbody>
            {movements.map((movement) => (
              <tr key={movement.id}>
                <td style={{ padding: "16px 12px" }}>{movement.fecha}</td>
                <td style={{ padding: "16px 12px" }}>{movement.concepto}</td>
                <td style={{ padding: "16px 12px" }}>{movement.importe} €</td>
                <td style={{ padding: "16px 12px" }}>
                  {movement.saldoDisponible} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};