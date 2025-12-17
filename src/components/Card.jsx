import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props.company)
  return (
    <div className="card">
        <div className="top">
          <img src='data:image/png;base64,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'alt=''/>
          <button>Save <Bookmark size={16} strokeWidth={1.75} /> </button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>  
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
      
              <h3>${props.pay}/hour</h3>
              <p>{props.location}</p>
          
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
