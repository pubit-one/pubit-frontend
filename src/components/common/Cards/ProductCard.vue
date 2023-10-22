<template>
    <div
        class="bg-white rounded-lg shadow-md overflow-hidden h-[20rem] w-[17rem] select-none hover:bg-pubit-light/30"
        @mouseover="showBuyButton = true"
        @mouseleave="showBuyButton = false"
    >
        <div class="relative overflow-hidden">
            <img :src="picture" :alt="product.title" class="w-full" />
        </div>
        <div class="grid py-4 px-6">
            <h3 class="text-base text-black font-bold mb-2">{{ product.title }}</h3>
            <div class="flex justify-between items-center mt-[1rem]">
                <div>
                    <h4 class="text-sm font-medium text-gray-600">Price</h4>
                    <p class="text-sm font-semibold text-gray-900 mt-[0.725rem]">{{ product.price }} DAI</p>
                </div>
                <div>
                    <h4 class="text-sm font-medium text-gray-600">Creator</h4>
                    <p class="text-sm font-semibold text-gray-900 mt-[0.725rem]">{{ product.creator }}</p>
                </div>
            </div>
        </div>
        <div v-if="buyable" class="w-[inherit]">
            <button
                :class="{ '-translate-y-10': showBuyButton }"
                class="relative transition-transform ease-in-out delay-1500 inset-x-0 bottom-0 h-10 px-4 py-2 bg-pubit-heavy text-white rounded-b-lg w-full"
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
