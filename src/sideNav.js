import React from "react"
// import { useState } from "react"
import {Link} from 'react-router-dom'
import { HomeIcon, ContactIcon } from './icons'


const SideLinks = ({text,ref,svg,cur,children}) =>{

    const active = (cur===ref) ?  'active' : ''


    console.log('LOC: ',cur);
    return(
        <div className={'sideLinks ' + active} style={{width:'100%',}}>
            <div className='sideLinksLink center' >
            {svg || <Link to={ref} >{text}</Link>}
            </div>
        </div>
    )
}



// const clickables = [   
//             SideLinks({ text:'contacts', svg:<ContactIcon/> ,  ref: '/contact'}),
//             SideLinks({ text:'resume',   ref: '/resume'}),
//             SideLinks({ text:'project',  ref: '/project'}),
//             SideLinks({text:'', svg:<HomeIcon/> , ref: '/' })]



// {SideLinks({ text:'project', cur:loc ,  ref: '/project'})}
const sideNav = (cur) => {

    const loc = cur.cur
    
    return ( 
    <>
    <div className='sideNav center'>
        <div style={{width:"100%"}} >
            {SideLinks({ text:'contacts', svg:<ContactIcon/> ,cur:loc , ref: '/contact'})}
            {SideLinks({ text:'resume', cur: loc,   ref: '/resume'})}
            {SideLinks({text:'', svg:<HomeIcon/>  , cur:loc , ref: '/' })}
        </div>
    </div>
    </>
    )
}

export default sideNav