import React, { useState } from 'react'
import "../styles/Task4.css"

let img1 = "https://www.kfcpakistan.com/images/aadb5980-0479-11ee-8dd9-5feb7f32ce9f-ChickyMeal1_variant_0-2023-06-06145149.png"
let img2 = "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png"
let img3 = "https://www.kfcpakistan.com/images/b527b2b0-87a7-11ee-8f64-8969f6610645-thumbnail-2-good-min_variant_0-2023-11-20132126.png"
let img4 = "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-Family-Festivle-2-2023-05-31115706.png"
import next from "../assets/next.png"
import back from "../assets/back.png"


const Task4 = () => {

  let images = [img1,img2,img3,img4]
  const [imgIndex, setImageIndex] = useState(0) 


  const handleImage = (i)=>{
      setImageIndex(i)
  }

  const  handlePre = ()=>{

    if(imgIndex >0 && imgIndex < 4){
      setImageIndex(imgIndex-1)
      
    }

   
  }

  const handleNext = ()=>{
    if(imgIndex >=0 && imgIndex < 3){
      setImageIndex(imgIndex+1)

    }

   
    

    
  }

  return (
    <div className='container'>

      <div className='main-img'>
        <img className='main-image' src={images[imgIndex]} alt="" />
      </div>
      

      <div className='img-container'>
        <div className='icon-con'>
        <img  onClick={handlePre} className="img-icon"  src={back} alt="" />
        </div>
        {
          images.map((item, i)=>(

            <img onClick={()=>handleImage(i)} className='small-img' key={i} src={item} alt="" />

          ))
        }

        <div className='icon-con'>
        <img onClick={handleNext}  className='img-icon ' src={next} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Task4