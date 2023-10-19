<template>
    <div class="p-1">
        <pubit-button
            type="button"
            btn-class="bg-white text-gray-800 w-full h-[3rem] text-left hover:bg-gray-50 rounded-xl"
        >
            <slot />
        </pubit-button>
    </div>
</template>

<script>
import PubitButton from '@Components/common/Buttons/PubitButton.vue'

export default {
    name: 'PubitPopoverButton',

    components: { PubitButton },
}
</script>
