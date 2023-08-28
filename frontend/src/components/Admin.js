import  React  from 'react'
import { useState } from 'react';
function Admin()
{
   var key = ""
   
    const [error1 , Seterror1] = useState("")
    const [error2 , Seterror2] = useState("")
    const [error3 , Seterror3] = useState("")

    async function lock()
    {
        if (key === "") {
            const ad = document.querySelector('.lock');
            const user = ad.firstElementChild.value;
            const password = ad.firstElementChild.nextElementSibling.value;

            const obj = { user: user, password: password }

            var res = await fetch(`${process.env.REACT_APP_SERVER_URL}admin-lock`, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
            res = await res.text();
            res = await JSON.parse(res)
            key = res[0];
            console.log(key)
            if(key=="")
            { Seterror1("Not match , try again")
                setTimeout(() => Seterror1(""), 10000)
            }
            else
            {
                document.querySelector('.lock').style.display = "none"
                document.querySelector('.sub_skills').style.display = "flex"
                document.querySelector('.sub_projects').style.display = "flex"
                }
        }
        
    }
    async function sub_projects()
    {
        const adm = document.querySelector('.sub_projects');
        var adm_chil = adm.firstElementChild;
        const name = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const image = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const date = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const technology = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const view = adm_chil.value;

        const obj = { name: name, image: image, date: date, technology: technology, view: view, };
        var res = await fetch(`${process.env.REACT_APP_SERVER_URL}sub-project`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        res = await res.text();
     
        if (res == "done")
            Seterror2("Succesful")
        else 
            Seterror2("error , try again")

        setTimeout(()=>Seterror2(""),9000)
            
        
        }
            
    async function sub_skills()
    {
        const adm = document.querySelector('.sub_skills');
        var adm_chil = adm.firstChild;
        
        const name = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const image = adm_chil.value;
        adm_chil = adm_chil.nextElementSibling;
        const about = adm_chil.value;
       

      const   obj = { name: name, image: image, about: about };
        var res = await fetch(`${process.env.REACT_APP_SERVER_URL}sub-skill`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        res = await res.text();
     
        if (res == "done")
            Seterror3("Succesful")
        else 
            Seterror3("error , try again")

        setTimeout(()=>Seterror3(""),9000)
            
      
        
        }
    
    return (
        <main className="admin">
            {/* <-----------Lock-----------> */}
            <div className='lock'>
           <input  placeholder='User name'></input>
            <input placeholder='Password'></input>
            <button onClick={lock}>Submit</button>
                <h2>{error1}</h2>
            </div>
            {/* <-----------sub_projects-----------> */}
            
            <div className='sub_projects'>
           <input  placeholder='project name'></input>
            <input placeholder='project image'></input>
            <input placeholder='project date'></input>
            <input placeholder='project technology'></input>
            <input placeholder='project view'></input>
            <button onClick={sub_projects}>Submit</button>
                <h2>{error2}</h2>
            </div>

            {/* <-----------sub_skills-----------> */}
            
            <div className='sub_skills'>
     
            <textarea placeholder='skill about in 20 words'></textarea>
                <input placeholder='skill image'></input>
          
            <textarea placeholder='skill topic'></textarea>
            <button onClick={sub_skills}>Submit</button>
            <h2>{error3}</h2>
                
                </div>
        </main>
    )
}

export default Admin;