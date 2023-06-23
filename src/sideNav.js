import React from "react"
import {Link} from 'react-router-dom'
import { HomeIcon, ContactIcon } from './icons'


const SideLinks = ({text,ref,svg,children}) =>{
    return(
        <div className='sideLinks' style={{width:'100%',}}>
            <div className='sideLinksLink center' >
            {svg || <Link to={ref} >{text}</Link>}
            </div>
        </div>
    )
}

const sideNav = () => {
    return ( 
    <div className='sideNav center'>
        <div style={{width:"100%"}} >
            {SideLinks({ text:'contacts', svg:<ContactIcon/> ,  ref: '/contact'})}
            {SideLinks({ text:'resume',   ref: '/resume'})}
            {SideLinks({ text:'project',  ref: '/project'})}
            {SideLinks({text:'', svg:<HomeIcon/> , ref: '/' })}
        </div>
    </div>
    )
}

export default sideNav