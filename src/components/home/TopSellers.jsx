import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import TopSellersSkeleton from "./ui/TopSellersSkeleton";

const TopSellers = ({ topSellers, isLoading }) => {
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {isLoading
                ? 
                  (Array.from({length: 12}).map((_, index) => (
                    <TopSellersSkeleton key={index} />
                  ))) 
                
                : 
                (topSellers.length > 0
                ? topSellers.map((bubble) => ( 
                    <li key={bubble.id}>
                      <div className="author_list_pp">
                        <Link to={`/author/${bubble.authorId}`}>
                          <img
                            className="lazy pp-author"
                            src={bubble.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to={`/author/${bubble.authorId}`}>
                          {bubble.authorName}
                        </Link>
                        <span>{bubble.price} ETH</span>
                      </div>
                    </li>
                  ))
                : null)
                }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
