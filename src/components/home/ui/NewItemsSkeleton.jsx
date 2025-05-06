import React from 'react'
import AuthorImage from "../../../images/author_thumbnail.jpg";
import nftImage from "../../../images/nftImage.jpg";
const NewItemsSkeleton = () => {
  return (
    <>
    <div
            className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
          >
            <div className="nft__item">
              <div className="author_list_pp">
              <div className="lazy pp-coll-skeleton"></div>
                  <i className="fa fa-check"></i>
              </div>
              <div className="de_countdown skeleton-text">5h 30m 43s</div>

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
                <figure className="skeleton__img--wrapper">
                    <div className="img-fluid-skeleton-square"></div>
                </figure>
              </div>
              <div className="nft__item_info-skeleton">
                  <h4 className='skeleton-text' >Random Shenangians</h4>
                <div className="nft__item_price skeleton">0 ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default NewItemsSkeleton