import "./Container.css"
import Item from "../Item/Item"


const Container = (props) => {

    return(
          <div className="container">
            <Item href={'/home/' + props.id}>
                <div className="row">{props.model}</div>
                <img src={props.img} alt="no picture"/>
                <div className="row">Country: {props.country}</div>
                <div className="row"> Price: {props.price} $</div>
            </Item>
         </div>
        
    )
}

export default Container