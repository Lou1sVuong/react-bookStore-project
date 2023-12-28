import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CounterBTn from '../../components/CounterBtn/CounterBTn';
import TagBooks from '../../components/TagBooks/TagBooks';
import { arrivalsData, booksFeatured } from '../../data/product';
import './DetailPage.css';

import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../redux/slice/cartSlice';


function DetailPage() {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.querySelectorAll('.button-addtocard').forEach(button => {
            button.addEventListener('click', e => {
                if (!button.classList.contains('loading')) {
                    button.classList.add('loading');
                    setTimeout(() => button.classList.remove('loading'), 3700);
                }
                e.preventDefault();
            });
        });
    }, []);

    const { detailId } = useParams()
    console.log(detailId)
    const product = arrivalsData && booksFeatured.find(prod => prod.id == detailId);
    const cart = useSelector((state) => state.cart.carts)
    const dispatch = useDispatch()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleAddtoCart = () => {
        const cartItem = product; // Create an object with product and quantity
        dispatch(addtoCart(cartItem));
      };

    return (
        <div>

            <section>
                {/* detail products */}
                <div className="Product" id="Product">

                    <div className="container">
                        <div className="container-2">
                            <Slider {...settings}>

                                <div >
                                    <img className='containerImg' src={product.imageSrc} alt={`Product 1`} />
                                </div>
                                <div >
                                    <img className='containerImg' src={product.imageSrc} alt={`Product 2`} />
                                </div>
                                <div >
                                    <img className='containerImg' src={product.imageSrc} alt={`Product 3`} />
                                </div>
                                <div >
                                    <img className='containerImg' src={product.imageSrc} alt={`Product 4`} />
                                </div>
                                <div >
                                    <img className='containerImg' src={product.imageSrc} alt={`Product 5`} />
                                </div>
                                {/* Add more slides as needed */}
                            </Slider>
                        </div>
                        <div className="favorite">
                            <div className="share">
                                <p>Share :</p>
                                <i className="fa-brands fa-facebook-messenger" style={{ color: 'rgb(3 132 255)' }} />
                                <i className="fa-brands fa-facebook" style={{ color: 'rgb(59 89 153)' }} />
                                <i className="fa-brands fa-pinterest" style={{ color: 'rgb(222 2 23)' }} />
                                <i className="fa-brands fa-twitter" style={{ color: 'rgb(16 194 255)' }} />
                            </div>
                            <div>
                                <p>|</p>
                            </div>
                            <div className="favorive">
                                <i className="fa-regular fa-heart" style={{ color: 'rgb(255, 32, 16)', fontSize: '20px' }} />
                                <p>Favorite</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-3">
                        <div className="title">{product.name}</div>
                        <div className="if-1">
                            <div className="star-rate">
                                <p>5.0 </p>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <p>|</p>
                            <div className="rates">
                                <p><u>152,8k</u> Rating</p>
                            </div>
                            <p>|</p>
                            <div className="sold">
                                <p>633,2k Sold</p>
                            </div>
                        </div>
                        <div className="price">
                            <p><del className="delPrice">$ {parseFloat(product.delPrice).toFixed(2)}</del></p>
                            <p className="Price">  $ {parseFloat(product.price).toFixed(2)}</p>
                        </div>
                        <div className="shopVouchers">
                            <p className="text">Shop Vouchers</p>
                            <div className="voucher">
                                <div>
                                    <p>7% OFF</p>
                                </div>
                            </div>
                            <div className="voucher">
                                <div>
                                    <p>9% OFF</p>
                                </div>
                            </div>
                            <div className="voucher">
                                <div>
                                    <p>12% OFF</p>
                                </div>
                            </div>
                        </div>
                        <div className="addOn">
                            <p className="text">Add-On</p>
                            <div className="voucher">
                                <p>Free Gift</p>
                            </div>
                        </div>
                        <div className="delivery">
                            <p className="text">Delivery</p>
                            <i className="fa-solid fa-truck-fast" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="quantity">
                            <p className="text">Quantity</p>
                            <CounterBTn></CounterBTn>
                            <p>323 pieces available</p>
                        </div>
                        <div className="btn-product">
                            {/* <a className="button-atc" href="#">Add To Cart</a> */}
                            <button onClick={(product)=>handleAddtoCart(product)} class="button-addtocard">
                                <span>Add to cart</span>
                                <div class="cartV">
                                    <svg viewBox="0 0 36 26">
                                        <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                                        <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                                    </svg>
                                </div>
                            </button>
                            <a class="button-buy">
                                <span>Buy Now</span>

                            </a>
                        </div>
                        <div className="br">
                            <div className="fp">
                                <i className="fa-solid fa-rotate-left" />
                                <p>7 Days Return</p>
                            </div>
                            <div className="fp">
                                <i className="fa-solid fa-shield-halved" />
                                <p>100% Authentic</p>
                            </div>
                            <div className="fp">
                                <i className="fa-solid fa-truck-fast" />
                                <p>Free Shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Product-Specifications">
                    <div className="header-Specifications">
                        <span>Product Specifications</span>
                    </div>
                    <div className="Brand">
                        <p className="text">Brand</p>
                        <p>José Mauro de Vasconcelos</p>
                    </div>
                    <div className="Language">
                        <p className="text">Language</p>
                        <p>Vietnamese</p>
                    </div>
                    <div className="ImportLocal">
                        <p className="text">Import/Local</p>
                        <p>Local</p>
                    </div>
                    <div className="Stock">
                        <p className="text">Stock</p>
                        <p>323 Pieces Available</p>
                    </div>
                    <div className="ShipsFrom">
                        <p className="text">Ships From</p>
                        <p>Ho Chi Minh city</p>
                    </div>

                </div>
                <div className="Product-Description">
                    <div className="header-Description">
                        <span>Product Description</span>
                    </div>
                    <div className="contentDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste similique obcaecati, eos ut magni, magnam culpa pariatur enim quae vel quo tempora blanditiis incidunt quidem inventore reprehenderit iusto quaerat rem! Quae cumque eaque pariatur recusandae minima fugiat vel cum ducimus sed beatae. Molestiae vero dicta, velit minima quod labore, quas cum dolorum nam corporis eum doloribus placeat iste facilis culpa quam saepe eligendi necessitatibus quos earum aperiam recusandae beatae ipsam. Voluptatum, corporis! Quae at illum eligendi voluptatibus libero doloribus eum consectetur necessitatibus? Reiciendis fugiat provident harum, quas voluptatibus labore at, delectus libero velit fuga obcaecati vitae saepe iste tenetur minus. Facere doloremque sed blanditiis. Eum labore eius, error ipsum sit, delectus iusto perspiciatis aut debitis, repellendus assumenda. Velit consectetur laborum ratione et provident debitis deleniti illo error, non perspiciatis possimus suscipit sunt fuga, harum, iste voluptate! At, ex asperiores! Commodi cum eum nemo animi eos in temporibus dignissimos modi sint illo soluta alias ea cupiditate officiis dolores id nisi blanditiis ratione, dolorum eius. Quo, tempora nam fugit commodi ut totam veniam possimus sequi saepe. Iste nisi ea quisquam praesentium, molestiae incidunt fugiat omnis saepe, repellendus corporis alias ad harum libero corrupti velit cupiditate quidem consequuntur rerum quaerat sequi fuga reprehenderit. Expedita exercitationem aut nostrum at? Quis illum perspiciatis ipsum, sunt magni iste optio iure cum voluptatem voluptatum esse accusantium. Libero voluptates eum, maiores quaerat corrupti, nobis tempora quas iure voluptate omnis reprehenderit cum. A perferendis cupiditate sint quo dignissimos doloribus explicabo dolore esse ut officia, nihil nemo facere expedita totam fugit unde harum quis sequi doloremque temporibus perspiciatis vel mollitia voluptatem? Quae natus accusamus temporibus nisi necessitatibus consectetur rem adipisci obcaecati dignissimos deserunt cupiditate a sequi esse illo id, consequatur nihil facere aliquam atque ut animi nemo soluta ea. Nemo perspiciatis dolor labore esse minus, a numquam laborum natus totam laudantium enim officiis unde sapiente minima reprehenderit perferendis ea ab architecto amet quidem excepturi nesciunt. Saepe dolorum, reprehenderit magni aperiam nisi dolores, laboriosam aspernatur nemo eaque ullam veritatis perspiciatis! Impedit in voluptate cum vel consequuntur deserunt, facere pariatur consectetur accusantium molestiae maxime nobis non rerum doloremque nostrum dicta sint amet animi itaque nesciunt adipisci maiores corporis inventore odio? Dolorum illo repellendus, delectus dicta eaque vel tempore voluptas, nihil, perspiciatis labore sit corrupti ratione doloribus nam magni magnam vitae quisquam? Excepturi explicabo sequi qui, laborum adipisci maiores obcaecati repellat, animi dicta quia dolores illo quibusdam aliquam distinctio at dolorem? At maxime ipsam quisquam accusamus obcaecati amet, incidunt harum nostrum, culpa unde eius repudiandae excepturi modi eaque necessitatibus neque ex. Ducimus corrupti officiis tempora quos maxime qui nihil nobis vitae omnis veritatis, id dolor culpa, ipsum aliquid earum iste architecto odio sit facilis similique animi molestias. Assumenda dolorem praesentium atque suscipit nemo harum facere pariatur totam commodi minus similique, illum quod enim molestiae molestias distinctio, aliquam laboriosam doloremque. Repellendus esse magnam neque, corporis, repellat nobis sit harum provident culpa incidunt iure sunt? Vitae, eum aut? Repellendus, quisquam, hic maiores voluptatem debitis sequi, architecto totam ipsam ducimus sint itaque in repudiandae! Incidunt excepturi pariatur provident eius similique, est quo adipisci qui quos, quisquam autem, ducimus culpa magnam. Aut sit vitae doloribus necessitatibus repellendus numquam incidunt quibusdam eos odit nesciunt. Voluptas beatae culpa blanditiis iste quidem officia deserunt cumque corrupti suscipit itaque autem quaerat reiciendis perspiciatis dolorem, sapiente harum consectetur cupiditate tempore ipsam architecto aspernatur deleniti libero rerum nemo. Rem saepe nisi architecto dolore accusamus ab harum alias suscipit in, minus vel blanditiis sit, fugiat pariatur! Ad cumque quia esse sit repellat dicta, illum itaque dolorum. Vitae assumenda dolorem optio. Laudantium, voluptatum ea! Tenetur dolores aliquid nihil ipsum officia recusandae aperiam facilis earum fugit?</p>
                    </div>
                </div>

                <TagBooks></TagBooks>
            </section>




        </div>
    )
}

export default DetailPage
