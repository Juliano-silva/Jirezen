import React from "react"
import { Link } from "react-router-dom"
import style from "./Components.module.css"
export default function Header(){
    return(
        <div className={style.Header}>
            <span className={style.Icone}></span>
            <Link to="/">Home</Link>
            <Link to="/Cardapio">Cardapio</Link>
        </div>
    )
}
