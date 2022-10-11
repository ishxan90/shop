import { memo } from "react";

function Input({ search, setSearch }){

  const changeSearch = (e) =>{
     setSearch(e.target.value)
  }

  return(
     <input value={search} onChange={changeSearch} type='text' placeholder="Search"/>
     )
}

export default memo(Input)






// import React, { useState, useRef } from 'react'

// function Input() {
//   const [txt, setTxt] = useState('');
//   const formRef = useRef(null)

//   return (
//     <>
//       <form ref={formRef} onSubmit={(e) => {
//         e.preventDefault()
//         setTxt(formRef.current[0].value)
//         formRef.current[0].value = ''
//       }}>
//         <input type="text" />
//         <button>Add</button>
//       </form>
//       <h2>{txt}</h2>
//     </>
//   )
// }

// export default Input