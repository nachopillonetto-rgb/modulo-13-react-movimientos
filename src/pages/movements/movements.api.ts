import axios from "axios";
import { AccountVm, MovementVm } from "./movements.api-model";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const getAccount = async (id: string): Promise<AccountVm> => {
  const response = await axios.get<AccountVm>(`${baseUrl}/account-list/${id}`);
  return response.data;
};

export const getMovements = async (id: string): Promise<MovementVm[]> => {
  const response = await axios.get<MovementVm[]>(
    `${baseUrl}/movements?accountId=${Number(id)}`
  );
  return response.data;
};
