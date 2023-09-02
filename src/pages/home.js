import React from 'react'
//import ReactDom from 'react-dom'
import HeroPic from "../images/HeroPic.jpg"
import Darr from '../images/DArr.svg'
import { Link } from 'react-router-dom'









const CardHolderCss= (num)=> {

    return {
        "margin-top": "3rem",
        "display": "grid",
        "grid-template-columns": `repeat(${num},1fr)`,
        "grid-auto-rows": "minmax(10px,auto)",
        "grid-row-gap":"1rem",
        "grid-column-gap": "1rem",
        "justify-content": "center",
    

    }
}


const getNumCols = (lst)=>{
    return (lst.length <= 3) ? lst.length  : 3
}





const Home = ()=>{


    //console.log(Darr);
    return (<>   
        <div className='MainDiv center'>
            <section className='HeroDiv center'>
                {/* <img src={HeroPic} className="HeroPic" alt="Pic of me"  />       */}
                <div className='TextBut'>
                    <h1 className='HeroText'>Hi, Im Abdullah</h1>
                    <h2 id='SubHeader'> Software Developer </h2>
                    <div className='center'>
                        <Link to="/project" className='center'  style={{"display": "inline-block"}} >
                            <button   className='HeroButton center' >
                                <p>Work</p>
                                <div className='SvgAnim center'>
                                    {/* <div className='HideSvg'> </div> */}
                                    <img src={Darr}/>   
                                </div>                     
                            </button> 
                        </Link>
                    </div>
                </div>
            </section>
            {/* <section id='PROJECTS'>
                <div className='center' >
                    <div className='CardHolder' style={CardHolderCss(numCols)} >
                        {lst_cards.map((card)=>{
                            return card
                        })}
                    </div>
                   
                </div>
            </section>     */}
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