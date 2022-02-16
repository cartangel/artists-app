import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import AlbumsList from "../../components/AlbumsList";
import BannerArtist from "../../components/BannerArtist";

export default function Albums() {
  const API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";
  let id = useParams().id;
  const [albums, setAlbums] = useState<Array<Object>>([]);
  const [artist, setArtist] = useState<any>({});

  const getAlbums = async () => {
    const res = await axios.get(`${API}/artists/${id}/albums`);
    if (res.data && res.status === 200) {
      res.data.map((artist: { artist: Number; albums: any }) => {
        if (id && artist.artist === parseInt(id)) {
          setAlbums(artist.albums);
        }
      });
    }
  };
  const getArtist = async () => {
    const res = await axios.get(`${API}/artists/${id}`);
    if (res.data && res.status === 200) {
      setArtist(res.data);
    }
  };
  useEffect(() => {
    getArtist();
    getAlbums();
  }, []);
  return (
    <div className="containerAlbums">
      <BannerArtist artist={artist} />
      <AlbumsList albums={albums} />
    </div>
  );
}
