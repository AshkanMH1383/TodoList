import { Component } from "react";
import FormAddTodo from "./FormAddTodo";
import Header from "./Header";
import Todo from "./Todo";

class App extends Component {
  state = {
    todos : [],
    statusDone : false
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
    let { todos , statusDone } = this.state;
    let filterTodos = todos.filter(item => item.done == statusDone )
    console.log(filterTodos)
    return (
      <div className="App">
          <Header />
          <main>
            <section className="jumbotron bg-light py-5">
              <div className="container d-flex flex-column align-items-center">
                  <h1 className="jumbotron-heading">Welcome!</h1>
                  <p className="lead text-muted">To get started, add some items to your list:</p>
                  <FormAddTodo add={ this.addTodo.bind(this) }/>
              </div>
            </section>
            <div className="todosList mt-4">
                  <div className="container">
                      <div className="d-flex flex-column align-items-center ">
                          <nav className="col-6 mb-3">
                              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                  <a className={`nav-item nav-link font-weight-bold ${ !statusDone ? 'active' : ''}`} id="nav-home-tab" onClick={() => this.setState({statusDone : false})}>
                                    undone <span className="badge bg-secondary">{ todos.filter(item => item.done == false).length }</span></a>
                                  <a className={`nav-item nav-link font-weight-bold ${ statusDone ? 'active' : ''}`} id="nav-profile-tab" onClick={() => this.setState({statusDone : true})}>
                                    done <span className="badge bg-success">{ todos.filter(item => item.done == true).length }</span></a>
                              </div>
                          </nav>
                          {
                            filterTodos.length == 0
                              ?  <p>there isnt any todos</p>
                              :   filterTodos.map(item => <Todo 
                                                                key={item.key} 
                                                                item={item} 
                                                                delete={this.deleteTodo.bind(this)}
                                                                done={this.toggleTodo.bind(this)}
                                                                edit={this.editTodo.bind(this)}
                                                                />
                              )
                          }
                      </div>
                  </div>
            </div>
          </main>
      </div>
    )
  }
}


export default App;
