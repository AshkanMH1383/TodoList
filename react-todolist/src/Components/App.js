import { Component } from "react";
import FormAddTodo from "./Todo/FormAddTodo";
import Header from "./Layout/Header";
import Todo from "./Todo/Todo";
import TodoList from "./Todo/TodoList";
import TodosContext from "../Context/todos";
class App extends Component {
  state = {
    todos : []
  }

  addTodo(text) {
    console.log('submit : ' + text)
    this.setState(prevState => {
      return {
        todos : [
          ...prevState.todos,
          { key: Date.now() , done : false , text : text }
        ]
      }
    })
  }
 
  deleteTodo(key) {
    this.setState(prevState => {
      return {
        todos : prevState.todos.filter(item => item.key !== key)
      }
    })
  }

  toggleTodo(key) {
    let { todos } = this.state;
    let item = todos.find(item => item.key == key);
    item.done = !item.done ;
    let newTodos = todos.filter(item => item.key !== key)
    this.setState( {
      todos : [
        ...newTodos,
        item
      ]
    })
  }

  editTodo(key , text) {
    let { todos } = this.state;
    let item = todos.find(item => item.key == key);
    item.text = text ;
    let newTodos = todos.filter(item => item.key !== key)
    this.setState( {
      todos : [
        ...newTodos,
        item
      ]
    })
  }

  render() {
    return (
      <TodosContext.Provider value={{
        todos: this.state.todos,
        add: this.addTodo.bind(this),
        delete: this.deleteTodo.bind(this),
        done: this.toggleTodo.bind(this),
        edit: this.editTodo.bind(this)
      }} >
        <div className="App">
          <Header />
          <main>
            <section className="jumbotron bg-light py-5">
              <div className="container d-flex flex-column align-items-center">
                  <h1 className="jumbotron-heading">Welcome!</h1>
                  <p className="lead text-muted">To get started, add some items to your list:</p>
                  <FormAddTodo/>
              </div>
            </section>
            <div className="todosList mt-4">
                  <div className="container">
                      <TodoList />
                  </div>
            </div>
          </main>
      </div>
      </TodosContext.Provider>
    )
  }
}


export default App;
