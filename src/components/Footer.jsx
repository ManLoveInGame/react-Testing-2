import React from 'react'
import PageLinks from './PageLinks'
import IconLinks from './IconLinks'

function Footer() {


  const date = new Date().getFullYear();


  return (
    <>
     {/* <!-- footer --> */}
 <footer className="section footer">
 <PageLinks parentClass ="footer-links" itemClass="footer-link" id=""/>

 <IconLinks parentClass ="footer-icons" itemClass="footer-icon" icon=""/>

 <p className="copyright">
     copyright &copy; Travel tours company
     <span className="date"> {date}</span> all right reserved
 </p>
</footer>
</>
  )
}

export default Footer