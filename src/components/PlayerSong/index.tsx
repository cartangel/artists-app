import "./style.css";
import play from "../../assets/imagenes/icon-play.png";
interface Props {
  song: {
    image: any;
    name: string;
    duration_ms: string;
    spotify_url: any;
  };
}

export default function PlayerSong(props: Props) {
  const handlerTimeSong = (time: any) => {
    let timeTotal = "sin especificar";
    if (time) {
      parseInt(time);
      let minutes = Math.floor(time / 60000);
      let seconds = ((time % 60000) / 1000).toFixed(0);
      timeTotal = `${minutes}:${seconds}`;
    }

    return timeTotal;
  };
  return (
    <div className="containerPlayerSong">
      <div className="playerSongInfo">
        <h3>{props.song.name}</h3>
        <h4>
          <strong>Duracion:</strong> {handlerTimeSong(props.song.duration_ms)}
        </h4>
      </div>
      <a href={props.song.spotify_url}>
        <img title="Reproducir" className="Playerbtn" src={play} alt="play" />
      </a>
    </div>
  );
}
