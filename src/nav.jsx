import './Nav.css'
import { useState } from 'react'

function Nav( {setPage} ) {
    return (
        <>
            <ul>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("about")}>About</li>
                <li onClick={() => setPage("contact")}>Contact</li>
            </ul>
        </>
    )
}
export default Nav