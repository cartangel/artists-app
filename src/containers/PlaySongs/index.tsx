import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import BannerArtist from "../../components/BannerArtist";
import SongList from "../../components/songsList";

export default function PlaySongs() {
  const API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";
  let id = useParams().id;
  let song = useParams().song;
  const [songs, setSongs] = useState<any>([]);
  const [artist, setArtist] = useState<any>({});

  const getArtist = async () => {
    const res = await axios.get(`${API}/artists/${id}`);
    if (res.data && res.status === 200) {
      setArtist(res.data);
    }
  };
  const getSongs = async () => {
    const res = await axios.get(`${API}/albums/${id}/songs`);
    if (res.data && res.status === 200) {
      res.data.map((album: { album: Number; songs: Array<Object> }) => {
        if (song && album.album === parseInt(song)) {
          setSongs(album.songs);
        }
      });
    }
  };
  useEffect(() => {
    getArtist();
    getSongs();
  }, []);

  return (
    <div className="containerPlaySong">
      <BannerArtist artist={artist} />
      <SongList songs={songs || []} suggestion={[]} />
    </div>
  );
}
