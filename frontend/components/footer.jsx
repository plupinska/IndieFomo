import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <footer className="footer">
      <div class="contact">

       <div className="contact-links">
         <a href="https://github.com/plupinska" target="_blank">
           <img class="aa" src="Github.png" alt="Github.png" />
         </a>
       </div>

       <div className="contact-links">
         <a href="https://www.linkedin.com/in/lupinskapatrycja" target="_blank">
           <img class="aa" src="Linkedin.png" alt="Linkedin.png"/>
         </a>
       </div>

       <div className="contact-links">
         <a
         href="http://www.patrycjalupinska.com" target="_blank">
         <img id="pl" src="PL.png" atl="PL.png"/>
         </a>
       </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
