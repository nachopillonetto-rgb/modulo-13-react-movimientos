import axios from "axios";

export const getMovements = async (accountId: string) => {
  const response = await axios.get(
    `http://localhost:3000/movements?accountId=${accountId}`
  );
  return response.data;
};
