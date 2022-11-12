<template>
<div class="form-inline">
    <div class="form-group">
        <input type="text" v-model="todoText" class="form-control mx-sm-3" placeholder="i want to do ..."/>
        <button class="btn btn-primary" @click="addTodo">add</button>
    </div>
</div>    
</template>

<script>
export default {
    data() {
        return {
            todoText : ''
        }
    },
    methods: {
        addTodo() {
            console.log(this.todoText);
            this.$emit('add-todo' , this.todoText)
            this.todoText = ''
        }
    },
}
</script>