import React from 'react'
import AuthorImage from "../../../images/author_thumbnail.jpg";
import nftImage from "../../../images/nftImage.jpg";


const HotCollectionsSkeleton = () => {
  return (
    <>
         <div className="keen-slider__slide">
                                <div className="nft_coll">
                                  <div className="nft_wrap">
                                 <div className="img-fluid-skeleton"></div>
                                  </div>
                                  <div className="nft_coll_pp">
                                    <div className="lazy pp-coll-skeleton">
                                      </div>
                                    <i className="fa fa-check"></i>
                                  </div>
                                  <div className="nft_coll_info">
                                      <h4 className='skeleton-text'>Blueberries</h4>
                                    <span className='skeleton-text skeleton-text-fix' >ERC-146</span>
                                  </div>
                                </div>
                              </div>
    </>
  )
}

export default HotCollectionsSkeleton