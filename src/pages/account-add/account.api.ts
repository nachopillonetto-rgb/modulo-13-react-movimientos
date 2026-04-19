import Axios from "axios";

const url = "http://localhost:3000/account-list";

export interface Account {
  type: string;
  name: string;
}

export const saveAccount = (account: Account) =>
  Axios.post(url, account).then((res) => res.data);
