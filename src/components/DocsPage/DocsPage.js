import  axios  from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./DocsPage.css"
import Container from "../Container/Container"
import Loading from "../Loading/Loading"

function DocsPage() {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const navigate = useNavigate()

    const [fetch, setFetch] = useState(true)
    const [page, setPage] = useState(1)
    const [maxCount, setMaxCount] = useState(0)

    useEffect(()=> {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (fetch && maxCount > data.length || maxCount === 0) {
            axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: 20,
                _page: page
            }
        })
            .then((response) => {
                setMaxCount(+response.headers['x-total-count']);
                let initialData = response.data.map(el =>({
                    id: el.id, 
                    model: el.title.slice(0, el.title.indexOf(' ')),
                    country: el.title.slice(el.title.indexOf(' '), el.title.indexOf(' ', el.title.indexOf(' ') + 1)).slice(1),
                    price: Math.floor(Math.random() * 100 + 1) * 100,
                    img: el.url
                }))
                setPage(prev => prev + 1)
                setData([...data, ...initialData])
                setLoad(false)
            })
            .catch((err) => {
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
            {
                load && <Loading/>
            }
            {
                data.map(el =>(
                    <Container key = {el.id}
                               id={el.id}
                               model = {el.model}
                               country = {el.country}
                               price = {el.price}
                               img ={el.img}
                    />
                ))
            }           
        </div>
    )
}

export default DocsPage