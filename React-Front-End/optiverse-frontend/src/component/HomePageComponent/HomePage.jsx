import React, { useEffect } from 'react'
import Bubble from '../BubbleComponent/Bubble'
import './Homepage.css'; 
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    
    if (typeof window.sessionStorage !== undefined) {
      if (!sessionStorage.getItem("login")) {
        navigate('/login');
      }
    } 
  
  }, [])
  
  return (
    <div className='gradient-background'>
      
      <div className='create'>
          <Bubble/>        
      </div>
      
    </div>
    
  )
}

export default HomePage