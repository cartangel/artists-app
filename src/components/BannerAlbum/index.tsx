import "./style.css";

interface Props {
  album: {
    image: any;
    name: String;
    popularity: String;
    total_tracks: Number;
  };
  timeTotalSongs: String;
}

export default function BannerAlbum(props: Props) {
  return (
    <section className="bannerAlbum">
      <img className="bannerImageAlbum" src={props.album.image} alt="" />
      <span className="bannerInfoAlbum">
        <h1 className="bannerNameAlbum">{props.album.name}</h1>
        <h3 className="bannerLabelAlbum">Album {props.album.name}</h3>
        <h3 className="bannerNumberSong">
          {props.album.total_tracks} Canciones {props.timeTotalSongs}
        </h3>
      </span>
    </section>
  );
}
