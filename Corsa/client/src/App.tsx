import ServersPage from "./pages/ServersPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";

const App = () => {
  return (
    <Routes>
      <Route path="/servers" element={<ServersPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
};

export default App;
