import "./Error404.css"
import Img from "../../images"
import { useNavigate } from "react-router-dom"

function Error404() {
    const navigate = useNavigate()

    return(
        <div className="error404">
            <div className="err">
               <h1>It's a Error404</h1>
               <img src={Img.error404} width='100%' alt=''/>
               <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>    
        
    )
    
}

export default Error404