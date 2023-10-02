import { REGISTER_USER } from "./endpoints";

export async function SignUpUser(data) {
  try {
    const response = await fetch(`${REGISTER_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Signup failed");
  }
}
