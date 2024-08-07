import React from 'react'
import "./Bottom.css";

export default function Bottom() {
  return (
    <div className='bottom' id='bottom'>
        <footer>
          <div class="footer">
            <div class="row">
             
              <a href="https://www.linkedin.com/in/vikesh-ramesh-7bb901288/" target='_blank'><i class="pi pi-linkedin"></i></a>
              <a href="https://github.com/vikesh-24"><i class="pi pi-github" target='_blank'></i></a>
            </div>

            <div class="row">
              <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">projects</a></li>
              </ul>
            </div>

            <div class="row">
              
              PortFolio || Designed By: Vikesh Ramesh
            </div>
          </div>
        </footer>
    </div>
  )
}
