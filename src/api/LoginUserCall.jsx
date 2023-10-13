import { LOGIN_USER } from "./endpoints";
// import { setStorage } from "../utils/SetStorage";

export async function LoginUserCall(data) {
  try {
    const accessToken = localStorage.getItem("accessToken")
    // const venueManagerValue = localStorage.getItem("venueManager");
    const response = await fetch(`${LOGIN_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    console.log(json)
    // console.log(venueManagerValue)

    if (response.ok) {
      // localStorage.setItem("accessToken", json.accessToken)
      return json;
    }

    throw new Error(json.errors[0].message)

  } catch (error) {
    throw new Error("Login failed");
  }
}