import React, { useCallback, useState } from "react"

const withLessMore = (Component) => {
    
    return (props) => {
        const [lessMore, setLessMore] = useState(false)
        const toggleLessMore = useCallback(() => {
           setLessMore(prev => !prev)
        }, [])
        return <Component {...props} 
                          {...{lessMore, toggleLessMore}}
                />
    }
}

export default withLessMore