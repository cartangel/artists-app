import { useState } from "react";
import PlayerSong from "../PlayerSong";
import "./style.css";

interface Props {
  songs: Array<any>;
  suggestion: Array<any>;
}
export default function SongList(props: Props) {
  const [currentSong, setCurrentSong] = useState<any>({});
  const [showPlayer, setShowPlayer] = useState(false);

  const handlerTimeSong = (time: any) => {
    parseInt(time);
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    let timeTotal = `${minutes}:${seconds}`;
    return timeTotal;
  };
  return (
    <div className="containerSongsList">
      <div>
        <h2 className="titleSongsList">Canciones</h2>
        <ul className="songList">
          {props.songs.map((song, i) => {
            return (
              <li
                onClick={() => {
                  setCurrentSong(song);
                  setShowPlayer(true);
                }}
                className="itemSongList"
              >
                <span className="itemSongListInfo">
                  <h4 className="itemSongListIndex">{i + 1}</h4>
                  <h3 className="itemSongListName">{song.name}</h3>
                </span>
                <h4 className="itemSongListTime">
                  {handlerTimeSong(song.duration_ms)}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
      {props.suggestion.length ? (
        <div>
          <h2 className="titleSongsList">Sugerencias</h2>
          <ul className="songList">
            {props.suggestion.map((song, i) => {
              return (
                <li
                  onClick={() => {
                    setShowPlayer(true);
                    setCurrentSong(song);
                  }}
                  className="itemSongList"
                >
                  <span className="itemSongListInfo">
                    <h4 className="itemSongListIndex">{i + 1}</h4>
                    <h3 className="itemSongListName">{song.name}</h3>
                  </span>

                  <h4 className="itemSongListTime">
                    {handlerTimeSong(song.duration_ms)}
                  </h4>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {showPlayer ? <PlayerSong song={currentSong} /> : ""}
    </div>
  );
}
