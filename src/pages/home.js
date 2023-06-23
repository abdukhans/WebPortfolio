import React from 'react'
//import ReactDom from 'react-dom'
import HeroPic from "../images/HeroPic.jpg"

const Home = ()=>{


    return (<>
    
    <div className='MainDiv'>
        <img src={HeroPic} style={{width: '100px'} } alt="Pic of me"  />       
    </div>
    </>)
}


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

// export default App; 


export default  Home