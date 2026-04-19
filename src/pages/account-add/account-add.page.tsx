import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

interface Account {
  type: string;
  name: string;
}

const url = "http://localhost:3000/account-list";

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

  const handleSubmit = async (event?: React.FormEvent) => {
    event?.preventDefault();

    if (!validateForm()) return;

    try {
      await Axios.post(url, account);
      navigate("/movements/1");
    } catch (error) {
      console.error("Error al guardar la cuenta:", error);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Agregar Cuenta</h1>

      <form>
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="type"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Tipo de cuenta
          </label>

          <select
            id="type"
            value={account.type}
            onChange={handleChange("type")}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Seleccione una opción</option>
            <option value="Cuenta Corriente">Cuenta corriente</option>
            <option value="Cuenta Ahorro">Cuenta ahorro</option>
          </select>

          {errors.type && (
            <p style={{ color: "red", marginTop: "8px" }}>{errors.type}</p>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Alias
          </label>

          <input
            id="name"
            type="text"
            value={account.name}
            onChange={handleChange("name")}
            style={{ width: "100%", padding: "8px" }}
          />

          {errors.name && (
            <p style={{ color: "red", marginTop: "8px" }}>{errors.name}</p>
          )}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button type="button" onClick={handleSubmit}>
            Guardar
          </button>
          <button type="button" onClick={() => navigate("/movements/1")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};