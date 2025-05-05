import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hotCollectionsCards, setHotCollectionsCards] = useState([]);
  const [newItemsCards, setNewItemsCards] = useState([]);

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

  useEffect(() => {
    fetchNewItemsData();
  }, []);

  useEffect(() => {
    fetchHotCollectionsData();
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
            />
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author" element={<Author />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
