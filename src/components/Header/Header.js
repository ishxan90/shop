import { memo} from "react";
import Item from "../Item/Item";
import "./Header.css"

const Header = () => {

    return(
        <div className="header">
            <h1><i><Item href='/'>Hello React</Item></i></h1>
        </div>
        
    )
}

export default memo(Header)