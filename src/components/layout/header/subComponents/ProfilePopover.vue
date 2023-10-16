<template>
    <PopoverGroup class="hidden lg:flex lg:flex-1 lg:justify-end shrink-0 margin-0 items-center">
        <Popover class="relative">
            <PopoverButton
                ref="btnRef"
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                @click="togglePopover()"
            >
                0 DAI
                <ChevronDownIcon
                    :class="{ 'rotate-180': !popoverShow, transform: popoverShow }"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                />
            </PopoverButton>

            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
                <PopoverPanel
                    ref="popoverRef"
                    :class="{ hidden: !popoverShow, block: popoverShow }"
                    class="absolute -left-8 top-full z-10 mt-3 w-11 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                </PopoverPanel>
            </transition>
        </Popover>
    </PopoverGroup>
</template>

<script>
import { ref } from 'vue'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const btnRef = ref(false)

const popoverRef = ref(false)

export default {
    name: 'ProfilePopover',
    data() {
        return {
            popoverShow: false,
        }
    },
    methods: {
        togglePopover: function () {
            if (this.popoverShow) {
                this.popoverShow = false
            } else {
                this.popoverShow = true
                popoverRef.value
            }
        },
    },
}
</script>
