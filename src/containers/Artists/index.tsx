import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Artists() {
  const API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";
  let navigate = useNavigate();
  const [artists, setArtists] = useState([]);

  const getArtists = async () => {
    const res = await axios.get(`${API}/artists`);
    if (res.data && res.status === 200) {
      setArtists(res.data);
    }
  };
  const navigateAlbums = (id: Number) => {
    navigate(`/artists/${id}/albums`);
  };
  useEffect(() => {
    getArtists();
  }, []);
  return (
    <div className="containerCards">
      {artists?.map((artist: { image: any; name: String; id: Number }, i) => {
        return (
          <div
            onClick={() => {
              navigateAlbums(artist.id);
            }}
            key={i}
            className="containerCard"
          >
            <img className="cardImage" src={artist.image} alt="" />
            <h2 className="cardName">{artist.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
