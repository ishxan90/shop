import "./UniqElem.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const UniqElem = ({cars, cards, setCards}) => {
    const params = useParams()
    const navigate = useNavigate()
    const [auto, setAuto] = useState({})

    useEffect (() => {    
        if(cars.filter(el => el.id === params.id)[0]){
            setAuto(cars.filter(el => el.id === params.id)[0])
        }else{
            axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
                  .then((response) =>{
                    let initialAuto = {
                        id: response.data.id.toString(), 
                        model: response.data.title.slice(0, response.data.title.indexOf(' ')),
                        country: response.data.title.slice(response.data.title.indexOf(' '), response.data.title.indexOf(' ', response.data.title.indexOf(' ') + 1)).slice(1),
                        price: Math.floor(Math.random() * 100 + 1) * 1000,
                        img: response.data.url
                    }
                    setAuto(initialAuto)
                  })
        }   
    }, [])

    
    const addToCard = () => {
                if (cards.filter(el => el.id === auto.id)[0]) {
                    setCards(
                        [
                            ...cards.map(el => {
                                if(el.id === auto.id){
                                    return {
                                        ...el,
                                        count: el.count + 1,
                                        price: el.price + auto.price 
                                    }
                                }
                                return el
                            })
                        ] 
                    )
                }else{
                    setCards(
                    [
                        ...cards, 
                        {
                            ...auto,
                            count: 1
                        }
                    ]
                    ) 
                }
                    navigate('/card')
    }


    return(
            <div className="containerUn">
                <div className="row">{auto.model}</div>
                <img src={auto.img} alt="asd"/>
                <div className="row">Country: {auto.country}</div>
                <div className="row"> Price: {auto.price}</div>
                <button onClick={addToCard}>Add to Card</button>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
          )
}
     
export default UniqElem            