import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovements } from "./movements.api";

export const MovementsPage = () => {
  const { id } = useParams();
  const [movements, setMovements] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      getMovements(id).then(setMovements);
    }
  }, [id]);

  return (
    <div style={{ background: "white", padding: "24px" }}>
      <h1>Movimientos</h1>

      {movements.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {movements.map((m) => (
            <li key={m.id}>
              {m.description} - {m.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
