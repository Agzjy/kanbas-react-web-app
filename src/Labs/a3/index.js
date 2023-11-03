import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Todos from "./todos";
import { useSelector } from "react-redux";


// import DynamicStyling from "./DynamicStyling";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

     <Todos/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     {/* <DynamicStyling/> */}


   </div>
 );
}
export default Assignment3;