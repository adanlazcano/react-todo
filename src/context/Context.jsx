import { createContext,useState } from "react";

const Context = createContext();

const ContextProvider = ({children}) =>{

    const [todo,setTodo] = useState([]);

    const newTodo = el =>{

      setTodo([el,...todo]);
   
    }

    const data = {todo,setTodo,newTodo};

    return <Context.Provider value ={data}>
                {children}
            </Context.Provider>
}

export {ContextProvider};
export default Context;