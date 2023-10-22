<template>
    <app-header />
    <section id="app-inner" class="md:w-11/12 lg:w-11/12 xl:w-8/12 max-w-[2560px] mx-auto my-auto px-4 py-[4rem]">
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
