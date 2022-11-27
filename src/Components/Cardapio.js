import React,{useState,useEffect} from "react";
import style from './Components.module.css'
const List = ({items}) => {
    return(
        <div className={style.ContainerCardapio}>
          <span>
          <img src="https://imagensemoldes.com.br/wp-content/uploads/2022/03/Desenho-Chef-de-Cozinha-PNG-668x1024.png" alt="" />
          </span>
                <div className={style.BordaCa}>
                  <h1>Jirezen</h1>
                </div>
              <div className={style.CardapioCont}>
            {items.map((item) => {
                const {id,title,ingredientes,image,preço} = item;
                return(
                    <ul key={id}>
                        <li className={style.Cardapio}>
                           <h1>{title}</h1>
                           <h2>R${preço}</h2>
                            <h5>{ingredientes}</h5>
                            <img src={image} alt="" />
                        </li>
                    </ul>
                )
            })}
            <br />
            </div>
        </div>
    )
}
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  } else{
    return [];
  }
}
const App = () =>{
  const [list] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  return(
    <div>
        {list.length > 0 && (
          <div>
            <List items={list}/>
          </div>
        )}
    </div>
  )
}
export default App
