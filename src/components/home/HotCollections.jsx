import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { useKeenSlider } from "keen-slider/react";


const HotCollections = ({ cards }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
  });
  const [isMounted, setIsMounted] = useState(false);

  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
  

  useEffect(() => {
    setIsMounted(true);
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [instanceRef]);

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
          {isMounted && (
            <div ref={sliderRef} className="keen-slider">

              {cards && cards.length > 0
                ? cards.map((card) => (
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
    </section>
  );
};

export default HotCollections;
