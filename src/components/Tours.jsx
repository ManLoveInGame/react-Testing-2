import React from 'react'
import Title from './Titles'
import { tours } from '../data'



function Tours() {
  return (
    <>
    {/* <!-- tours --> */}
 <section className="section" id="tours">
 <Title main_title= 'featured ' sub_title='Tours' />
 {/* <div className="section-title">
     <h2>featured <span>Tours</span></h2>
 </div> */}
 <div className="section-center featured-center">
     {/* <!-- first tour --> */}


     {tours.map((tour) => {return(<article key ={tour.id} className="tour-card">
         <div className="tour-img-container">
             <img src={tour.image} alt="" className="tour-img" />
             <p className="tour-date">{tour.date}</p>
         </div>
         
         <div className="tour-info">
             <h4>{tour.title}</h4>
             <p>{tour.info}</p>
         </div>
         <div className="tour-footer">
             <ul className="tour-footer-info">
                 <li><i className="fa-solid fa-map"></i>{tour.location}</li>
                 <li>{tour.duration}</li>
                 <li>{tour.cost}</li>
             </ul>
         </div>
     </article>)})}


 </div>
</section>
</>
  )
}

export default Tours