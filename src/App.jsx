import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hotCollectionsCards, setHotCollectionsCards] = useState([]);
  const [newItemsCards, setNewItemsCards] = useState([]);
  const [topSellers, setTopSellers] = useState([]);

  const fetchHotCollectionsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    const apiData = data;
    setHotCollectionsCards(apiData);
    setIsLoading(false);
  };

  const fetchNewItemsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
    );
    const NewItemsData = data;
    setNewItemsCards(NewItemsData);
    setIsLoading(false);
  };

  const fetchTopSellers = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers`
    );
    const topSellersData = data;
    setTopSellers(topSellersData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewItemsData();
  }, []);
  useEffect(() => {
    fetchHotCollectionsData();
  }, []);
  useEffect(() => {
    fetchTopSellers();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoading={isLoading}
              hotCollectionsCards={hotCollectionsCards}
              newItemsCards={newItemsCards}
              topSellers={topSellers}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <Explore isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route path="/author/:authorId" element={<Author isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route
          path="/item-details/:authorId"
          element={
            <ItemDetails newItemsCards={newItemsCards} isLoading={isLoading} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
