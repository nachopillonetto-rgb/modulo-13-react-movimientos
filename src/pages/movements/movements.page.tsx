import { useParams } from "react-router-dom";

const mockMovements = [
  {
    id: 1,
    fecha: "09/12/2019",
    fechaValor: "09/12/2019",
    descripcion: "Nómina noviembre",
    importe: 900,
    saldoDisponible: 1490,
  },
  {
    id: 2,
    fecha: "07/12/2019",
    fechaValor: "08/12/2019",
    descripcion: "Alquiler noviembre",
    importe: -400,
    saldoDisponible: 590,
  },
  {
    id: 3,
    fecha: "01/12/2019",
    fechaValor: "02/12/2019",
    descripcion: "Gastos móvil",
    importe: -24,
    saldoDisponible: 990,
  },
];

export const MovementsPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1 style={{ fontSize: "52px", fontWeight: 300, marginBottom: "16px" }}>
        Saldos y Últimos movimientos
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "4px solid black",
          borderBottom: "4px solid black",
          padding: "8px 0",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "28px" }}>Alias: Gastos mes</div>
        <div style={{ fontWeight: 700, fontSize: "28px" }}>
          IBAN: ES91 2100 0418 4502 0005 1332
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 700, fontSize: "14px" }}>SALDO DISPONIBLE</div>
          <div style={{ color: "#2ec4cc", fontWeight: 700, fontSize: "42px" }}>
            1490 €
          </div>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#d9d9d9", textAlign: "left" }}>
            <th style={{ padding: "12px" }}>FECHA</th>
            <th style={{ padding: "12px" }}>FECHA VALOR</th>
            <th style={{ padding: "12px" }}>DESCRIPCIÓN</th>
            <th style={{ padding: "12px" }}>IMPORTE</th>
            <th style={{ padding: "12px" }}>SALDO DISPONIBLE</th>
          </tr>
        </thead>
        <tbody>
          {mockMovements.map((movement) => (
            <tr key={movement.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "16px 12px" }}>{movement.fecha}</td>
              <td style={{ padding: "16px 12px" }}>{movement.fechaValor}</td>
              <td style={{ padding: "16px 12px" }}>{movement.descripcion}</td>
              <td
                style={{
                  padding: "16px 12px",
                  color: movement.importe < 0 ? "red" : "black",
                }}
              >
                {movement.importe} €
              </td>
              <td style={{ padding: "16px 12px" }}>
                {movement.saldoDisponible} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};