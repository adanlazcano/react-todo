import { useContext, useRef } from "react";
import Context from "../context/Context";

const Search = () => {

    const refInput = useRef();

    const {newTodo} = useContext(Context);

    const handleSubmit = e =>{
        e.preventDefault();

        if(refInput.current.value !==''){
            const newObj = {

                id: Math.random().toString(32).substring(7),
                title : refInput.current.value,
                completed:false,
                timestamp:new Date()
            }

             newTodo(newObj);

             refInput.current.value='';
        }
    }
  
    return (
        <form onSubmit={handleSubmit} id="formAdd" className="formAdd">
            <input autoFocus={true} ref={refInput} id="inputAdd" className="inputAdd" type="text" />
        </form>
    )
}

export default Search
