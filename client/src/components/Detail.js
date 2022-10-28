import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { details } from './Dummy/Details'
import { useCart } from "react-use-cart";
import { useQuery } from 'react-query';
import { API } from '../config/api';




function Detail () {

const { addItem } = useCart();

let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data;
    console.log(products ,"aa");
});

// const [products, setProducts]= useState([])

// useEffect(()=>{
//     const products = async()=>{
//         try{
//             const response = await  API.get("/products");
//             setProducts(response.data.data)
//             console.log(response);
//         }catch(error){}
//     };
//     products()
// },[setProducts])
    return(
        <>
    <Container>
        <div className='w-100 mx-auto mt-4'>
            <h2 className='mt-5 mb-3'>Geprek Bensu, Menus</h2>
            <div className='d-flex flex-wrap gap-4'>
            {products?.map((item) => {
                return(
                    <div key={item.id} class="card" style={{width: "18rem"}}>
                    <img src={item.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.price}</p>
                        <button class="btn tombol" onClick={() => addItem(item)}>Order</button>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    </Container>
        </>
    );
}

export default Detail;
