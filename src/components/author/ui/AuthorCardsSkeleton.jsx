import React from "react";

const AuthorCardsSkeleton = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="nft__item">
          <div className="author_list_pp">
             <div className="pp-coll-skeleton"></div>
              <i className="fa fa-check"></i>
          </div>
          <div className="nft__item_wrap">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="skeleton__img--wrapper">
                <div className="img-fluid-skeleton-square"></div>
            </div>
          </div>
          <div className="nft__item_info">
            <h4 className="skeleton-text">Random Title</h4>
            <div className="nft__item_price"> 0 ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorCardsSkeleton;
