import React, { useState } from 'react'
import "../styles/Task3.css"




const Task3 = () => {

    const [marks, setMarks] = useState(
      
      [40,50,90,30,94]

    )
    
    let pass = marks.filter(i=> i>=50)

    let fail = marks.filter(i=> i<50)

      const decre=(i)=>{
            let mark = [...marks]
            mark[i] -=1
            setMarks(mark)
      }

      const incre=(i)=>{
        let mark = [...marks]
        mark[i] +=1
        setMarks(mark)
  }

  

  return (
    <div className='container'>
      
       <div className='status'>
        <h3 className='pass'>Pass: {pass.length}</h3>
        <h3 className='fail'>Fail: {fail.length}</h3>
        </div> 

      {
        marks.map((m,i)=>(
          <div key={i} className='marks'>
            <button onClick={()=> incre(i)} className='btn'>+</button>
            <h2 className={`${m>=50?"pass":"fail"}`} >{m}</h2>
            <button onClick={()=>decre(i)} className='btn'>-</button>
          </div>
        ))
      }
    </div>
  )
}

export default Task3