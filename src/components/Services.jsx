import React from 'react'
import Title from './Titles'
import { services } from '../data'

function Services() {
  return (
    <>
    {/* // <!-- services --> */}
<section className="section" id="services">
<Title main_title= 'Our ' sub_title='services' />
    {/* <div className="section-title">
        <h2>Our <span>services</span></h2>
    </div> */}
    <div className="section-center services-center">
        {/* <!-- first icon --> */}

        {services.map((service) => {return(
            <article key ={service.id}  className="service">
            <span className="service-icon"><i className={service.icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.text}</p>
            </div>
        </article>
        )})}

    </div>

</section>
</>
  )
}

export default Services