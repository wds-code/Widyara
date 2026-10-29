import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Lobby from "./pages/Lobby";
import KamarPage from "./pages/KamarPage";
import { DAFTAR_KAMAR } from "./lib/kamar";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Lobby />} />
        {/* Satu route untuk tiap kamar: /otomotif, /fashion, /gadget */}
        {DAFTAR_KAMAR.map((k) => (
          <Route key={k.slug} path={`/${k.slug}`} element={<KamarPage kamar={k} />} />
        ))}
        {/* Alamat yang tidak dikenal balik ke lobby */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
