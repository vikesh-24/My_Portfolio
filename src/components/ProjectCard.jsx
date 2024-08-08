import React from 'react';
import './ProjectCard.css';
import pro1 from '../assets/p1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/p3.png';
import pro4 from '../assets/project4.png';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ProjectCard() {
  return (
    <div className="projects_flex">
        <div class="cookieCard" data-aos="zoom-in">
        <img src={pro1} alt="" width={260} style={{zIndex:"1", borderRadius: "30px"}} />
            <p class="cookieHeading">E-Commerce System</p>
            <p class="cookieDescription">Our user-friendly interface allows you to effortlessly browse, purchase, and schedule deliveries for your products.<br/><br /><i class="bi bi-github"></i> </p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://github.com/vikesh-24/mern_project.git","_blank")}><i class="bi bi-link-45deg"></i> Project-Repository</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in" >
            <img src={pro2} alt="" width={260} style={{zIndex:"1",borderRadius: "30px"}} />
            <p class="cookieHeading">Task manager mobile application</p>
            <p class="cookieDescription">Our task manager app is designed to help you organize and track your daily tasks efficiently. With a user-friendly interface, you can easily create, edit, and delete tasks. <br/><br /><i class="bi bi-github"></i> </p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://github.com/vikesh-24/mern_project.git","_blank")}><i class="bi bi-link-45deg"></i> Project-Repository</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src={pro3} alt="" width={260} height={100} style={{zIndex:"1",borderRadius: "30px"}} />
            <p class="cookieHeading">Emotion_Reader</p>
            <p class="cookieDescription">The emotion reader Python code is a tool that analyzes facial expressions in images or video streams to determine the emotional state of a person. It uses a combination of computer vision and machine learning techniques to detect faces, extract facial features, and classify emotions.</p><br />
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://github.com/vikesh-24/Emotion_Reader.git","_blank")}><i class="bi bi-github"></i> Implemented code</button>
        </div>
        <div class="cookieCard" data-aos="zoom-in">
            <img src={pro3} alt="" width={260} height={100} style={{zIndex:"1",borderRadius: "30px"}} />
            <p class="cookieHeading"> Object detector</p>
            <p class="cookieDescription">The object detector Python code identifies and locates objects in images or videos using computer vision and machine learning.This code is useful for security, surveillance, autonomous vehicles, and other object recognition applications.
            <br/><br /><i class="bi bi-github"></i> </p>
            <button style={{width:"100%"}} class="acceptButton" onClick={()=>window.open("https://github.com/vikesh-24/Object_detector","_blank")}><i class="bi bi-link-45deg"></i> Get code</button>
        </div>
    </div>
  )
}
