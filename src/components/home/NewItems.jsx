import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountDown from "./ui/CountDown";
import NewItemsSkeleton from "./ui/NewItemsSkeleton";
import { useKeenSlider } from "keen-slider/react";

const NewItems = ({ newItemsCards, isLoading }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,

    breakpoints: {
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
      "(min-width: 1024px) and (max-width: 1199px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 580px) and (max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
    },
    slides: { perView: 1 },
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [instanceRef, newItemsCards, isLoading]);

  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="navigation__wrapper">
            <button onClick={handlePrev} className="keen__nav--left">
              {"<"}
            </button>
            <button onClick={handleNext} className="keen__nav--right">
              {">"}
            </button>
            {isMounted && (
              <div ref={sliderRef} className="keen-slider">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, index) => (
                      <NewItemsSkeleton key={index} />
                    ))
                  : newItemsCards.length > 0
                  ? newItemsCards.map((card) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6 col-xs-12 keen-slider__slide"
                        key={card.id}
                      >
                        <div className="nft__item">
                          <div className="author_list_pp">
                            <Link
                              to="/author"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Creator: Monica Lucas"
                            >
                              <img
                                className="lazy"
                                src={card.authorImage}
                                alt=""
                              />
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

                            <Link to={`/item-details/${card.authorId}`}>
                              <img
                                src={card.nftImage}
                                className="lazy nft__item_preview"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="nft__item_info">
                            <Link to={`/item-details/${card.authorId}`}>
                              <h4>{card.title}</h4>
                            </Link>
                            <div className="nft__item_price">
                              {card.price} ETH
                            </div>
                            <div className="nft__item_like">
                              <i className="fa fa-heart"></i>
                              <span>{card.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
