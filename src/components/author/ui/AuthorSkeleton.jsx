import React from 'react'
import AuthorCardsSkeleton from './AuthorCardsSkeleton'

const AuthorSkeleton = () => {
  return (
    
    <>
    <div className="profile_banner-skeleton"></div>
    <section aria-label="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d_profile de-flex">
              <div className="de-flex-col">
                <div className="profile_avatar">
                  <div className="author-profile__img"></div>
                  <i className="fa fa-check"></i>
                  <div className="profile_name-skeleton">
                    <h4 className="profile-details-skeleton">
                      <div className="skeleton-text">Random Rando</div>
                      <br />
                      <div className="skeleton-text">@Random</div>
                      <br />
                      <div className="skeleton-text">
                        Sesquipadalianism
                        <button id="btn_copy" className="skeleton-text" title="Copy Text">
                          Copy
                        </button>
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="profile_follow de-flex">
                <div className="de-flex-col">
                  <div className="profile_follower skeleton-text">
                    200 followers
                  </div>

                  <button className="btn-main-skeleton">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="de_tab tab_simple">
              <div className="de_tab_content">
                <div className="tab-1">
                  <div className="row">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <AuthorCardsSkeleton key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>

  )
}

export default AuthorSkeleton