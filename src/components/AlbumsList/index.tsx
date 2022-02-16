import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { Key } from "react";
import play from "../../assets/imagenes/icon-play.png";
interface Props {
  albums: Array<Object>;
}

export default function AlbumsList(props: Props) {
  let navigate = useNavigate();
  let id = useParams().id;
  const viewAlbum = (song: Number) => {
    navigate(`/artists/${id}/albums/${song}`);
  };

  const playSong = (song: Number) => {
    navigate(`/artists/${id}/albums/${song}/playSong`);
  };

  return (
    <div className="containerAlbumsList">
      <h2 className="titleAlbums">Albumes</h2>
      <div className="albumsList">
        {props.albums.map((album: any, i: Key) => {
          return (
            <div className="album" key={i}>
              <img
                onClick={() => {
                  viewAlbum(album.id);
                }}
                className="albumImage"
                src={album.image}
                alt="imagen"
              />
              <div
                onClick={() => {
                  viewAlbum(album.id);
                }}
                className="albumInfo"
              >
                <h3>{album.name}</h3>
                <h4>
                  <strong>canciones:</strong> {album.total_tracks}
                </h4>
              </div>
              <img
                title="Reproducir"
                onClick={() => {
                  playSong(album.id);
                }}
                className="Albumbtn"
                src={play}
                alt="play"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
