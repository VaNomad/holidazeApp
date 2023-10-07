import { LOGIN_USER } from "./endpoints";
import { CurrentStorage } from "../utils/CurrentStorage";

export async function LoginUserCall(data) {
  try {
    const accessToken = CurrentStorage().accesstoken
    const response = await fetch(`${LOGIN_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.errors[0].message)

  } catch (error) {
    throw new Error("Login failed");
  }
}