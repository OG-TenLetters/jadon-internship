import React from "react";

const TopSellersSkeleton = () => {
  return (
    <>
      <li>
        <div className="author_list_pp">
          <div className="pp-coll-skeleton"></div>
          <i className="fa fa-check"></i>
        </div>
        <div className="author_list_info-skeleton">
          <div className="skeleton-text" >Popalopsa</div>
          <br />
          <div className="skeleton-text">0 ETH</div>
        </div>
      </li>
    </>
  );
};

export default TopSellersSkeleton;
