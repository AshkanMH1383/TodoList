<template>
    <nav class="col-6 mb-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span class="badge badge-secondary">9</span></a>
            <a class="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span class="badge badge-success">9</span></a>
        </div>
    </nav>
        <Todo v-for="todo in todos" :todo="todo" :key="todo.key"
        @delete-todo="$emit('delete-todo' , $event)" />

      
</template>
<script>
import Todo from './Todo.vue';
export default {
    emits : ['delete-todo'],
    props :{
        todos: {
            type: Array,
            required : true
        }
    },
    components : { Todo }
}
</script>