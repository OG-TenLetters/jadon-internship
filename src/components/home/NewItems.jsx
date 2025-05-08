import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountDown from "./ui/CountDown";
import { useKeenSlider } from "keen-slider/react";
import ItemCardSkeleton from "../global/ui/ItemCardSkeleton";
import ItemCard from "../global/ItemCard";

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
          <div
            data-aos="fade-in"
            data-aos-duration="1200"
            className="navigation__wrapper"
          >
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
                      <div key={index} className="keen-slider__slide">
                        <ItemCardSkeleton />
                      </div>
                    ))
                  : newItemsCards.length > 0
                  ? newItemsCards.map((card) => (
                      <div key={card.id} className="keen-slider__slide">
                        <ItemCard card={card} />
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
