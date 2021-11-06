import React, {useState,useEffect } from 'react'
import Typewriter from "typewriter-effect";
import PropagateLoader from "react-spinners/PropagateLoader";
import FadeIn from 'react-fade-in';
import './Welcome.css'
import ContentPage from './ContentPage';





function Welcome() {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },10000)
    },[])
    return (
        <div>
            <FadeIn>
            {
                loading ?
                    <div className='primary'>
                        <Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString("< Hello World />") 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcome to my Website")
                            .start();
                            }}
                        />
                        <br/>
                        <PropagateLoader color={'#2DDBB8;'}/>
                    </div> 
                :
                    <div className='components'>
                        <ContentPage/>   
                    </div>
                    
            }
            </FadeIn>
        </div>
    );
  }

export default Welcome
