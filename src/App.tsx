import Categories from "./Routes/Categories";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Channels from "./Routes/Channels";
import Channel from "./Routes/Channel";
import Home from "./Routes/Home";
import YouTube from "./Routes/YouTube";

function App() {
  document.title = "AYTWiki";
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/:id" element={<Channel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
