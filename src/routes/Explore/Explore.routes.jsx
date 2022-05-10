import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import './Explore.styles.css'

function Explore() {
  const [ hotels, setHotels ] = useState([]);

  useEffect(() => {
    axios.get('/all')
    .then((res) => {
      console.log(res.data)
      setHotels(res.data)
    })
    .catch((err) => console.error(err))
  })
  return (
    <div className='explore-page'>
      <div className="hotels-section">
        {hotels?.map((data) => (
          <div className='hotel-card'>
            <img className='hotel-thumbnail' src={data.thumbnails[0].imgsrc} alt="" />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore