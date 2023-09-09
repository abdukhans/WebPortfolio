import React from 'react'
// import {useState}from 'react'
//import ReactDom from 'react-dom'
import Home  from './pages/home'
import Contact from './pages/contact'
import Project from './pages/project'
import Resume from './pages/resume'
import SideNav from './sideNav'
import {Route,Routes,useLocation} from 'react-router-dom'


// const HomeIcon = ()=>{
//     return (
//         <Link to="/"  >
//         <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             width="21" 
//             height="21" 
//             viewBox="0 0 21 21">
//             <g fill="none" fill-rule="evenodd" stroke="white" stroke-linecap="round" stroke-linejoin="round">
//             <path d="m1.5 10.5l9-9l9 9"/><path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></g>
//             </svg>
//         </Link>
//     )
// }

const App = () =>{

    const location = useLocation()

    
    console.log('s',location.pathname);
    return(
    <>
            {/* <SideNav cur= {location.pathname}/> */}
        <Routes>
            <Route path='/WebPortfolio'        element = {<Home/>   } />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/project' element = {<Project/>} />
            <Route path='/resume'  element = {<Resume/> } />
        </Routes>
    </>
    )
}



export default App; 

