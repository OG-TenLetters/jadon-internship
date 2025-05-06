import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import HotCollectionsSkeleton from "./ui/HotCollectionsSkeleton";

const HotCollections = ({ hotCollectionsCards, isLoading }) => {
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
          perView: 3,
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
  }, [instanceRef, hotCollectionsCards, isLoading]);

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
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
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
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <HotCollectionsSkeleton key={index} />
                    ))
                  : hotCollectionsCards && hotCollectionsCards.length > 0
                  ? hotCollectionsCards.map((card) => (
                      <div className="keen-slider__slide" key={card.id}>
                        <div className="nft_coll">
                          <div className="nft_wrap">
                            <Link to="/item-details">
                              <img
                                src={card.nftImage}
                                className="lazy img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="nft_coll_pp">
                            <Link to="/author">
                              <img
                                className="lazy pp-coll"
                                src={card.authorImage}
                                alt=""
                              />
                            </Link>
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="nft_coll_info">
                            <Link to="/explore">
                              <h4>{card.title}</h4>
                            </Link>
                            <span>ERC-{card.code}</span>
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

export default HotCollections;
