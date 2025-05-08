import React, { useState } from "react";
import ItemCard from "../global/ItemCard";
import ItemCardSkeleton from "../global/ui/ItemCardSkeleton";
import Aos from "aos";

const ExploreItems = ({ isLoading, explore, setValue, }) => {
  Aos.init()
  const [loadMore, setLoadMore] = useState(8);
  const handleLoadMore = () => {
    setLoadMore((prevCount) => prevCount + 4);
  };
  const handleFilter = (e) => {
      setValue(e.target.value)
    }
  return (
    <>
      <div>
        <select onChange={handleFilter} id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>


        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ItemCardSkeleton index={index}
       
              key={index} />
            ))
          : explore.length > 0
          ? explore
              .map((card) => <ItemCard
 
              key={card.id} card={card} />)
              .slice(0, loadMore)
          : null}
        {explore.length > loadMore && (
          <div className="col-md-12 text-center">
            <button
              onClick={handleLoadMore}
              id="loadmore"
              className="btn-main lead"
            >
              Load more
            </button>
          </div>
        )}

    </>
  );
};

export default ExploreItems;
