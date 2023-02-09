import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import Giuong from '../components/HotSale/components/Giuong'
import Ytegiadinh from '../components/HotSale/components/Ytegiadinh'
import Ytechuyendung from '../components/HotSale/components/Ytechuyendung';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <Giuong></Giuong>
            <Ytegiadinh></Ytegiadinh>
            <Ytechuyendung></Ytechuyendung>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;