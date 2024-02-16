import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Register from "./components/Login/Register";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* registration routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*Home page*/ }
          <Route path="/" element={<Home />} />

          {/* Shop Section */}
          <Route path="/shop" element={<Shop />} />

          {/* cart section */}
          <Route path="/cart" element={<Cart />} />

          {/* profile Section */}
          <Route path="/profile" element={<Profile />} />

          {/* Default Route */}
          <Route path="*" element={<NotFound />}/>         
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 