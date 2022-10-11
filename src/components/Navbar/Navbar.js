import Item from "../Item/Item"
import Input from "../Input/Input"
import "./Navbar.css"
import Img from "../../images"
import { React } from "react"

const Navbar = ({ search, setSearch }) => {

    return(
        <div className="navbar"  >
          <i className={'non'}><Item href='/'><img width='60px' src={Img.logo} alt='kskkk'/></Item></i>
          <i><Item href='/'>Home</Item></i>
          <i><Item href='/docs'>Docs</Item></i>
          <i><Item href='/tutorial'>Tutorial</Item></i>
          <i><Item href='/blog'>Blog</Item></i>
          <i><Item href='/comunity'>Comunity</Item></i>
          <i><Item href='/card'>Card</Item></i>
          <i><Item href='/add'>Admin</Item></i>
          <i><Item href='/edit'>Edit</Item></i>
          <Input search={search} setSearch={setSearch} />
        </div>
    )
}

export default Navbar

