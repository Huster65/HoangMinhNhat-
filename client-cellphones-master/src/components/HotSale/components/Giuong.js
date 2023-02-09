import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Giuong(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Giường');
    const [hotGiuong, setHotGiuong] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotGiuong(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale Giường">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotGiuong ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotGiuong)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Giuong;