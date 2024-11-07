import React from 'react'
import about from '../images/about.avif'
import Title from './Titles'

function AboutMe() {
  return (
    <>
    {/* // <!-- about --> */}
    <section className="section" id="about">
    
        {/* <div className="section-title">
            <h2>about <span>us</span></h2>
        </div> */}
        <Title main_title= 'about ' sub_title='us' />

        <div className="section-center about-center">
            <div className="about-img">
                <img src={about} className="about-photo" alt="about" />
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptates nesciunt fugit
                    molestias? A iure eligendi rerum labore laborum molestiae repellat temporibus, dicta sit asperiores?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptates nesciunt fugit molestias? A iure eligendi rerum labore laborum molestiae repellat temporibus, dicta sit asperiores?</p>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptates nesciunt fugit molestias? A iure eligendi rerum labore laborum molestiae repellat temporibus, dicta sit asperiores?</p> --> */}
                <a href="#tours" className="btn hero-btn"> explore tours</a>
            </article>
        </div>
    </section>
    </>
  )
}

export default AboutMe