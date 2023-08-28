import React, {  useEffect, useState } from 'react';


function Projects() {


  const [load, Setload] = useState('loading...')

  useEffect(() => {
    

    const url = `${process.env.REACT_APP_SERVER_URL}projects`;
    
   
      const fetchData = async () => {
          try {
            const response = await fetch(url);
            const a = await response.text();
            const b = await JSON.parse(a);
          
              document.getElementsByClassName('projects')[0].innerHTML = "";
              for (var i = b.length-1; i >-1; i--) {
                const el = document.createElement('a');
                el.setAttribute("href",`${b[i].view}`)
                el.innerHTML = `   <img src = '${b[i].image}' alt = "${b[i].name}"/> <li>Name - ${b[i].name}</li><li>Technology - ${b[i].technology}</li><li>Date - ${b[i].date}</li>`;


                document.getElementsByClassName('projects')[0].appendChild(el);


              }
        
         
            
          } catch (error) {
      
          
       
              console.log(error);
            Setload('Error : check your internet...')
        


          }
      };

      fetchData();
  }, []);

    return (
      <main className='projects'>
        
        <p>
          {load}
          <p></p>
        </p>
        
      </main>
    )
}

export default Projects;