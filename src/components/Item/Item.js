import { memo, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './Item.css'

const Item = (props) => {
 
  return(
       <div className="navitem">
           <ul>
               <li>
                 <NavLink to={props.href}>{props.children}</NavLink>
              </li>
           </ul>
       </div>
   )
}

export default memo(Item)