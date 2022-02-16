import "./style.css";
import { useNavigate } from "react-router-dom";
import PlayerSong from "../../components/PlayerSong";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [song, setSong] = useState<any>({});
  const [showPlayerSong, setShowPlayerSong] = useState(false);
  let navigate = useNavigate();
  const navigatePageArtists = () => {
    navigate("/artists");
  };
  const API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";

  const randomSong = async () => {
    const res = await axios.get(`${API}/albums/1/songs`);
    if (res.data && res.status === 200) {
      let albumsArray = res.data;
      let albumRandom =
        albumsArray[Math.floor(Math.random() * albumsArray.length)].songs;
      let songRandom =
        albumRandom[Math.floor(Math.random() * albumRandom.length)];
      setSong(songRandom);
      setShowPlayerSong(true);
    }
  };

  return (
    <div className="containerHome">
      <h1 className="titleHome">¡Bienvenido!</h1>
      <button className="btnHome" onClick={navigatePageArtists}>
        Descubrir Artistas
      </button>

      <button className="btnHome" onClick={randomSong}>
        Cancion Random
      </button>
      {showPlayerSong ? <PlayerSong song={song} /> : ""}
    </div>
  );
}
