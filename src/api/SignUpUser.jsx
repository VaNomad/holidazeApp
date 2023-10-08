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
      const errorResponse = await response.json();
      throw new Error(errorResponse.errors[0].message);
    }

    const userSignUp = await response.json();
    localStorage.setItem("username", userSignUp.name);
    localStorage.setItem("accessToken", userSignUp.name);
    localStorage.setItem("email", userSignUp.email);
    localStorage.setItem("avatar", userSignUp.avatar);
    localStorage.setItem("venueManager", userSignUp.venueManager);
    // localStorage.setItem("password", userSignUp.password);
        
    console.log(userSignUp)

    return userSignUp;
  } catch (error) {
    throw new Error(`Signup failed ${error.message}`);
  }
}
