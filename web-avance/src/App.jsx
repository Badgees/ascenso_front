import { Route, Routes } from "react-router-dom";

import Accueil from "./screens/Accueil";
import Login from "./screens/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
