import React from 'react'
import lib3DimgP1 from '../images/Lib3Dp1.png'
import lib3DimgP2 from '../images/Lib3Dp2.png'
import lib3DimgP3 from '../images/Lib3Dp3.png'
import lib3DimgP4 from '../images/Lib3Dp4.png'
import lib3DimgP5 from '../images/Lib3Dp5.png'
import lib3DimgP6 from '../images/Lib3Dp6.png'
import lib3DimgP7 from '../images/Lib3Dp7.png'
import naPng from "../images/na.png"
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import { useState, useEffect } from 'react'
//import ReactDom from 'react-dom'
import rightArr from "../images/RIGHTARROW.svg"
import { useRef } from 'react'
import InstaPic from "../images/Insta.svg"
import GitHub from "../images/GitHub.svg"
import Linkeden from "../images/Linkeden.svg"
import {  Link} from "react-router-dom";
import Lib3Ddescr from "../text/Lib3Ddescr.txt";
import BackSvg from "../images/back.svg"

// console.log(process.env.PUBLIC_URL);
// const basePath= '/WebPortFolio/images/'

// const lib3DimgSrc  =  basePath +"ba.png"
// const naPngSrc = basePath +"na.png"
// const pic1Src = basePath +"pic1.png"
// const  pic2Src  = basePath +"pic2.png"
// const pic3Src = basePath + "pic3.png"

const DebugMode = false

const CardHolderCss = (num) => {


    return {

        "marginTop": "3rem",
        "display": "grid",
        "width": `${num * 25}vw`,
        "gridTemplateColumns": `repeat(${num},1fr)`,
        "gridAutoRows": "minmax(10px,auto)",
        "gridRowGap": "1rem",
        "gridColumnGap": "1rem",
        "justifyContent": "center",
    }
}


const getNumCols = (cards) => {
    return (cards.length < 3) ? cards.length : 3;
}


const animTime = 200

