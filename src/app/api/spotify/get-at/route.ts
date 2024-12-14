import axios from "axios";

export async function POST() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const tokenUrl = "https://accounts.spotify.com/api/token";

  try {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");

    const response = await axios.post(tokenUrl, data, {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error getting token", error);
    return new Response(JSON.stringify({ error: "failed to fetch token" }), {
      status: 500,
    });
  }
}
