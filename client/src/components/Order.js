import React, { useContext, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {useCart} from 'react-use-cart'
import toRupiah from '@develoka/angka-rupiah-js';
import { API } from '../config/api';
import { useQuery } from 'react-query';
import {UserContext} from "./context/userContext"
import trash from "./Dummy/Trash.png"

function Order(props) {
    const navigate = useNavigate()

  const [state] = useContext(UserContext)
    

    let {id} = useParams();
    let { data: products, refetch } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    return response.data.data;
    
  });

    console.log(products);

  const deletee = async (id) => {
    try {
    await API.delete(`/transaction/${id}`)
    refetch();
    } catch (error) {
    }
  }

  

  return (
    <div style={{backgroundColor:"#FFFFF", height:"100vh"}}>
        <div className='container p-5'>  
            <div>
            <h2 className='mb-5'>Geprek Ways</h2>
            <p className='fs-4'>Delivery Location</p>
            <div  className='d-flex align-items-center'>
                <input className='rounded me-auto' style={{padding:"7px", width:"80%"}} type="text"></input>
                <a className=' py-2 bg-dark text-white text-decoration-none rounded px-4'>Select on Map <img className='ms-2'  /></a>
            </div>
            <div>
                <p className='fs-4 mt-3 container'>Review Your Order</p>
                <div className='d-flex w-100 container'>
                    <div style={{width:"60%", maxHeight:"200px"}} className='container overflow-auto'>
                        <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                        {products?.map((item) => (
                            item.user_id == state?.user.id?  
                        <div >
                            
                            <div  className='mt-4'>
                                <div className='d-flex'>
                                    <img className='w-25 me-3' src={`http://localhost:5000/uploads/${item.product?.image}`} alt=''/>
                                        <div key={item.id}  className='d-flex w-100 mt-3'>
                                            <div className='me-auto'>
                                                <div>
                                                <p>{item.product?.name}</p>
                                                </div>
                                                <div className='d-flex' style={{height:"30px", boxSizing:"border-box"}}>
                                                <button className='me-2 btn py-0' onClick={()=> props.addLess(item.id, item.quantity - 1)}>-</button>
                                                <p className='me-2 py-1'>{item.qty}</p>
                                                <button className='me-2 btn py-0' onClick={()=> props.addLess(item.id, item.quantity + 1)}>+</button>
                                                </div>

                                            </div>
                                            <div>
                                            <div className='container' >
                                                <p>{toRupiah(item.qty * item.product.price,{dot: '.', floatingPoint:0})} </p>
                                                </div>
                                                <div className='ps-1'>
                                                <img src={trash} onClick={()=> deletee(item.id)} className='ms-5' alt="a"/>
                                                </div> 
                                            </div>
                                        </div>
                                        
                                        
                                </div>
                            <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%", marginTop:"39px" }} />
                        </div>
                        </div>:null
                            )
                        )}
                    </div>
                    
                        
                    <div className='col-md-6' style={{width:"40%", overflow:"hidden"}}>
                        <hr className=' ms-3 me-3' style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                            <div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Subtotal</p>
                                    <p>{toRupiah(props.cartTotal,{dot: '.', floatingPoint:0})}</p>
                                </div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Qty</p>
                                    <p>{props.totalItems}</p>
                                </div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Ongkir</p>
                                    <p>Rp. 10.000</p>
                                </div>

                            <hr className=' ms-3 me-3 ' style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                            <div className='d-flex ms-3'>
                               <p className='me-auto'>Total :</p> 
                               <p>{toRupiah(props.cartTotal + 10000,{dot: '.', floatingPoint:0})}</p> 
                            </div>
                            </div>
                            
                    </div>
                    
                </div>
                <div className='w-100 text-end mt-4 '>
                <a className=' bg-dark text-white w-100 text-decoration-none rounded' style={{padding:"10px 100px "}}> Order</a>    
                </div>
            </div>

        </div>
          
        </div>
    </div>
  )
}

export default Order