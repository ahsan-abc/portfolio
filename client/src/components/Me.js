import React from 'react'
import jok from '../media/me.png'
import { Link } from 'react-router-dom'
import weather from '../media/weather.JPG'
import calculator from '../media/calculator.JPG'
import tic from '../media/tic.JPG'

import email from '../media/icons/email.png'
import instagram from '../media/icons/instagram.png'
import twitter from '../media/icons/twitter.png'
import github from '../media/icons/github.png'
import linkedin from '../media/icons/linkedin.png'
function Me()
{
        return (
        <main className='me'>
        
            <div className="about">
                <img src={ jok} alt = "me"></img>
                
                <p>
                        <span>Hey</span>, I'm Ahsan Ahamad, a programmer who weaves lines of code into impactful solutions. From web wizardry to app adventures, I'm all about innovation. Let's transform your concepts into functional, user-friendly experiences that stand out in the digital realm.
                        <br/>
                        <span><a href = '#contact'> <button>contact</button></a>
                        <Link to = "/projects"><button>projects</button></Link></span> 
                        
                    </p>
 
                   

            </div>

            <div className="short ">
                <ul>
                    <li><img  alt = "" src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/></li>
                    <li><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></li>
                    <li><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></li>
                    <li><img alt = ""  src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/></li>
                   
                    <li><img alt = ""  src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/></li>
                   
                    <li><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /></li>
                    <p><Link to = '/skill'>more...</Link></p>
                   
                    
                </ul>
                <ul>
                    <div><img alt = "" src = {weather}></img></div>
                    <div><img alt = "" src = {calculator}></img></div>
                    <div><img alt = "" src = {tic}></img></div>
                    
                   <p><Link to = '/projects'>more...</Link></p>
            </ul>
            </div>

            <div className='contact' id = "contact">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdkmNrThFqfbPnFFlHnwFpJRwBmcxQxZNtvkzzzzXQSJnLHFxfKPbdZcFtqzRfBWpxgKL" target='__blank'><img alt=""  src={ email} /></a>
                <a href="https://www.github.com/ahsan-abc" target='__blank'><img alt="" src={github} /></a>
            <a href = "https://www.twitter.com/ahsan-abc" target='__blank'><img alt = "" src = {twitter}/></a>
                <a href="https://www.instagram.com/ahsan__abc" target='__blank'><img alt="" src={ instagram} /></a>
                <a href="https://www.linkedin.com/in/ahsan-abc/" target='__blank'><img alt="" src={linkedin} /></a>
           
                       
             
            </div>

        </main>
    )
}

export default Me;