import {useContext} from 'react';
import Context from '../context/Context';

const Item = (el) => {

const {todo,setTodo} = useContext(Context);
    
    const handleCompleted = e =>{

        const index = todo.findIndex(item=>item.id === el.id);
        const tmpTodo = [...todo];
        tmpTodo[index].completed= e.target.checked;
        setTodo(tmpTodo);
    }

    const handleDelete = _ =>{

        setTodo(todo.filter(item=>item.id !== el.id));
    }

    return (
                
        <li className="liTodo">
        <input onChange={handleCompleted} className="toggle" defaultChecked={el.completed?true:false} type="checkbox" />
        <span>{el.title}</span>
        <button onClick={handleDelete} className="btnDelete" data-id={el.id} >Eliminar</button>
         </li>
       
    )
}

export default Item
