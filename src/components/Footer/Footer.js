import { memo } from "react"
import "./Footer.css"

const Footer = () =>{

    return(
        <div className="footer">
            <ul>
                <li>
                    <a href='https://www.instagram.com' target="blank">Instagram</a>
                    <a href='https://www.facebook.com' target="blank">Facebook</a>
                    <a href='https://www.twitter.com' target="blank">Twitter</a>
                    <a href='https://www.youtube.com' target="blank">Youtube</a>
                </li>
            </ul>
                
        </div>
    )
}

export default memo(Footer)










// * ********************** *//
// Classov tarberak


// import Navitem from "../Navitem/Navitem"
// import "./Footer.css"
// import React from "react"
// import {Component} from "react"

// class Footer extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             color: 'brown'
//         }
//     }

 
//     render(){
//         return(
//             <div className="footer" style={{backgroundColor: this.state.color}}>
//                  <Navitem title={'Instagram'}/>
//                  <Navitem title={'Facebook'}/>
//                  <Navitem title={'Twitter'}/>
//                  <Navitem title={'Youtube'}/> 
//             </div>
//         )
//     }
// }

// export default Footer