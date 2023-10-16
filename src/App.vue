<template>
    <app-header />
    <div id="app">
        <router-view />
    </div>
</template>
<script>
import AppHeader from '@Layout/header/AppHeader.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
    },
    computed: {},
    created() {},
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 32px;
    margin-bottom: 32px;
}
</style>
