import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import './style.css'


//const src = 3

//console.log(src);


// const App = () =>{
//     return(
//     <React.StrictMode >
//         <SideBar/>
//     </React.StrictMode>
//     )
// }

// const SideBar = () => {
//     return ( 
//     <div className='sideNav'>
//         <div className='verticallyCentered'>
//             {SideLinks({ text:'contacts'})}
//             {SideLinks({ text:'resume', href:'#'})}
//             {SideLinks({ text:'project', href:'#'})}
//         </div>
//     </div>
//     )
// }


// const SideLinks = ({text,href,children}) =>{
//     return(
//         <div className='sideLinks'>
//             <a className='sideLinksLink' href={href}> <p>{text}</p> </a>
//         </div>
//     )
// }


const FullApp = ()=>{

    return (
    <React.StrictMode>
        <BrowserRouter>
            <App/>        
        </BrowserRouter>
    </React.StrictMode>)
}

 ReactDom.render( <FullApp/> , document.getElementById('root') );




