<template>
    <app-header />
    <div id="app-inner">
        <router-view v-slot="{ Component }">
            <component :is="Component"></component>
        </router-view>
    </div>
    <app-footer />
</template>
<script>
import AppHeader from '@Layout/header/AppHeader.vue'
import AppFooter from '@Layout/footer/AppFooter.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter,
    },
    computed: {},
    created() {},
}
</script>

<style lang="scss">
#app-inner {
    min-height: 75vh;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0, 0, 0, 0.71);
    margin-top: 32px;
    margin-bottom: 32px;
}
</style>
