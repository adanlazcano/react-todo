import { useContext } from "react";
import Context from "../context/Context";
import Item from "./Item";

const List = () => {

    const {todo} = useContext(Context);

    return (
        <>
        {
        todo.length > 0 
        &&
            <div className="list">
                <ol id="listAdd" className="listAdd">
        
                    {todo.map(el =>(
                        <Item key={el.id} {...el}/>
                    ))}
        
                </ol>
            </div>
        }
    </>
    )
}

export default List
