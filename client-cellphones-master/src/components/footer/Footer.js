import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <h2>Siêu thị Y tế</h2>
                    </div>
                    <div className="footer-top-about">
                        <h2>about</h2>
                        <ul>
                            <li>
                                <a href='https://www.facebook.com/profile.php?id=100021369940752'>Về Chúng Tôi</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Cơ Hội Nghề Nghiệp</a>
                            </li>
                            <li>
                                <a>Cửa Hàng</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="footer-top-sp">
                        <h2>Always-on Support</h2>
                        <p>Support 0984660074 (07:00-21:00)</p>
                        <p>Delivery 1800 6936 (07:00-21:00)</p>
                    </div>
                    <div className="footer-top-delivery">
                        <h2>Delivery</h2>
                        <ul>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                            <li>
                                <a>Payment</a>
                            </li>
                            <li>
                                <a>Cash voucher</a>
                            </li>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    
                    <p>Copyright © 2020 CELLPHONES. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;