import React, { memo } from 'react'


function Carditem (props){

    return(
        <div style={{color: 'whitesmoke'}} className="containerCard">
                                          <div className='delBut'><button onClick={() => props.delCardButton(props.id)}>X</button></div>
                                          <div className="rowCard">{props.model}</div>
                                          <img src={props.img} alt="asd" />
                                          <div className="rowCard">Country: {props.country}</div>
                                          <div className="rowCard">
                                          <span
                                            onClick={() => props.toggleCount('-', props.id, props.count)}
                                          > - </span>
                                             Price: {props.price}
                                          <span
                                            onClick={() => props.toggleCount('+', props.id, props.count)}
                                          > + </span>
                                          </div>
                                          <div className="rowCard"> Count: {props.count}</div>
        </div>
    )
}

export default memo(Carditem)