<template>
  <HeaderVue />
  <main>
    <section class="jumbotron">
      <div class="container d-flex flex-column align-items-center">
          <h1 class="jumbotron-heading">Welcome!</h1>
          <p class="lead text-muted">To get started, add some items to your list:</p>
          <Formaddtodo @add-todo="addTodo" />
      </div>
    </section>
    <div class="todosList">
        <div class="container">
            <div class="d-flex flex-column align-items-center ">
                <Todolist :todos="todos" @delete-todo="deleteTodo"/>
           </div>
        </div>
    </div>
  </main>
</template>

<script>
import HeaderVue from './components/Header.vue';
import Todolist from './components/Todolist.vue';
import Formaddtodo from './components/Formaddtodo.vue';
export default {
  components : {HeaderVue, Todolist, Formaddtodo} , 
  data() {
    return {
      todos : [ ],
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        key : Date.now(),
        done : false ,
        text
      })
    },
    deleteTodo(key) {
      this.todos = this.todos.filter(item => item.key != key)
    }
  },
}
</script>