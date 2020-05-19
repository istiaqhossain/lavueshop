<template>
    <div>
        <div class="container">
            <h1 class="display-4 text-center my-5">{{ name }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: 'Home'      
        }
    },
}
</script>