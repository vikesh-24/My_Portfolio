import React, { useEffect } from 'react'
import "./About.css";
import Aos from 'aos';

export default function About() {
    useEffect(()=>{
        Aos.init({duration: 500});
        }, []);
  return (
    <div id="about">
    <div className='about_flex'>
        <div>
            <div className='myimage' data-aos="zoom-in" ></div>
        </div>
        <div  className='info-p'>
        <h1>About Me</h1>
            <h2 data-aos="fade-left">Undergraduate Student</h2>
            <p data-aos="fade-left">I am <b>Vikesh Ramesh</b> currently pursuing a <b>B.Sc. </b> in Information Technology at Sri Lanka Institute of Information Technology (SLIIT). Eager to contribute my skills and passion for coding to innovative projects, I bring a foundation in Full Stack development and DevOps, coupled with a proactive approach to learning and problem-solving. My coursework has provided me with a solid understanding of fundamental programming concepts, algorithms, and DevOps practices.
            </p>
            <div data-aos="fade-left">
                <i className="pi pi-phone"></i> &nbsp;<b>Mobile:</b> 0760896144<br/>
                <i className='pi pi-envelope'></i> &nbsp;<b>Email:</b> vikeshramesh1@gmail.com
            </div><br/>
            <div className='social_flex' data-aos="fade-up">
                <button class="social_btn" onClick={()=>window.open("https://www.linkedin.com/in/vikesh-ramesh-7bb901288/","_blank")}>
                    <i className='pi pi-linkedin'></i>
                </button>
                
                <button class="social_btn" onClick={()=>window.open("https://github.com/vikesh-24","_blank")}>
                    <i className='pi pi-github'></i> Git Repositories
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
