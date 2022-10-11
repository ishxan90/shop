import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminAddItem from '../AdminAddItem/AdmiAdditem'
import "./AdminAddPage.css"

function AddElement({cars, setCars}) {
    const formRef = useRef(null)
    const navigate = useNavigate()
    
    const submitHandller = (e) => {
        e.preventDefault()

        if (formRef.current[0].value !== '' 
            && formRef.current[1].value !== ''
            && formRef.current[2].value !== ''
            && formRef.current[3].value !== ''
            ) {
            
                setCars([
                    ...cars,
                    {
                        id: new Date().getTime().toString(),
                        img: formRef.current[0].value,
                        model: formRef.current[1].value,
                        country: formRef.current[2].value,
                        price: +formRef.current[3].value
                    }
                ])
                
        }
        formRef.current[0].value = ''
        formRef.current[1].value = ''
        formRef.current[2].value = ''
        formRef.current[3].value = ''

        navigate('/')
    }
    
  return (
    <>
        <AdminAddItem 
           submitHandller={submitHandller}
           formRef={formRef}
        />
    </>
  )
}

export default AddElement