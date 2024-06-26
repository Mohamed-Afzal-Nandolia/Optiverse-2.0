import React, { useEffect } from 'react'
import Bubble from '../BubbleComponent/Bubble'
import './Homepage.css'; 
import { useNavigate } from 'react-router-dom'
import North from '../BorderLayout/NorthComponent/North';
import West from '../BorderLayout/WestComponent/West';
import East from '../BorderLayout/EastComponent/East';
import Center from '../BorderLayout/CenterComponent/Center';


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
    <div className='gradient-background' 
      style={{overflow: 'scroll',
      scrollbarWidth: 'none', /* For Firefox */
      msOverflowStyle: 'none', /* For Internet Explorer and Edge */}}
      >
      
      <North/>

      <div className='koibhi'>
          <West/>
          <Center/>
          <East/>
      </div>
      
    </div>
    
  )
}

export default HomePage