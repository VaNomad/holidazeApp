import { API_BASE_URL } from "./endpoints";

export const DeleteVenueCall = async (id) => {
  const accessToken = localStorage.getItem("accessToken");
  const deleteVenueUrl = `${API_BASE_URL}/venues/${id}`;

  try {
    const response = await fetch(deleteVenueUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok)
      throw new Error(`Error deleting venue: ${response.status}`);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
