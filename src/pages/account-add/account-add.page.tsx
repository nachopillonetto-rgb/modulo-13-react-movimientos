import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "./account-add.api";
import { Account } from "./account-add.api-model";

export const AccountAddPage = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account>({
    type: "",
    name: "",
  });

  const [errors, setErrors] = useState({
    type: "",
    name: "",
  });

  const handleChange =
    (field: keyof Account) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setAccount({
        ...account,
        [field]: event.target.value,
      });
    };

  const validateForm = () => {
    const newErrors = {
      type: "",
      name: "",
    };

    if (!account.type) {
      newErrors.type = "Debe elegir una cuenta.";
    }

    if (!account.name.trim()) {
      newErrors.name = "Debe introducir un alias.";
    }

    setErrors(newErrors);

    return !newErrors.type && !newErrors.name;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await saveAccount(account);
      navigate("/movements/1");
    } catch (error) {
      console.error("Error al guardar la cuenta:", error);
    }
  };

  return (
    <div style={{ background: "white", padding: "24px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>Agregar Cuenta</h1>

      <div style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="type">Tipo de cuenta</label>
          <select
            id="type"
            value={account.type}
            onChange={handleChange("type")}
            style={{ display: "block", width: "100%", marginTop: "8px" }}
          >
            <option value="">Seleccione una opción</option>
            <option value="Cuenta corriente">Cuenta corriente</option>
            <option value="Cuenta ahorro">Cuenta ahorro</option>
          </select>
          {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name">Alias</label>
          <input
            id="name"
            type="text"
            value={account.name}
            onChange={handleChange("name")}
            style={{ display: "block", width: "100%", marginTop: "8px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button type="button" onClick={handleSubmit}>
            Guardar
          </button>
          <button type="button" onClick={() => navigate("/movements/1")}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
