import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import BannerAlbum from "../../components/BannerAlbum";
import SongList from "../../components/songsList";

export default function Songs() {
  const API = "https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api";
  let id = useParams().id;
  let song: any = useParams().song;
  const [album, setAlbum] = useState<any>({});
  const [songs, setSongs] = useState<Array<any>>([]);
  const [albumId, setAlbumId] = useState<Number>(0);
  const [timeSongs, setTimeSongs] = useState<String>("00:00");
  const [suggestion, setSuggestion] = useState<Array<any>>([]);

  const getAlbum = async (albumID: Number) => {
    const res = await axios.get(`${API}/artists/${id}/albums`);
    if (res.data && res.status === 200) {
      res.data.map((artist: { artist: Number; albums: any }) => {
        if (id && artist.artist === parseInt(id)) {
          artist.albums.map((album: any) => {
            if (album.id === albumID) {
              setAlbum(album);
            }
          });
        }
      });
    }
  };
  const getSongs = async () => {
    const res = await axios.get(`${API}/albums/${id}/songs`);
    if (res.data && res.status === 200) {
      let albumsArray = res.data;
      let albumRandom =
        albumsArray[Math.floor(Math.random() * albumsArray.length)].songs;
      setSuggestion(albumRandom);
      albumsArray.map((album: { album: Number; songs: Array<Object> }) => {
        if (album.album === parseInt(song)) {
          setSongs(album.songs);
          setAlbumId(album.album);
        }
      });
    }
  };
  const handlerTimeSongs = () => {
    let time = 0;
    songs.map((song: { duration_ms: string }) => {
      let duration = parseInt(song.duration_ms);
      time += duration;
    });
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    let timeTotal = `${minutes}:${seconds}`;
    setTimeSongs(timeTotal);
  };
  useEffect(() => {
    getSongs();
  }, []);
  useEffect(() => {
    getAlbum(albumId);
    handlerTimeSongs();
  }, [albumId]);

  return (
    <div className="containerSongs">
      <BannerAlbum timeTotalSongs={timeSongs} album={album} />
      <SongList songs={songs} suggestion={suggestion} />
    </div>
  );
}
