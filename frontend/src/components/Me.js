import React, { useEffect, useState } from 'react'
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
    const [p1, Setp1] = useState(weather)
    const [p2, Setp2] = useState(calculator)
    const [p3, Setp3] = useState(tic)
    const [p1_href, Setp1_href] = useState("https://ahsan-abc.github.io/weather")
    const [p2_href, Setp2_href] = useState("https://ahsan-abc.github.io/calculator")
    const [p3_href, Setp3_href] = useState("https://ahsan-abc.github.io/tic")


    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}projects`;
        
       
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const a = await response.text();
                const b = await JSON.parse(a);

                Setp1_href (b[b.length - 1].view);
                Setp1(b[b.length - 1].image);
                Setp2_href (b[b.length - 2].view);
                Setp2(b[b.length - 2].image);
                Setp3_href (b[b.length - 3].view);
                Setp3(b[b.length - 3].image);

            }
            catch (error) {
      
             
                console.log(error);
              
          
  
            }
        }

        fetchData()

        
    },[])


        return (
        <main className='me'>
        
            <div className="about">
                <img src={ jok} alt = "me"></img>
                
                <p>
                        <span ><Link to = "/admin-lock">Hey</Link></span>, I'm Ahsan Ahamad, a programmer who weaves lines of code into impactful solutions. From web wizardry to app adventures, I'm all about innovation. Let's transform your concepts into functional, user-friendly experiences that stand out in the digital realm.
                      
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
                   <a href = {p1_href}><div><img alt = "" src = {p1}></img></div></a>
                   <a href = {p2_href}> <div><img alt = "" src = {p2}></img></div></a>
                   <a href = {p3_href}> <div><img alt = "" src = {p3}></img></div></a>
                   <br></br> 
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