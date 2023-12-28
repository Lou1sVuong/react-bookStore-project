import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import { blogsDatas } from "../../data/blogsData";
import {
  arrivalsData,
  booksFeatured,
  imageSources,
  reviews,
} from "../../data/product";
import "./LandingPage.css";
function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const featuredSwiper = new Swiper(".featured-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });

    const arrivalsSwiper = new Swiper(".arrivals-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const reviewsSwiper = new Swiper(".reviews-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const blogsSwiper = new Swiper(".blogs-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const booksSwiper = new Swiper(".books-slider", {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div>
      {/* home */}
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="#featured" className="btn">
              shop now
            </a>
          </div>
          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              {imageSources.map((imageSrc, index) => (
                <a href="#" className="swiper-slide" key={index}>
                  <img src={imageSrc} alt="" />
                </a>
              ))}
            </div>
            <img
              src="https://i.ibb.co/16D90NB/stand.png"
              className="stand"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Icon-container */}
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast" />
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-lock" />
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-redo-alt" />
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-headset" />
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </section>
      {/* featured */}
      <section className="featured" id="featured">
        <h1 className="heading">
          <span>featured books</span>
        </h1>
        <div className="swiper featured-slider">
          <div className="swiper-wrapper">
            {booksFeatured.map((book, index) => (
              <div key={index} className="swiper-slide box">
                <div className="icons">
                  <a href="#" className="fas fa-search" />
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-eye" />
                </div>
                <div className="image">
                  <Link to={`/products/${book.id}`}>
                    <img src={book.imageSrc} alt={`Book ${index + 1}`} />
                  </Link>
                </div>
                <div className="content">
                  <h3>{book.name}</h3>
                  <div className="price">
                    ${parseFloat(book.price).toFixed(2)}{" "}
                    <span>${parseFloat(book.delPrice).toFixed(2)}</span>
                  </div>
                  <Link to={`/products/${book.id}`}>
                    <a href="#" className="btn">
                      View Detail
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>
      {/* newletter */}
      <section className="newsletter">
        <form action>
          <h3>subscribe for latest updates</h3>
          <input
            type="email"
            name
            placeholder="enter your email"
            id
            className="box"
          />
          <a href="#" className="btn">
            subscribe
          </a>
        </form>
      </section>
      {/* newarrivals */}
      <section className="arrivals" id="arrivals">
        <h1 className="heading">
          <span>New Arrivals</span>
        </h1>
        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper">
            {arrivalsData.slice(0, 6).map((item, index) => (
              <Link to={`/products/${item.id}`} className="swiper-slide box">
                <a key={index} href="#" className="swiper-slide boxx">
                  <div className="image">
                    <img src={item.imageSrc} alt={`Book ${index + 1}`} />
                  </div>
                  <div className="content">
                    <h3>{item.name}</h3>
                    <div className="price">
                      ${parseFloat(item.price).toFixed(2)}{" "}
                      <span>${parseFloat(item.delPrice).toFixed(2)}</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper">
            {arrivalsData.slice(7).map((item, index) => (
              <Link to={`/products/${item.id}`} className="swiper-slide box">
                <a key={index} href="#" className="swiper-slide boxx">
                  <div className="image">
                    <img src={item.imageSrc} alt={`Book ${index + 1}`} />
                  </div>
                  <div className="content">
                    <h3>{item.name}</h3>
                    <div className="price">
                      ${parseFloat(item.price).toFixed(2)}{" "}
                      <span>${parseFloat(item.delPrice).toFixed(2)}</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="more-arrials">
          <Link to={"/AllProducts"} className="btn">
            <p>more...</p>
          </Link>
        </div>
      </section>
      {/* deals */}
      <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <a href="#featured" className="btn">
            shop now
          </a>
        </div>
        <div className="image">
          <img src="https://i.ibb.co/7tJC5v5/deal-img.png" alt="" />
        </div>
      </section>
      {/* review */}
      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span>Client's reviews</span>
        </h1>
        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            {reviews.map((review, index) => (
              <div key={index} className="swiper-slide box">
                <img src={review.image} alt="" />
                <h3>{review.name}</h3>
                <p>{review.content}</p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          <span>Our Blogs</span>
        </h1>
        <div className="swiper blogs-slider">
          <div className="swiper-wrapper">
            {blogsDatas.map((blog, index) => (
              <div key={index} className="swiper-slide box">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="content">
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <Link to={`/Blog/${blog.id}`}>
                    <a href="" className="btn">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script src="./file_font-js-css/swiper-bundle.min.js"></script>
    </div>
  );
}

export default LandingPage;
