<template>
  <HeaderVue />
  <main>
    <section class="jumbotron">
      <div class="container d-flex flex-column align-items-center">
          <h1 class="jumbotron-heading">Welcome!</h1>
          <p class="lead text-muted">To get started, add some items to your list:</p>
          <Formaddtodo />
      </div>
    </section>
    <div class="todosList">
        <div class="container">
            <div class="d-flex flex-column align-items-center ">
                <Todolist :todos="todos" />
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
      todos : [
        {key: 1 , done: true, text: 'mytodo1'},
        {key: 2 , done: false, text: 'mytodo2'},
        {key: 3 , done: true, text: 'mytodo3'},
      ],
    }
  },
}
</script>