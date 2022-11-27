import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
import style from './Components.module.css'
const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      },3000);
      return () => clearTimeout(timeout)
  },[list]);
  return <p className={`alert alert-${type}`}>{msg}</p>
}
const List = ({items,removeItem,editItem}) => {
    return(
        <div className="container">
            {items.map((item) => {
                const {id,title,ingredientes,image,preço} = item;
                return(
                    <ul key={id}>
                        <li className={style.Container}>
                            <h1>{title}</h1>
                            <h2>{ingredientes}</h2>
                            <h6>R${preço}</h6>
                            <img src={image} alt="" />
                                <button onClick={() => editItem(id)}>
                                    Editar
                                </button>
                                <button onClick={() => removeItem(id)}>
                                    Remover
                                </button>
                        </li>
                    </ul>
                )
            })}
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
  const [name,setName] = useState("");
  const [ingredientes,setIngredientes] = useState("");
  const [preço,setPreço] = useState("");
  const [image,setImage] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:""});
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!ingredientes,!image,!preço){
      ShowAlert(true,"danger","Please Enter Value")
    }else if(name && isEditing,ingredientes && isEditing,image && isEditing,preço && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item,title:name,ingredientes:ingredientes,image:image,preço:preço}
          }
          return item
        })
      );
      setName("");
      setPreço("");
      setIngredientes("");
      setImage("");
      setEditID(null);
      setIdEditing(false);
      ShowAlert(true,"Sucesso","Editação renovado")
    }else{
      ShowAlert(true,"Sucesso")
      const newItem = {id: new Date().getTime().toString(),title:name,ingredientes:ingredientes,image:image,preço:preço};
      setList([...list,newItem]);
      setName("");
      setPreço("");
      setIngredientes("");
      setImage("");
    }
  };
  const ShowAlert = (show = false, type = "" , msg ="") => {
    setAlert({show,type,msg})
  };
  const removeItem = (id) => {
    ShowAlert(true,"danger","Item Remove")
    setList(list.filter((item) => item.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = list.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(EditItem.title);
    setPreço(EditItem.preço);
    setIngredientes(EditItem.ingredientes);
    setImage(EditItem.image);
  };
  const clearList = () => {
    ShowAlert(true,"danger","Lista Limpa");
    setList([]);
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit} className={style.Api}>
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div>
            <br />
            <h1>Adicionar um Prato novo</h1>
            <input type="text" placeholder="Nome do Prato" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="number" placeholder="Preço do Prato" onChange={(e) => setPreço(e.target.value)} value={preço} />
            <input type="text" placeholder="Ingredientes do Prato" onChange={(e) => setIngredientes(e.target.value)} value={ingredientes} />
            <input type="text" placeholder="Image do Prato" onChange={(e) => setImage(e.target.value)} value={image} />
            <button type="submit">
              {isEditing ? "Editar" : "Enviar"}
            </button>
          </div>
          <br />
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
            <div>
              <button onClick={clearList}>
                Clear all item
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
export default App

