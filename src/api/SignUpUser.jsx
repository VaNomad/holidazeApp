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

    const signUpData = await response.json();
    console.log(signUpData)
    const accessToken = signUpData.accessToken;

    const userData = {
      name: signUpData.name,
      email: signUpData.email,
      password: signUpData.password,
      avatar: signUpData.avatar,
      venueManager: signUpData.venueManager,
    }

    return { userData, accessToken };
  } catch (error) {
    throw new Error("Signup failed ${error.message}");
  }
}
