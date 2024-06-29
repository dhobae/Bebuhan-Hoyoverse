import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Daftar from "./pages/Daftar.jsx";
import ListAnggota from "./pages/ListAnggota.jsx";
import Test from "./pages/test.jsx";
import NotFound from "./pages/404.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/list-anggota" element={<ListAnggota />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} /> {/* Add NotFound route */}
    </Routes>
  );
};

export default AppRoutes;