const Card = ({ card }) => {

    
    const { lstImage, title, descrPath, link } = card

    const [descr,setDescr ]  = useState("")
    const [activeIdx, setActiveIdx] = useState(1);
    const [rendListImg, setRendListImg] = useState(lstImage)
    //const [rightDir, setRightDir] = useState(null)
    const [prevTimeStamp, setPrevTimeStamp] = useState(0);
    //const [isInstant, setIsInstant] = useState(false)
    const isInstant = useRef(false);
    
    const countRend = useRef(0);
    //console.log("INIT: " ,isInstant);
    const imgWidth = "20px"
    const imgPadding = "2px"
    const lstLen = lstImage.length

    // const [cssAnim, setcssAnim] = useState({})

    // const trans = transition: `transform 1s ease-in-out`
    const changeRight = (e) => {
        // setActiveIdx(Math.abs((activeIdx + 1 )%lstLen))
        // console.log(activeIdx);




        //const curTimeStamp = e.timeStamp
        //console.log( "CUR - PREV: " ,curTimeStamp - prevTimeStamp);
        // console.log( "PREV: " ,prevTimeStamp);
        //  console.log( "CUR: " ,curTimeStamp);
        // if (prevTimeStamp !== 0 && activeIdx === lstLen - 1 && (curTimeStamp - prevTimeStamp ) < animTime  ) {

        //     //console.log( "CUR - PREV: " ,curTimeStamp - prevTimeStamp);

        //     setPrevTimeStamp(curTimeStamp);
        //     return
        // }

        //setPrevTimeStamp(curTimeStamp);



        // setcssAnim({ transition: `transform 1s ease-in-out`,transform: `translateX(calc(-1*${activeIdx + 1}*100%)` })


        // if (activeIdx + 1  === lstLen) {            
        //     const firsElm = rendListImg[0];
        //     const newList = rendListImg.filter((v,idx)=>idx !== 0 )
        //     setRendListImg([...newList,firsElm])
        //     //setActiveIdx(activeIdx - 1 )

        //     return



        // }
        //else{

        //     setActiveIdx(activeIdx + 1)
        // }

        // setTimeout(()=>{},animTime)
        //setRightDir(true)
        const newActiveIdx = (activeIdx >= lstLen - 1 ) ? lstLen - 1 : activeIdx + 1
        setActiveIdx(newActiveIdx)
    }

    const changeLeft = (e) => {
        // setcssAnim({ transition: `transform 1s ease-in-out` ,transform: `translateX(calc(-1*${activeIdx - 1}*100%) `})

        const curTimeStamp = e.timeStamp
        if (prevTimeStamp !== 0 && activeIdx === lstLen - 1 && (curTimeStamp - prevTimeStamp ) < animTime  ) {

            //console.log( "CUR - PREV: " ,curTimeStamp - prevTimeStamp);

            setPrevTimeStamp(curTimeStamp);
            return
        }

        //setPrevTimeStamp(curTimeStamp);



        const newActiveIdx = (activeIdx <= 0 ) ? 0 : activeIdx - 1
        setActiveIdx(newActiveIdx)
    }

    const getImgCss = (src, activeIdx, currentIdx) => {


        var trans = currentIdx - activeIdx;

        // if (trans === -lstLen + 1  ) {
        //     trans = 1 

        // }

        //`translateX( calc(100%*${currentIdx} + 100%*${-activeIdx%lstLen}))` 
        var transString = `translateX( calc(100%*${trans}))`


        //switchBegin && currentIdx === 0
        //( currentIdx === 0 ) ? `translateX( calc(100%))` :  
        const transformCss = transString


        //console.log("IS CURRENT CSS: ", isInstant.current);
        const transTime = (isInstant.current) ? "0.0s" :   `${animTime}ms`
        const transitionCss = `transform ${transTime}  ease-in-out`
        // transitionCss = (switchBegin && currentIdx ===   ) ?  "transform 0.5s ease-in-out": transitionCss

        // if (activeIdx + 1  === lstLen) {            
        //     const firsElm = rendListImg[0];
        //     const newList = rendListImg.filter((v,idx)=>idx !== 0 )
        //     setRendListImg([...newList,firsElm])
        //     setActiveIdx(activeIdx -1);            
        // }



        return {
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            width: "101%",
            height: "101%",
            backgroundPosition: "center",
            position: "absolute",
            transition: transitionCss,
            transform: transformCss,
        }
    }



    // useEffect(()=>{

    //     if (activeIdx === lstLen    ) {
    //         const firsElm = rendListImg[0];
    //         const newList = rendListImg.filter((v,idx)=>idx !== 0 )
    //         setRendListImg([...newList,firsElm])
    //         setActiveIdx(activeIdx - 1)

    //     }
    // })




    useEffect (()=>{
        fetch(descrPath)
            .then( res => res.text()
            ).then(
                txt => setDescr(txt)
            )

    }, [])
    useEffect(() => {


        countRend.current += 1;
        //console.log("NUM rends: ", countRend.current);

        //console.log("isINSTANT: ", isInstant);
        // if (switchBegin) {
        //     // setTimeout( ()=>{
        //     // setSwitchBegin(false)
        //     // const firsElm = rendListImg[0];
        //     // const newList = rendListImg.filter((v,idx)=>idx !== 0 )
        //     // setRendListImg([...newList,firsElm])
        //     // setActiveIdx(activeIdx - 1)
        //     // },800
        //     // )
        //     setSwitchBegin(false)
        //     const firsElm = rendListImg[0];
        //     const newList = rendListImg.filter((v,idx)=>idx !== 0 )
        //     setRendListImg([...newList,firsElm])
        //     setActiveIdx(activeIdx - 1)

        // }

        setTimeout(() => {
            if (activeIdx === lstLen - 1 && !isInstant.current) {
                const firsElm = rendListImg[0];
                const newList = rendListImg.filter((v, idx) => idx !== 0)
             
                //console.log("USE-EFFECT isInstant: ",isInstant.current);
                isInstant.current = true
                //console.log("USE-EFFECT isInstant: ",isInstant.current,"\n______________");
                setRendListImg([...newList, firsElm])
                setActiveIdx(lstLen - 2)

                
                
             
                
            } else if (activeIdx === 0 && !isInstant.current) {
                const lastElm = rendListImg[lstLen - 1];
                const newList = rendListImg.filter((v, idx) => idx !== lstLen - 1)
                //console.log("USE-EFFECT isInstant: ",isInstant.current);
                isInstant.current = true
                //console.log("USE-EFFECT isInstant: ",isInstant.current,"\n______________");
                setActiveIdx(1)
                setRendListImg([lastElm, ...newList])
                // isInstant.current = true
            } else {
               isInstant.current = false
            }

        }

            , (!isInstant.current) ? animTime :0 )







    })
    return (

        <div className='ProjectCard'  >
            
                
                {(DebugMode)  ?          <h1> active Idx:  {activeIdx} </h1> :  <></>}
                <div className='Carousel center'>
                    
                    <div className='DisplayHolder'   >
                        <div className='Display' style={{ display: "inline-block", position: "relative", width: "100%", height: "100%" }}>
                           
                    
                            {/* <img src={image} alt={title}/> 
                                    <img src={image} alt={title}/> 
                                    <img src={image} alt={title}/>  */}

                            {/* {lstImage.map((img,idx)=>{
                                        const comp = (idx === activeIdx ) ? (<img src={img} alt={title}/>) :  (<></>)
                                        return comp
                                    })} */}

                            {/* {backgroundImage:`url(${src})`,
                                                                                    backgroundSize:"cover",
                                                                                    backgroundRepeat: 'no-repeat' ,
                                                                                    width:"100%",
                                                                                    height:"100%",
                                                                                    backgroundPosition:"center",
                                                                                    } */}
                            {rendListImg.map((card, idx) => {

                                const {src,id} = card;
                                


                                //console.log(id);

                                return (<div className='DisplayImg' key={id} style={getImgCss(src, activeIdx % lstLen, idx)} >

                                </div>)

                            }
                            )}
                            
                            <img onClick={(e) => changeLeft (e)} className='Arrow Left' src={rightArr} alt="left arrow" style={{ width: `${imgWidth}`, padding: `${imgPadding}` }} />
                            <img onClick={(e) => changeRight(e)} className='Arrow Right' src={rightArr} alt="right arrow" style={{ width: `${imgWidth}`, padding: `${imgPadding}` }} />
                            
                        </div>
                    </div>

                </div>
                <a href={link}>
                    <h2>{title}</h2>
                </a>
                    <p>{descr}</p>
              
            </div>





    )

}




