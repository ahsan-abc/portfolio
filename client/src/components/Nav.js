import React from 'react'
import { Link } from 'react-router-dom'


function Nav()
{



    return (
        <header className='nav'>
            <h1>A</h1>
            <ul>
                <li><Link to="/" className='link'>ME</Link></li>
                <li><Link to = "/projects"  className='link'>PROJECTS</Link></li>
                <li><Link to = "/skill"  className='link'>SKILL</Link></li>
            </ul>

        </header>
    )
}

export default Nav;