
import React from "react";
const TodoList =({todos,setTodos,setEditTodo}) => {
    const handleComplete=(todo) =>{
        setTodos(
            todos.map((item) =>{
                if(item.id==todo.id){
                    return{...item,completed: !item.completed};
                }
                return item;
            })
        );
    };
    const handleEdit=({id}) =>{
        const findTodo=todos.find((todo) => todo.id===id);
        setEditTodo(findTodo);
    }
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo) => todo.id !==id));
    }
    return(
        <div>
        {todos.map((todo) =>(
        <li className= "list-item" key={todo.id}>
        <input type="text"
         value={todo.title}
        className= {`list ${todo.completed ? "complete" :""}`} 

         onChange={(event) => event.preventDefault()}
         />
         <div>
               
             <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                 <i class="far fa-list-alt"></i>
                  </button>
             <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                 <i class="far fa-edit"></i>
             </button>
             <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
             <i class="far fa-trash-alt"></i>
               
             </button>
         </div>
        </li>
        )
    )}
    </div>)
    

    const removeTodo = id => {
        const removeArr =[...todos].filter(todo => todo.id !==id)

        setTodos(removeArr);
    }
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id=== id){
                todo.isComplete =!todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
  return (
  <div>


  //</div>
  );
};

export default TodoList;