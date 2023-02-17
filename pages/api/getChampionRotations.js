import axios from "axios";

export default async function getChampionRotations() {
  const apiKey = process.env.RIOT_API_KEY; // your Riot API key

  try {
    const response = await axios.get(
      `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-739cf861-e2a3-4344-b347-ff2985f3ad04`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
