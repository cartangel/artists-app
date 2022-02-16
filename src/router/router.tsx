import { Routes, Route, HashRouter } from "react-router-dom";
import LayoutMain from "../Layouts/LayoutMain";
import Albums from "../containers/Albums";
import Songs from "../containers/Songs";
import Home from "../containers/Home/index";
import Artists from "../containers/Artists";
import NotFound from "../containers/NotFound";
import PlaySongs from "../containers/PlaySongs";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route
            path="/artists/:id/albums/:song/playSong"
            element={<PlaySongs />}
          />
          <Route path="/artists/:id/albums/:song" element={<Songs />} />
          <Route path="/artists/:id/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
