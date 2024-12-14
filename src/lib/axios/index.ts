import axios from "axios";

export async function getSpotifyToken() {
  try {
    const response = await axios.post("/api/spotify/get-at");
    console.log("selam");
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token", error);
  }
}
