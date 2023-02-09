import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Ytechuyendung(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Y tế chuyên dụng');
    const [hotYtechuyendung, setHotYtechuyendung] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotYtechuyendung(data)
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
                   hotYtechuyendung ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotYtechuyendung)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Ytechuyendung;