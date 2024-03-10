import React from 'react'
import './Class.css'
import { useNavigate } from 'react-router-dom'

function First() {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/quiz')
    }
  return (
    <>
    <div className='container w-50 c1 pb-5'>
<img style={{height:'320px',width:'750px'}} src="https://media.istockphoto.com/id/1164269988/vector/glass-banner-transparent-geometric-shapes.jpg?s=612x612&w=0&k=20&c=OP9MRyiC5R7foP4Fl-FlIeKOs6F67P-qrABmRDzMDWo=" alt="" />
<h1 className='text-center' style={{color:'green',fontFamily:'-moz-initial'}}>QUIZZLES</h1>
<h2 className='text-center' style={{fontFamily:'-moz-initial'} }>Let's Play!</h2>
<div className='text-center'>
    <button onClick={handleNavigate} className='btn' style={{width:'250px',height:'70px',borderRadius:'20px',backgroundColor:' rgba(126, 36, 126, 0.419)',color:'white'}}><h3 style={{fontFamily:'-moz-initial'}}>Play Now</h3></button>
    
</div>    </div>
    
    
    </>
  )
}

export default First