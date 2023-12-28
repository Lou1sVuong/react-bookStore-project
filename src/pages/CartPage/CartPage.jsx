import React, { useEffect, useState } from 'react'
import './CartPage.css';
import CounterBTn from '../../components/CounterBtn/CounterBTn';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartPage() {
    const cart = useSelector(state => state.cart.carts);
    const [shortenedNames, setShortenedNames] = useState([]);
    const [maxNameLength, setMaxNameLength] = useState(0);

    useEffect(() => {
        const maxLength = 15; // Độ dài tối đa bạn muốn
        const shortened = cart.map(item => {
            let name = item.name;
            if (name.length > maxLength) {
                name = `${name.substring(0, maxLength)}...`;
            }
            return name;
        });
        setShortenedNames(shortened);

        const maxLen = Math.max(...shortened.map(name => name.length));
        setMaxNameLength(maxLen);
    }, [cart]);

    if (cart.length === 0) {
        return (
            <section>
                <div className="cartEmpty">
                    <div className="imgEmptyCart">
                        <img src="https://i.ibb.co/chLh2HV/empty-Cart.png" alt="" />
                    </div>
                    <div className='contentEmptyCart'>
                        <div className='title-cartEmpty'>Your cart is <span>empty !</span></div>
                        <p>Must add items on the cart before you proceed to check out.</p>
                        <Link to='/'>
                            <a href="" className='btn'>RETURN TO SHOP</a>
                        </Link>
                    </div>
                </div>

            </section>
        );
    }



    // Trigger the useEffect whenever 'cart' changes

    return (
        <div>
            <section className='CartPage'>
                <div className="CartMainLayout">
                    <div className="cart-detail">
                        <div className="scrollable-body-1">
                            <table className="shopping-cart-table">
                                <thead>
                                    <tr>
                                        <th>ㅤName</th>
                                        <th>ㅤㅤImage</th>
                                        <th>ㅤㅤPrice</th>
                                        <th>ㅤQuantity</th>
                                        <th>Total Price</th>
                                        <th />
                                    </tr>
                                </thead>

                            </table>
                        </div>
                        <div className="scrollable-body">
                            <table className="shopping-cart-table">
                                {/* <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th />
                                    </tr>
                                </thead> */}
                                <tbody >
                                    {cart.map((item, index) => (
                                        <tr key={item.id}>

                                            {/* <td><p class="truncate-text">{item.name}</p></td> */}
                                            <td style={{ maxWidth: maxNameLength * 4.5 }}>
                                                <p className="truncate-text">{shortenedNames[index]}</p>
                                            </td>
                                            <td><img src={item.imageSrc} alt={item.name} style={{ width: '100px', height: '100px' }} /></td>
                                            <td>${item.price}</td>
                                            <td>
                                                <div className='center'>
                                                    <CounterBTn /> {/* You might need to pass props for quantity */}
                                                </div>
                                            </td>
                                            <td>${item.price}</td>
                                            <td><i className="fas fa-times-circle"></i></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="checkOut">
                        <div className="zipCode">
                            <h2>ESTIMATE SHIPPING & TAX</h2>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <p>NYC SuperStore Pickup</p>
                                <a href="#">See Details</a>
                            </div>
                            <div className="selectCountry">
                                <select name="country" id="country">
                                    <option value="VietNam">VietNam</option>
                                    <option value="United States">United States</option>
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                            <div className="enterZipCode">
                                <p>Zip Code</p>
                                <input type="text" placeholder="Enter your text here" />

                            </div>
                        </div>
                        <div className="totalLayout">
                            <div className="Subtotal">
                                <p>Subtotal:</p>
                                <div className="content-total">
                                    <p>$169.99</p>
                                </div>
                            </div>
                            <div className="Shipping">
                                <p>Shipping:</p>
                                <div className="content-total">
                                    <p>Calculate Above</p>
                                </div>
                            </div>
                            <div className="SalesTax">
                                <p>Sales Tax</p>
                                <div className="content-total">
                                    <p>Calculate Above</p>
                                </div>
                            </div>
                            <div className="line-break"></div>
                            <div className="Total">
                                <p>Subtotal:</p>
                                <div className="content-total">
                                    <p>$169.99</p>
                                </div>
                            </div>
                            <a class="button-checkout">
                                <span>
                                    <i class="fas fa-lock"></i>
                                    <p>Begin Checkout</p>
                                </span>

                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CartPage
