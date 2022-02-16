import "./style.css";
import starIcon from "../../assets/imagenes/star.png";

interface Props {
  artist: {
    image: any;
    name: String;
    popularity: String;
  };
}

export default function BannerArtist(props: Props) {
  return (
    <section className="bannerArtist">
      <img className="bannerImage" src={props.artist.image} alt="" />
      <span className="bannerInfo">
        <h1 className="bannerName">{props.artist.name}</h1>
        <img src={starIcon} width="10px" height="10px" alt="" />
        <h3 className="bannerPopularity">{props.artist.popularity}</h3>
      </span>
    </section>
  );
}
