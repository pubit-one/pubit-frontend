<template>
    <app-header />
    <section id="app-inner" class="md:w-11/12 lg:9/12 mx-auto my-auto">
        <router-view></router-view>
    </section>

    <app-footer />
</template>

<script>
import AppHeader from '@Layout/header/AppHeader.vue'
import AppFooter from '@Layout/footer/AppFooter.vue'
export default {
    name: 'HeaderFooterContainer',
    components: { AppHeader, AppFooter },
}
</script>
