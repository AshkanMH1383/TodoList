<template>
<div class="col-6 mb-2">
    <div class="d-flex justify-content-between align-items-center border rounded p-3">
        <div>
            {{ todo.text }}
        </div>
        <div>
            <button type="button" class="btn btn-info btn-sm">edit</button>
            <button type="button" class="btn btn-danger btn-sm ml-1" @click="$emit('delete-todo' , todo.key)">delete</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
    emits : ['delete-todo'],
    props : { todo : { type : Object , required: true}}
}
</script>