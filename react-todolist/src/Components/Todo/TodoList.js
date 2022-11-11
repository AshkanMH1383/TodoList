import { useState , useContext } from 'react';
import Todo from './Todo';
import TodosContext from './../../Context/todos';

function TodoList(props) {
    const [statusDone , setDone ] = useState(false);
    const todosContext = useContext(TodosContext);
    let { todos } = todosContext;
    let filterTodos = todos.filter(item => item.done == statusDone )
    return (
        <div className="d-flex flex-column align-items-center ">
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link font-weight-bold ${ !statusDone ? 'active' : ''}`} id="nav-home-tab" onClick={() => setDone(false)}>
                    undone <span className="badge bg-secondary">{ todos.filter(item => item.done == false).length }</span></a>
                    <a className={`nav-item nav-link font-weight-bold ${ statusDone ? 'active' : ''}`} id="nav-profile-tab" onClick={() => setDone(true)}>
                    done <span className="badge bg-success">{ todos.filter(item => item.done == true).length }</span></a>
                </div>
            </nav>
            {
            filterTodos.length == 0
                ?  <p>there isnt any todos</p>
                :   filterTodos.map(item => <Todo 
                        key={item.key} 
                        item={item} 
                        />
                )
            }
        </div>
    )
}

export default TodoList;

