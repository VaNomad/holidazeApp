import { LOGIN_USER } from "./endpoints";

export async function LoginUserCall(data) {
  try {
    const response = await fetch(`${LOGIN_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      return json;
    }

    throw new Error(json.errors[0].message)

  } catch (error) {
    throw new Error("Login failed");
  }
}