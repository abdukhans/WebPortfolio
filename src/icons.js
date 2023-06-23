import React from 'react'
import {Link} from 'react-router-dom'
// import ReactDom from 'react-dom'


export const HomeIcon = ()=>{
    return (        
        <Link to="/"  >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="21" 
            height="21" 
            viewBox="0 0 21 21">
            <g fill="none" fill-rule="evenodd" stroke="white" stroke-linecap="round" stroke-linejoin="round">
            <path d="m1.5 10.5l9-9l9 9"/><path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></g>
            </svg>
        </Link>
    )
    

}

export const ContactIcon = ()=>{
    return (        
        <Link to="/contact"  >
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="21" 
                height="21" 
                viewBox="0 0 24 24"  >
                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M2 22a8 8 0 1 1 16 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm10 4h4v2h-4v-2Zm-3-5h7v2h-7v-2Zm2-5h5v2h-5V7Z"/>
            </svg>
        </Link>
    )
    

}

