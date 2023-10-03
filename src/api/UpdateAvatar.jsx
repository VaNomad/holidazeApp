import { API_BASE_URL } from "./endpoints";

export async function UpdateAvatar(data) {
  const accessToken = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("userName");

  try {
    const response = await fetch(`${API_BASE_URL}/profiles/${userName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log("UpdateAvatar Response: ", response)
      throw new Error("Could not fetch Avatar media");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error("Getting Avatar failed");
  }
}
