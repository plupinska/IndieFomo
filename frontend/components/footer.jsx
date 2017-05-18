import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <div className="footer">
        <div className="contact">
          <div className="contact-link-1">
            <a href="https://github.com/plupinska" target="_blank">
             <img className="github" src={window.github}/>
            </a>
          </div>
          <div className="contact-links-1">
            <a href="https://www.linkedin.com/in/lupinskapatrycja" target="_blank">
               <img className="linkedin" src={window.linkedin}/>
            </a>
          </div>
          <div className="contact-links-2">
            <a href="http://www.patrycjalupinska.com" target="_blank">
             <img className="personal" src={window.briefcase}/>
            </a>
          </div>
        </div>
        <div className="patrycja">Made by: Patrycja Lupinska</div>
      </div>
    );
  }
}



export default Footer;
