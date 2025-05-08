import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthorSkeleton from "../components/author/ui/AuthorSkeleton";
import Aos from "aos";

const Author = ({ isLoading, setIsLoading }) => {
  Aos.init();
  const [authorData, setAuthorData] = useState([]);
  const { id } = useParams();
  const [follow, setFollow] = useState(false);

  const toggleFollow = () => {
    if (follow === follow) {
      setFollow(!follow);
    }
  };

  const fetchAuthor = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setAuthorData(data);
    setIsLoading(false);
  };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    fetchAuthor();
  }, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {isLoading ? (
          <AuthorSkeleton />
        ) : (
          <>
            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              data-bgimage="url(images/author_banner.jpg) top"
              style={{ background: `url(${AuthorBanner}) top` }}
              data-aos="fade-in"
              data-aos-duration="300"
            ></section>
            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img
                            data-aos="fade-in"
                            data-aos-duration="300"
                            src={authorData.authorImage}
                            alt=""
                          />

                          <i
                            data-aos="fade-in"
                            data-aos-duration="300"
                            data-aos-delay="300"
                            className="fa fa-check"
                          ></i>
                          <div
                            data-aos="fade-in"
                            data-aos-duration="300"
                            data-aos-delay="150"
                            className="profile_name"
                          >
                            <h4>
                              {authorData.authorName}
                              <span className="profile_username">
                                @{authorData.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {authorData.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration="300"
                        className="profile_follow de-flex"
                      >
                        <div className="de-flex-col">
                          {follow ? (
                            <>
                              <div className="profile_follower">
                                {authorData.followers + 1} followers
                              </div>

                              <button
                                onClick={toggleFollow}
                                className="btn-main"
                              >
                                Unfollow
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="profile_follower">
                                {authorData.followers} followers
                              </div>

                              <button
                                onClick={toggleFollow}
                                className="btn-main"
                              >
                                Follow
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems
                        profileImg={authorData.authorImage}
                        nftCollection={authorData.nftCollection}
                        isLoading={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Author;
