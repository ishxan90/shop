import React from "react"
import withLessMore from "../../hoc/withLessMore"

const BlogPageItem = withLessMore(({id, body, title, lessMore, toggleLessMore}) => {

    return (
        <React.Fragment key = {id}>
            <h2>{title}</h2>
            <p> {body.slice(0, lessMore ? -1 : 20)}
                <span className="lessMore"
                    onClick={toggleLessMore}>
                    {lessMore ? 'less' : '...more'}
                </span>
            </p>         
        </React.Fragment>   
    )
})

export default BlogPageItem