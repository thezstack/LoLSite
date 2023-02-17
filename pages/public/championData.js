import { useState, useEffect } from "react";
import getChampionRotations from "../api/getChampionRotations";

export default function ChampionRotations() {
  const [champions, setChampions] = useState(null);

  useEffect(() => {
    async function fetchChampions() {
      const data = await getChampionRotations();
      setChampions(data);
    }

    fetchChampions();
  }, []);

  if (!champions) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Champion Rotations</h1>
      <ul>
        {champions.freeChampionIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
