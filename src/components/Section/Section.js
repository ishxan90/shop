import "./Section.css"
import Container from "../Container/Container"
import { useEffect, useState } from "react"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

const Section = ({cars, setCars, search}) => {

    const navigate = useNavigate()
    const [fetch, setFetch] = useState(true)
    const [maxCount, setMaxCount] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(()=> {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }

    }, [])

    useEffect(() => {
        if (fetch && maxCount > cars.length || maxCount === 0){
            axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                _limit: 20,
                _page: page
            }
        })
            .then((response) => {
                setMaxCount(+response.headers['x-total-count'])
                let initialData = response.data.map(el =>({
                    id: el.id.toString(), 
                    model: el.title.slice(0, el.title.indexOf(' ')),
                    country: el.title.slice(el.title.indexOf(' '), el.title.indexOf(' ', el.title.indexOf(' ') + 1)).slice(1),
                    price: Math.floor(Math.random() * 100 + 1) * 1000,
                    img: el.url
                }))
                setPage(prev => prev + 1)
                setCars([...cars, ...initialData])
            })
            .catch((err) =>{
                navigate(`/error${err.response.status}`)
            })
            .finally(() => {
                setFetch(false)
            })
        }
        
    }, [fetch])

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 400){
            setFetch(true)
        }
    }

    return(
        <div className="section">
            {cars.filter(el => el.model.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((car) => 
                                          <Container key={uuidv4()}  
                                          id={car.id} 
                                          model={car.model}
                                          country={car.country}
                                          price={car.price}
                                          img={car.img}                          
            />)}  
        </div>
    )
}

export default Section











// const Section = () => {

//     const cars = [
//         {id:1, model:'Merseders', country: 'Germany', price:'32000$', img: Img.nkar1},
//         {id:2, model:'BMW', country: 'Germany', price:'28000$', img: Img.nkar2},
//         {id:3, model:'Opel', country: 'Germany', price:'3200$', img: Img.nkar3},
//         {id:4, model:'Hyundai', country: 'Japan', price:'14000$', img: Img.nkar4},
//         {id:5, model:'Aston-Martin', country: 'England', price:'36000$', img: Img.nkar1},
//         {id:6, model:'Dodge', country: 'USA', price:'52000$', img: Img.nkar2},
//         {id:7, model:'Lexus', country: 'Japan', price:'96000$', img: Img.nkar3},
//         {id:8, model:'Toyota', country: 'Japan', price:'34000$', img: Img.nkar4},
//         {id:9, model:'Jeep', country: 'USA', price:'19000$', img: Img.nkar1}
//     ]

//     const [data, setData] = useState(cars)


//     return(
//             <div className="section">
//                 {data.map((car) =>{
//                     const{id, model, country, price, img} = car;
//                     return(
//                         <Container key={id}
//                                    id={id} 
//                                    model={model}
//                                    country={country}
//                                    price={price}
//                                    img={img}  
                                  
//                         />)
//                 })}            
//             </div>         
//           )
// }
// export default Section





