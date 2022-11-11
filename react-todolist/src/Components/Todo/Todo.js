import { useState , useContext } from "react";
import EditTodo from "./EditTodo";
import TodosContext from './../../Context/todos';

function Todo(props) {
    const [edit , setEdit] = useState(false);
    const todosContext = useContext(TodosContext);

    let editHandler = text => {
        todosContext.edit(props.item.key ,text);
        setEdit(false);
    }
    return (
       <>
       { 
            !edit
                    ? (
                        <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                            { props.item.text }
                            </div>
                            <div>
                                <button type="button" className={`btn btn-sm ms-1 ${ props.item.done ? 'btn-secondary' : 'btn-success'}`}  onClick={ () => todosContext.done(props.item.key) }>{ props.item.done ? 'undone' : 'done'}</button>
                                <button type="button" className="btn btn-info btn-sm ms-1" onClick={ () => setEdit(true) }>edit</button>
                                <button type="button" className="btn btn-danger btn-sm ms-1" onClick={ () => todosContext.delete(props.item.key) }>delete</button>
                            </div>
                        </div>
                    </div>
                    )
                    :
                    <EditTodo text={props.item.text} edit={editHandler} />
       }
       </>
    )
}

export default Todo;

