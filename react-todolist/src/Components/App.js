import { Component } from "react";
import FormAddTodo from "./FormAddTodo";
import Header from "./Header";

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
 

  render() {
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
                                  <a className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span className="badge bg-secondary">9</span></a>
                                  <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span className="badge bg-success">9</span></a>
                              </div>
                          </nav>
                          <div className="col-6 mb-2">
                              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                  <div>
                                      hello roocket
                                  </div>
                                  <div>
                                      <button type="button" className="btn btn-info btn-sm">edit</button>
                                      <button type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-6 mb-2">
                              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                  <div>
                                      hello roocket
                                  </div>
                                  <div>
                                      <button type="button" className="btn btn-info btn-sm">edit</button>
                                      <button type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-6 mb-2">
                              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                  <div>
                                      hello roocket
                                  </div>
                                  <div>
                                      <button type="button" className="btn btn-info btn-sm">edit</button>
                                      <button type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                
                  </div>
            </div>
          </main>
      </div>
    )
  }
}


export default App;
