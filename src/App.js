import React from 'react'
import ReactDom from 'react-dom'
import Home  from './pages/home'
import Contact from './pages/contact'
import Project from './pages/project'
import Resume from './pages/resume'
import {Link, Route, Routes} from 'react-router-dom'




const App = () =>{
    return(
    <>
    <SideBar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/resume' element ={<Resume/> } />

     </Routes>
    </>
    )
}

const SideBar = () => {
    return ( 
    <div className='sideNav'>
        <div className='verticallyCentered'>
            {SideLinks({ text:'contacts', ref: '/contact'})}
            {SideLinks({ text:'resume',   ref: '/resume'})}
            {SideLinks({ text:'project',  ref: '/project'})}
            {SideLinks({text:'home',ref: '/' })}
        </div>
    </div>
    )
}


const SideLinks = ({text,ref,children}) =>{
    return(
        <div className='sideLinks'>
            <div className='sideLinksLink'>
            <Link to={ref}><p>{text}</p></Link>
            </div>
        </div>
    )
}

export default App; 

