import axios from "axios";
import { User } from "../../src/types/user";

export const sendEmail = async (message, user: User) => {
  const API_URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.post(`${API_URL}/email/send`, {
      message,
      user,
    });
    return response.data;
  } catch (e) {}
};
