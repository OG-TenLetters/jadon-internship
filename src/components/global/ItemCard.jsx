import React from "react";
import { Link } from "react-router-dom";
import CountDown from "../home/ui/CountDown";
import Aos from "aos";

const ItemCard = ({ index, card }) => {
  Aos.init();
  return (
    <div
      
      data-aos="fade-in"
      data-aos-duration="300"
      data-aos-delay={index * 50}
      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
      style={{ display: "block", backgroundSize: "cover" }}
    >
      <div className="nft__item">
        <div className="author_list_pp">
          <Link to={`/author/${card.authorId}`} data-bs-toggle="tooltip" data-bs-placement="top">
            <img className="lazy" src={card.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <div className="de_countdown">
          <CountDown expiryDate={card.expiryDate} />
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
          <Link to={`/item-details/${card.nftId}`}>
            <img
              src={card.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to={`/item-details/${card.nftId}`}>
            <h4>{card.title}</h4>
          </Link>
          <div className="nft__item_price">{card.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{card.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
