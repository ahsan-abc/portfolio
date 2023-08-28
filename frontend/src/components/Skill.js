import React, { useEffect ,useState} from 'react'



function Skill()
{
 
  const [load, Setload] = useState('loading...')
    useEffect(() => {
      const url = `${process.env.REACT_APP_SERVER_URL}skills`;
      
  
        const fetchData = async () => {
          try {
              console.log("in try")
                const response = await fetch(url);
              const a = await response.text();
              const b = await JSON.parse(a);
              
            
            
                document.getElementsByClassName('skills')[0].innerHTML = ""
                for (var i = 0; i < b.length; i++) {
                  const el = document.createElement('li');
                  
                  el.innerHTML = ` 
                <img src="${b[i].image}" />
                <div> ${b[i].name.toLowerCase()}</div> <p>${b[i].about.toUpperCase()}</p>`;
                  document.getElementsByClassName('skills')[0].appendChild(el);
                  
            }
           


         
                 
            } catch (error) {
      
             
                console.log(error);
               Setload("Error : check your internet")
          
  
            }
        };
  
        fetchData();
    }, []);
    return (
        <main className='skills'>
          
        
        <p>
          {load}
          <p></p>
        </p>
        
         
          
        </main>
    )
}

export default Skill;