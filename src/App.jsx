import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [topSellers, setTopSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTopSellers = async () => {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers`
    );
    const topSellersData = data;
    setTopSellers(topSellersData);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTopSellers();
    setIsLoading(false);
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home topSellers={topSellers} isLoading={isLoading} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author:authorId" element={<Author />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
