import React from 'react'
import img1 from "../assets/nodejs.png";
import img2 from "../assets/dotnet.png";
import img3 from "../assets/java.png";

export default function Technologies() {

  

    
  return (
    <div className='tech-container'>
        <h2>Our Technologies and Platforms</h2>

     <div className='innercontainer'>
     <span className='heading'>Backend Technologies</span>
            <div className='img-container'>
            
                <img className='img1' src={img1} alt="img" />
                <img className='img2' src={img2} alt="img" />
                <img className='img1' src={img1} alt="img" />
                <img className='img2' src={img2} alt="img" />
                

                
            </div>
     </div>
     <div className='innercontainer'>
     <span className='heading'>Frontend Technologies</span>
            <div className='img-container'>
            
                <img className='img1' src={img1} alt="img" />
                <img className='img2' src={img2} alt="img" />
                <img className='img1' src={img1} alt="img" />

                
            </div>
     </div>
     <div className='innercontainer'>
     <span className='heading'>DevOps Technologies</span>
            <div className='img-container'>
            
                <img className='img1' src={img1} alt="img" />
                <img className='img2' src={img2} alt="img" />
                <img className='img1' src={img1} alt="img" />
                <img className='img2' src={img2} alt="img" />
                <img className='img1' src={img1} alt="img" />

                
            </div>
     </div>
           
           
      


    </div>
  )
}
