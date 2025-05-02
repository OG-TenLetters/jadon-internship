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


const HotCollections = () => {
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

          {new Array(4).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={AuthorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
