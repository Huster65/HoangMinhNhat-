import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';


function Ytegiadinh(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Y tế gia đình');
    const [hotYtegiadinh, setHotYtegiadinh] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotYtegiadinh(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotYtegiadinh ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotYtegiadinh)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Ytegiadinh;