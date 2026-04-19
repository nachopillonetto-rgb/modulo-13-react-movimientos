import { useState } from "react";
import { saveAccount } from "./account.api";

export const AccountAddPage = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!type) {
      setError("Selecciona tipo de cuenta");
      return;
    }

    if (!name) {
      setError("Introduce alias");
      return;
    }

    setError("");

    await saveAccount({ type, name });

    alert("Cuenta creada");

    // opcional: limpiar
    setType("");
    setName("");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Agregar cuenta</h2>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Selecciona tipo</option>
        <option value="1">Cuenta corriente</option>
        <option value="2">Ahorro</option>
      </select>

      <br /><br />

      <input
        value={name}
        placeholder="Alias"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Guardar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};