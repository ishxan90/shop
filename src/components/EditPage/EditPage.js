import "./EditPage.css"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom"

const EditPage = ({cars, search}) => {
    const navigate = useNavigate()
  
    return( 
        <div className='sectionEd'>
           {
            cars.filter(el => el.model.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((car) =>
                <div className="containerEd"  key={uuidv4()}>
                    <div className="rowEd">{car.model}</div>
                    <img src={car.img} alt="asd"/>
                    <div className="rowEd">Country: {car.country}</div>
                    <div className="rowEd"> Price: {car.price} $</div>
                    <button onClick={() => navigate(car.id)}>Edit This Item</button>
                </div>   
                )
            }
         </div>       
    )
}

export default EditPage