import axios from "axios";
import { Account } from "./account-add.api-model";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const saveAccount = async (account: Account): Promise<unknown> => {
  const newAccount = {
    alias: account.name,
    iban: "ES" + Math.random().toString().slice(2, 18),
    balance: 0,
    lastTransaction: new Date().toLocaleDateString(),
  };

  const response = await axios.post(`${baseUrl}/account-list`, newAccount);
  return response.data;
};
