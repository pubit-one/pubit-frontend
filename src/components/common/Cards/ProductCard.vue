<template>
    <div
        class="bg-white rounded-lg shadow-md overflow-hidden select-none hover:bg-pubit-light/30"
        @mouseover="showBuyButton = true"
        @mouseleave="showBuyButton = false"
    >
        <div class="relative h-52 overflow-hidden">
            <img :src="picture" :alt="product.title" class="w-full" />
        </div>
        <div class="grid p-4 h-32">
            <h3 class="text-base text-black font-bold mb-2">{{ product.title }}</h3>
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="text-sm font-medium text-gray-600">Price</h4>
                    <p class="text-sm font-semibold text-gray-900">{{ product.price }} DAI</p>
                </div>
                <div>
                    <h4 class="text-sm font-medium text-gray-600">Creator</h4>
                    <p class="text-sm font-semibold text-gray-900">{{ product.creator }}</p>
                </div>
            </div>
        </div>
        <div v-if="buyable" class="relative">
            <button
                :class="{ '-translate-y-10': showBuyButton }"
                class="transition-transform ease-in-out delay-1500 absolute inset-x-0 -bottom-10 h-10 px-4 py-2 bg-pubit-heavy text-white rounded-b-lg w-full"
            >
                Buy
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
        buyable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showBuyButton: false,
        }
    },
    computed: {
        picture() {
            return this.product.poster ? this.product.poster : '/contractual-obligations2.png'
        },
    },
}
</script>

<style></style>
