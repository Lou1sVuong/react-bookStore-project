import React, { useEffect } from 'react'
import { tagbooks } from '../../data/product';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import './TagBook.css'
function TagBooks() {
    useEffect(() => {
        const tagsSwiper = new Swiper(".tags-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 5500,
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

    }, []);

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div>
            {/* you may aslo like */}
            <div className="tags" id="tags">
                <h1 className="heading-tags">
                    <span>YOU MAY ALSO LIKE</span>
                </h1>
                <div className="swiper tags-slider">
                    <div className="swiper-wrapper">
                        {tagbooks.map((book, index) => (
                            <div key={index} className="swiper-slide box">
                                <div className="icons">
                                    <a href="#" className="fas fa-search" />
                                    <a href="#" className="fas fa-heart" />
                                    <a href="#" className="fas fa-eye" />
                                </div>
                                <div className="image">
                                    <Link to={`/products/${book.id}`} onClick={handleClick}>
                                        <img src={book.imageSrc} alt={`Book ${index + 1}`} />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3>{book.name}</h3>
                                    <div className="price">${parseFloat(book.price).toFixed(2)} <span>${parseFloat(book.delPrice).toFixed(2)}</span></div>
                                    {/* <a href="#" className="btn">Add to Cart</a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                </div>
            </div>
        </div>
    )
}

export default TagBooks
