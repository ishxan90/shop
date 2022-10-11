import React, { useCallback } from 'react'
import Carditem from '../CardItem/Carditem';
import "./Card.css"

function Card({cards, setCards}) {
   
  const delCardButton = useCallback((id) => {
    setCards((prev) => prev.filter((element) => element.id !== id))
  }, [])


  const toggleCount = useCallback((op, id, count) => {
    if (count === 1 && op === '-') {
      setCards(prev=> [
        ...prev.filter(el => el.id !== id)
      ])
    }else{
      setCards(prev=> [
        ...prev.map(el => {
          if (el.id === id) {
            return {
              ...el,
              count: op === '+' ? el.count + 1 : el.count - 1 ,
              price: op === '+' ? el.price + (el.price / el.count) : el.price - (el.price / el.count),
            }
          }
          return el
        })
      ])
    }
  }, [])


  return (
    <>
      {!!cards.length &&  
      <>
        <h1>Producs Count: {cards.map(el => el.count).reduce((acc, el) => acc + el)}</h1><br/> 
        <h1>Price: {cards.map(el => el.price).reduce((acc, el) => acc + el)}$</h1><br/>
      </>
      }
      <div className='sectionCard'>
          {
                cards.map(el => (
                     <Carditem
                         key ={el.id}
                         id={el.id}
                         model={el.model}
                         img={el.img}
                         country={el.country}
                         price={el.price}
                         toggleCount={toggleCount}
                         delCardButton={delCardButton}
                         count={el.count}
                     />))
          }
      </div>
    </>  
  )
}

export default Card


