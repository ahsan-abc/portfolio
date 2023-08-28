import React, { createElement, useEffect, useState } from 'react'
import img from '../media/yo.JPG'

function Projects() {

  var bool = true;
  const [load, Setload] = useState('loading...')
  useEffect(() => {
    const url = "http://localhost:8000/projects";
    

      const fetchData = async () => {
          try {
            const response = await fetch(url);
            const a = await response.text();
            const b = await JSON.parse(a);
            if (bool == true) {
              document.getElementsByClassName('projects')[0].innerHTML = "";
              for (var i = b.length-1; i >-1; i--) {
                const el = document.createElement('a');
                el.setAttribute("href",`${b[i].view}`)
                el.innerHTML = `   <img src = '${b[i].image}' alt = "${b[i].name}"/> <li>Name - ${b[i].name}</li><li>Technology - ${b[i].technology}</li><li>Date - ${b[i].date}</li>`;


                document.getElementsByClassName('projects')[0].appendChild(el);


              }
              bool = false;
            }
         
            
          } catch (error) {
      
            if (bool == true) {
       
              console.log(error);
            Setload('error:check your internet...')
              bool= false;
            }


          }
      };

      fetchData();
  }, []);

    return (
      <main className='projects'>
        <p>{load}</p>
      </main>
    )
}

export default Projects;