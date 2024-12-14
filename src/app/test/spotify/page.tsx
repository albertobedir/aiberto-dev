"use client";

import { useTransition, useState } from "react";
import axios from "axios";

function Page() {
  const [isPending, startTransition] = useTransition();
  const [currentTrack, setCurrentTrack] = useState(null);

  const getSpoToken = () => {
    startTransition(async () => {
      try {
        const tokenResponse = await axios.post("/api/spotify/get-at");
        const accessToken = tokenResponse.data.access_token;
        console.log(accessToken);

        const trackResponse = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing?market=TR",
          {
            headers: {
              Authorization: `Bearer BQDFN6HEi8JNDUDHWE2pPZ5nAyIvgZRN76YrB-hrS_hJ2wnA-vSDuScx8DOtllKMSPOk_aZ6PlATCe-7nEo9HsinxgiERTZQTvfaxwqWzAEQb0WeznUMJS7nlziERIM4lMthFp_WluaMHxWjyz6aX7keWf9o6b1LE7POrQ0tiALLj_aHRs6J0HJrYuqadmjhEHdP9NtFGWxQemx3YFUEKeYT5muEXPlxyg`,
            },
          }
        );

        setCurrentTrack(trackResponse.data);
        console.log(trackResponse.data);
      } catch (error) {
        console.error("Error fetching token or track", error);
      }
    });
  };

  return (
    <div>
      <button onClick={getSpoToken} className="bg-red-400 m-5 p-5 rounded-md">
        Get Spotify Access Token & Current Track
      </button>
    </div>
  );
}

export default Page;
