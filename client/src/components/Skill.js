import React, { useEffect ,useState} from 'react'



function Skill()
{
  var bool = true;
  const [load, Setload] = useState('loading...')
    useEffect(() => {
      const url = "http://localhost:8000/skills";
      
  
        const fetchData = async () => {
          try {
              console.log("in try")
                const response = await fetch(url);
              const a = await response.text();
              const b = await JSON.parse(a);
              
            
              if (bool == true) {
                document.getElementsByClassName('skills')[0].innerHTML = ""
                for (var i = 0; i < b.length; i++) {
                  const el = document.createElement('li');
                el.innerHTML = ` 
                <img src="${b[i].image}" />
                <div> ${b[i].name.toLowerCase()}</div> <p>${b[i].about.toUpperCase()}</p>   
            `
  
                document.getElementsByClassName('skills')[0].appendChild(el);
  
  
                }
                bool = false;
              }    
            } catch (error) {
      
              if (bool == true) {
                console.log(error);
               Setload("error:check your internet")
                bool= false;
              }
  
  
            }
        };
  
        fetchData();
    }, []);
    return (
        <main className='skills'>
          
          <p>{load}</p>
          
          
        </main>
    )
}

export default Skill;