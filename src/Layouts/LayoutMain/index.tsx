import { Outlet } from "react-router-dom";
import "./style.css";
export default function LayoutMain() {
  return (
    <div className="containerLayout">
      <header className="headerLayout">
        <h1 className="headerTitle">Prueba</h1>
        <h1 className="headerTitle">LISTA DE ARTISTAS</h1>
      </header>
      <main className="containerMain">
        <Outlet />
      </main>
    </div>
  );
}
