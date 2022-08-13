import React from 'react'
import './Details.css'

const Details = ({a,b,c,d,e,f}) => {
  return (
    <div className='ftr'>
        
        <div className="bk1">{a}</div>
        <div className="bk">{b}</div>
        <div className="bk">{c}</div>
        <div className="bk">{d}</div>
        <div className="bk">{e}</div>
        <div className="bk">{f}</div>
      
    </div>
  )
}

export default Details