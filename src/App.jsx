import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/index" element={<PostIndex />} />
          <Route path="/post/new" element={<PostNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
