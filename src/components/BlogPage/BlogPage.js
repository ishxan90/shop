import  axios  from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import BlogPageItem from "../BlogPageItem/BlogPageItem"
import "./Chat.css"


const BlogPage = ({lessMore, toggleLessMore}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <div className="docsPage">
            {
                data.map(el =>(
                    <BlogPageItem
                       key={el.id}
                       id={el.id}
                       title={el.title}
                       body={el.body} 
                       toggleLessMore={toggleLessMore}
                       lessMore ={lessMore}               
                    /> 
                ))
            }
            
        </div>
    )   
}

export default BlogPage