// PROJECTS
// ,naPng,pic1,pic2,pic3
const Lib3Dpy = <Card card={{
    lstImage: [  {src:lib3DimgP1,id:1}, {src:lib3DimgP2,id:2},{ src:lib3DimgP3,id:3},{src:lib3DimgP4,id:4}, {src:lib3DimgP5,id:5} , {src:lib3DimgP6,id:6} ,{src:lib3DimgP7,id:7}],
    title: 'Lib 3D py',
    descrPath: Lib3Ddescr,
    link: "https://github.com/abdukhans/3D-LIB"
}} />


//const RbtVis = <Card card={}

//const lst_cards = [Lib3Dpy,Lib3Dpy,Lib3Dpy,Lib3Dpy,Lib3Dpy, ]
//const lst_cards = [Lib3Dpy, Lib3Dpy,Lib3Dpy,Lib3Dpy]
const lst_cards = [Lib3Dpy, ]



const Socials = () =>{
    return(
    <>
        <h4 id='LetsConnect'>Lets Connect</h4>
        <div className='Socials'>
            {/* <img className="SocialSVG" src={InstaPic} alt="Instagram Link"/> */}
            {/* <img className="SocialSVG" src={GitHub} style={{"scale":`${24/16}`}} alt="GitHub Link"/> */}
            
            <a href='https://github.com/abdukhans' className='center'>
                <img className="SocialSVG" src={GitHub} style={{"width":"24px","height":"24px"}} alt="Instagram Link"/>
            </a>    

            <a href='https://www.linkedin.com/in/abdullah-khan-311033216' >
                <img className='SocialSVG' src={Linkeden} style={{"width":"24px","height":"24px"}}  alt="Linkden Link" />
            </a>
        </div>
    </>)


}



const Home = () =>{
    return(

    <Link className='Home' to="/WebPortfolio"> 
        <img src={BackSvg} alt="Home" style={{"width": "20px"}}/>
    </Link>)
}
const Project = () => {

    const numCols = getNumCols(lst_cards);

    return (
        <>
            <div className='ProjectDiv center' style={{ backgroundColor: "white" }}>
                <Home/>
                <h1 style={{ color: "black" }}>PROJECTS</h1>
                <div className='center' >
                    <div className='CardsHolder' style={CardHolderCss(numCols)} >
                        {lst_cards.map((card) => {
                            return card
                        })}
                    </div>
                </div>
                <Socials/>
            </div>
        </>
    )   
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


export default Project