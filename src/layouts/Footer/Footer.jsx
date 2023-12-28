import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="section-footer">
                    <div className="box-container">
                        <div className="box">
                            <h3>our locations</h3>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> VietNam </a>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> India </a>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> USA </a>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> Russia </a>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> France </a>
                            <a href="#"> <i className="fas fa-map-marker-alt" /> Japan </a>
                        </div>
                        <div className="box">
                            <h3>quick links</h3>
                            <a href="#"> <i className="fas fa-arrow-right" /> home </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> featured </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> arrivals </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> reviews </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> blogs </a>
                        </div>
                        <div className="box">
                            <h3>extra links</h3>
                            <a href="#"> <i className="fas fa-arrow-right" /> account info </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> ordered items </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> privacy policy </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> payment method </a>
                            <a href="#"> <i className="fas fa-arrow-right" /> our serivces </a>
                        </div>
                        <div className="box">
                            <h3>contact info</h3>
                            <a href="#"> <i className="fas fa-phone" /> +84 346 524 965 </a>
                            <a href="#"> <i className="fas fa-phone" /> +84 346 524 964 </a>
                            <a href="#"> <i className="fas fa-envelope" /> BookStore@gmail.com </a>
                            <img src="https://i.ibb.co/kHTDcV1/worldmap.png" className="map" alt="" />
                        </div>
                    </div>
                    <div className="share">
                        <a href="#" target="_blank" className="fab fa-facebook-f" />
                        <a href="#" className="fab fa-twitter" />
                        <a href="#" target="_blank" className="fab fa-instagram" />
                        <a href="#" className="fab fa-linkedin" />
                        <a href="#" className="fab fa-pinterest" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
