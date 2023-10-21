<template>
    <button :class="buttonClass" :type="type">
        <slot />
    </button>
</template>

<script>
import { twMerge } from 'tailwind-merge'
export default {
    name: 'PubitButton',
    props: {
        type: {
            type: String,
            default: 'button',
        },
        btnClass: { type: String, default: '' },
    },
    computed: {
        buttonClass() {
            return twMerge(
                'w-fit min-w-[5rem] px-6 py-2.5 select-none font-normal items-center text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none',
                this.btnClass
            )
        },
    },
}
</script>
