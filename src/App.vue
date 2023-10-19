<template>
    <app-header />
    <div id="app-inner" class="md:w-11/12 lg:9/12 mx-auto my-auto">
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
    padding: 4rem 10rem;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0, 0, 0, 0.71);
    margin-top: 32px;
    margin-bottom: 32px;
}
</style>
