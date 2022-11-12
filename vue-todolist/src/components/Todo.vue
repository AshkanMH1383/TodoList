<template>
<div class="col-6 mb-2">
    <div class="d-flex justify-content-between align-items-center border rounded p-3"
    v-if="editMode == false">
        <div>
            {{ todo.text }}
        </div>
        <div>
            <button type="button" class="btn btn-info btn-sm" @click="enableEdit">edit</button>
            <button type="button" class="btn btn-danger btn-sm ml-1" @click="$emit('delete-todo' , todo.key)">delete</button>
        </div>
    </div>
    <div class="d-flex justify-content-between align-items-center border rounded p-3"
    v-else>
        <div>
            <input type="text" v-model="todoText">
        </div>
        <div>
            <button type="button" class="btn btn-info btn-sm" @click="editTodo">edit</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
    emits : ['delete-todo' , 'edit-todo'],
    props : { todo : { type : Object , required: true}},
    data() {
        return {
            editMode : false ,
            todoText : ''
        }
    },
    methods: {
        enableEdit() {
            this.editMode = true
            this.todoText = this.todo.text
        },
        editTodo() {
            this.editMode = false
            this.$emit('edit-todo' , {key:this.todo.key , text :this.todoText})
            this.todoText = '';
        }
    },
}
</script>