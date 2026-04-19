import axios from "axios";

export const saveAccount = async (account: {
  type: string;
  name: string;
}) => {
  const response = await axios.post(
    "http://localhost:3000/account-list",
    {
      alias: account.name,
      type: account.type,
    }
  );

  return response.data;
};