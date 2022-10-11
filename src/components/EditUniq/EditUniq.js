import { useRef } from "react"
import { useNavigate, useParams,  } from "react-router-dom"
import "./EditUniq.css"

const EditUniq = ({cars, setCars}) => {
    const params = useParams()
    const navigate = useNavigate()
    const formRef = useRef(null)

    const submitHandler = (e) =>{
        e.preventDefault()

        setCars([
            ...cars.map(el => {
                if (el.id === params.id){
                    return{
                        id:el.id,
                        model: formRef.current[0].value ? formRef.current[0].value : el.model,
                        img: formRef.current[1].value ? formRef.current[1].value : el.img,
                        country: formRef.current[2].value ? formRef.current[2].value : el.country,
                        price: formRef.current[3].value ? formRef.current[3].value : el.price
                    }
                }
                return el
            })
        ])

        formRef.current[0].value = ''
        formRef.current[1].value = ''
        formRef.current[2].value = ''
        formRef.current[3].value = ''
    }

  
    return ( 
        <div className='sectionEdUn'>
          <div className="containerEdUn">
             <div className="rowEdUn">{cars.filter(el => el.id === params.id)[0].model}</div>
             <img src={cars.filter(el => el.id === params.id)[0].img} alt="asd"/>
             <div className="rowEdUn">Country: {cars.filter(el => el.id === params.id)[0].country}</div>
             <div className="rowEdUn"> Price: {cars.filter(el => el.id === params.id)[0].price} $</div> 
             <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="containerEdForm">
            <form className="formInp" ref = {formRef} onSubmit={submitHandler}>
                <input type = 'text' placeholder="Model"/><br/>
                <input type = 'text' placeholder="Img"/><br/>
                <input type = 'text' placeholder="Country"/><br/>
                <input type = 'number' placeholder="Price"/><br/>
                <button>Edit</button>    
            </form> 
          </div>
        </div>       
    )
}

export default EditUniq
