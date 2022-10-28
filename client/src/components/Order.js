import React, { useContext, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {useCart} from 'react-use-cart'
import toRupiah from '@develoka/angka-rupiah-js';

function Order(props) {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        navigate('/')
    }
        if(props.empty) return (
        <div className='container' style={{height:"80vh"}}>
            <div className=' container mx-auto my-auto text-center' style={{width:"30%"}}>
                <img  className="w-100" alt=""/>
                <h4>Your Cart Is Empty</h4>
                <p className='mb-0' style={{fontSize:"12px"}}>You have no items in your shopping cart.</p>
                <p className='m-0 mb-3' style={{fontSize:"12px"}}>Let's go buy something!</p>
                <button href="#" onClick={handleClick} className='btn bg-danger text-white px-5'>Shopping Now</button>
            </div>
        </div>)
  return (
    <div style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
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
                        {/* for map */}
                    <div style={{width:"60%", maxHeight:"200px"}} className='container overflow-auto'>
                        <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                        {props.items.map((item) => {
                            return(
                        <div >
                            
                            <div  className='mt-4'>
                                <div className='d-flex'>
                                    <img className='w-25 me-3' src={item.image} alt=''/>
                                        <div key={item.id}  className='d-flex w-100 mt-3'>
                                            <div className='me-auto'>
                                                <div>
                                                <p>{item.name}</p>
                                                </div>
                                                <div className='d-flex' style={{height:"30px", boxSizing:"border-box"}}>
                                                <button className='me-2 btn py-0' onClick={()=> props.addLess(item.id, item.quantity - 1)}>-</button>
                                                <p className='me-2 py-1'>{item.quantity}</p>
                                                <button className='me-2 btn py-0' onClick={()=> props.addLess(item.id, item.quantity + 1)}>+</button>
                                                </div>

                                            </div>
                                            <div>
                                            <div className='container' >
                                                <p>{toRupiah(item.quantity * item.price,{dot: '.', floatingPoint:0})} </p>
                                                </div>
                                                <div className='ps-1'>
                                                <img onClick={()=> {props.removeItem(item.id)}} className='ms-5' alt="a"/>
                                                </div> 
                                            </div>
                                        </div>
                                        
                                        
                                </div>
                            <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%", marginTop:"39px" }} />
                        </div>
                        </div>
                            )
                        })}
                         
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