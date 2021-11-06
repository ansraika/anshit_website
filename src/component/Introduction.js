import React, { Component } from 'react'
import Typical from 'react-typical'
//import Typewriter from "typewriter-effect";
import './Content.css'
//import img1 from './homepage.jpg'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { FaGithub } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { SiUnity } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrMail } from "react-icons/gr";



class Introduction extends Component {
    render() {
        return (
            <FadeIn className="master">
                <div> 
                    {/*<img src={img1} alt='' className='image'/> */}
                    <p className='text'>
                        <b>Hola!</b><span role="img" aria-label="star">✌️ </span> <br/>I am <b className='header'>Anshit Raika</b><br/><br/>
                        I like to <br/>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'code 💻 ',
                                1000,
                                'play music 🎹 ',
                                1000,
                                'listen  folk songs 🎧 ',
                                1000,
                                'read books 📖 ',
                                1000,
                                'watch sport 🏏 ',
                                1000,
                                'learn new tech stack 🔐',
                                1000
                            ]}
                        className='header'
                        /> 
                        {/*
                        <div className='header'>
                        <Typewriter
                          options={{
                            loop: true
                          }}
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString('code 💻') 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('play music 🎹 ') 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('listen folk songs 🎧 ') 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('read books 📖 ') 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('watch sport 🏏 ') 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('learn new tech stack 🔐') 
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                            }}
                        />
                        </div> */}
                    </p>
            
                    {/* ABOUT SECTION */}
                    <br/><br/><br/><br/><br/>
                    <h3 className='header'>About Me</h3>
                    <hr className='lines'/>
                    <p className='contentText'>
                    Hi,  I am a B.Tech Engineer focused on Computer Science. I completed my B. Tech in 2020 and currently  I am working as a <b><a href="https://in.linkedin.com/in/anshit-raika-111334155" className='links'>DevOps Engineer III</a></b> in Amazon India. I like to play on practical grounds because that's where I get to know where I need to work up.
                    <br/><br/>
                    As a software engineer, I believe in solving world problems with innovative technical ideas and like to take ownership to solve such problems. 
                    <br/><br/>
                    <b>When I am not in front of my screen</b> I may be found listening to some amazing podcasts, watching a movie, reading a book, practicing spirituality, working out, or meditating.
                    </p>

                    {/* Experience */}
                    <br/><br/><br/><br/><br/>
                    <h3 className='header'>Experience</h3>
                    <hr className='lines'/>
                    <ul className='contentText'>
                        <li>Worked as a 6 month DevOps Intern at Amazon India (Jan 2020 - Jun 2020).
                            <p className='subText'>Java&emsp;Ruby&emsp;AWS-RedShift&emsp;AWS-EC2&emsp;UNIX</p>
                        </li>
                        <li>
                            Worked as a DevOps Engineer FTE with Amazon India. (July 2020 - Jan 2021). 
                            <p className='subText'>AWS-SNS&emsp;AWS-SQS&emsp;AWS-DDB&emsp;AWS-S3&emsp;Scraping(XML)&emsp;SQL&emsp;UNIX</p>
                        </li>
                        <li>
                            Worked as a DevOps Engineer-III with Amazon India. (Feb 2021 Present). 
                            <p className='subText'>AWS-SQS&emsp;AWS-DDB&emsp;AWS-CloudWatch&emsp;Python&emsp;Java&emsp;UNIX</p>
                        </li>
                    </ul>

                    {/* Projects */}
                    <br/><br/><br/><br/><br/>
                    <h3 className='header'>Projects</h3>
                    <hr className='lines'/>
                    <ul>
                        <li className='subheadings'><b>Academic Projects</b></li><br/>
                        <ul className='contentText'>
                            <li>Android <GrAndroid/> application that calculates the <b>carbon emission</b> of the commuters and suggests them an alternative way to commute that's more eco-friendly.</li>
                            <b><p className='subText'>Java &emsp;FireBase &emsp;Android-Studio</p><br/></b>
                            <li><b>Augmented reality</b> <SiUnity/> or A.R. is the upcoming boom in the tech industry. This project of mine was an augmented reality app that helps you to visualize the new furniture in your room before buying it. 
                                It encaptures the 2D image and creates a 3D model of it which you can move with your fingertips and place wherever you want. </li>
                                <b><p className='subText'>Unity 3D</p><br/></b>
                        </ul><br/>
                        <li className='subheadings'><b>Non-Academic Projects</b>(Projects that I build outside my office)</li><br/>    
                        <ul className='contentText'>
                            <li>Android <GrAndroid/> application to get the <b>latest</b> leads for COVID-19 resources by querying real time twitter <GrTwitter/> data.
                            <b><p className='subText'>Java &emsp;Android-Studio</p> <a href='https://github.com/ansraika/CovidResources' className='links' target='blank'><FaGithub/></a></b>
                            </li><br/>
                            <li>Developed my own website, created a docker image and storing it in Amazon beanstalk.
                            <b><p className='subText'>React JS &emsp;AWS(beanstalk)&emsp;Docker</p></b>
                            </li><br/>
                        </ul><br/>
                    </ul>

                    {/* Resume */}
                    <b><a href='https://docs.google.com/document/d/1nHEEuUTaUqeY3GL2kmNuh29ag-Aw1KOF/edit?usp=sharing&ouid=101119630361093892305&rtpof=true&sd=true' target='blank' className='resume'>Get my Resume here 👉</a></b>
    
                    {/* Contact Me */}
                    <br/><br/><b><p className='contact'>Contact Me Here</p></b>
                    <div className='contactIcon'> 
                        <a href='https://in.linkedin.com/in/anshit-raika-111334155' className='contactIcon' target='blank'><GrLinkedin/></a> &emsp;
                        <a href='https://www.instagram.com/anshitraika/' className='contactIcon' target='blank'><GrInstagram/></a> &emsp;
                        <a href='https://www.facebook.com/anshit.raika92' className='contactIcon' target='blank'><GrFacebook/></a> &emsp;
                        <a href='https://twitter.com/raikaanshit92?lang=en' className='contactIcon' target='blank'><GrTwitter/></a> &emsp;
                        <a href="mailto: raikaanshit@gmail.com" className='contactIcon' target='blank'><GrMail/></a> &emsp;
                        <a href='https://github.com/ansraika' className='contactIcon' target='blank'><FaGithub/></a> &emsp;
    
                    </div>
                    <br/>
                    <p className='credits'>Designed and Developed by Anshit Raika</p>
                </div>    
        </FadeIn>
        )
    }
}

export default Introduction
