import { API_BASE_URL } from "./endpoints";

export async function UpdateAvatarUrl(username, newAvatarUrl) {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `${API_BASE_URL}/profiles/${username}/media`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ avatar: newAvatarUrl }),
      }
    );

    if (!response.ok) {
      console.error("updateAvatarUrl Response: ", response);
      throw new Error("Could not update avatar URL");
    }

    const avatarData = await response.json();

    return avatarData;
  } catch (error) {
    console.error("Updating Avatar failed: ", error);
    throw new Error("Updating Avatar failed");
  }
}
