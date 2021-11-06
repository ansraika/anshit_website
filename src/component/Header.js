import React, {useState,useEffect } from 'react'
import SkewLoader from 'react-spinners/SkewLoader';
import './Header.css'
import FadeIn from 'react-fade-in';




function Header(){
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
        },10000)
    },[])
    return (
        <FadeIn>
            <div className='header'>
                <SkewLoader size='10' color='#2DDBB8' loading={loading} className='header'/><br/>
                <h3 className='header'>Anshit Raika</h3>
                <SkewLoader size='10' color='#2DDBB8' loading={loading} className='header'/><br/>
            </div>
        </FadeIn>
    )
    
}

export default Header
