import { LOGIN_USER } from "./endpoints";

export async function LoginUser(data) {
  try {
    const response = await fetch(`${LOGIN_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error("Login failed");
  }
}