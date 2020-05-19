<template>
    <div>
        <div class="container">
            <h1 class="display-4 text-center my-5">{{ name }}</h1>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Auth',
    data(){
        return {
            name: 'Lavueshop Auth',
        }
    }
}
</script>