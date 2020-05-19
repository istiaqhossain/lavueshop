<template>
    <div>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </div>
</template>

<script>
import Default_Layout from './Default'
import Auth_Layout from './Auth'

export default {
    name: 'Master',
    components: {
        Default_Layout,
        Auth_Layout,
    },
    computed: {
        layout() {
            return (this.$route.meta.layout) ? this.$route.meta.layout : 'Default_Layout';
        }
    }
}
</script>