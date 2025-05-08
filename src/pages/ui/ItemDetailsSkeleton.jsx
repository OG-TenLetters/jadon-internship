import Aos from "aos";
import React from "react";

const ItemDetailsSkeleton = () => {
  Aos.init()
  return (
    <>
      <div
      data-aos="fade-in"
      data-aos-duration="50"
      className="row">
        <div className="col-md-6 text-center">
          <div className="img-fluid-skeleton-square"></div>
        </div>
        <div className="col-md-6">
          <div className="item_info">
            <h2 className="skeleton-text2">Random Title</h2>

            <div className="item_info_counts item-info_counts-skeleton">
              <div className="item_info_views">400</div>
              <div className="item_info_like">40</div>
            </div>
            <p className="skeleton-text">
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <div className="d-flex flex-row">
              <div className="mr40">
                <h6 className="skeleton-text2">Owner</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <div className="pp-coll-skeleton2"></div>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="author_list_info">
                    <div className="skeleton-text">Random Name</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="de_tab tab_simple">
              <div className="de_tab_content">
                <h6 className="skeleton-text2">Creator</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <div className="pp-coll-skeleton2"></div>
                  </div>
                  <div className="author_list_info">
                    <div className="skeleton-text">Random Name</div>
                  </div>
                </div>
              </div>
              <div className="spacer-40"></div>
              <h6 className="skeleton-text2">Price</h6>
              <div className="nft-item-price-skeleton">
                <div className="eth__img--skeleton"></div>
                <div className="skeleton-text"> 0.21 ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsSkeleton;
