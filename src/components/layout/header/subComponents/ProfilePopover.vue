<template>
    <PopoverGroup class="hidden lg:flex lg:flex-1 lg:justify-end shrink-0 margin-0 items-center">
        <Popover class="relative">
            <PopoverButton
                ref="btnRef"
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-gray-200 rounded-full p-1"
                @click="togglePopover()"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                    <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                    />
                </svg>
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
                    class="absolute min-w-[14rem] -right-0 top-full z-10 mt-0 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 w-[100w-10px]"
                >
                    <router-link :to="{ name: 'Profile', params: { address: accounts[0] } }"
                        ><pubit-popover-button>Profile</pubit-popover-button></router-link
                    >
                    <router-link to="/under-construction">
                        <pubit-popover-button>Licenses</pubit-popover-button></router-link
                    >
                    <pubit-popover-section>
                        <disconnect-wallet />
                    </pubit-popover-section>

                    <router-link to="/under-construction"
                        ><pubit-popover-button>Help Center</pubit-popover-button></router-link
                    >
                </PopoverPanel>
            </transition>
        </Popover>
    </PopoverGroup>
</template>

<script>
import { ref } from 'vue'

import DisconnectWallet from './DisconnectWallet.vue'
import PubitPopoverSection from '@Components/common/Popovers/subComponents/PubitPopoverSection.vue'
import PubitPopoverButton from '@Components/common/Popovers/subComponents/PubitPopoverButton.vue'

import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import { mapState } from 'pinia'
import useUserStore from '@Store/user'

const btnRef = ref(false)

const popoverRef = ref(false)

export default {
    name: 'ProfilePopover',
    components: {
        DisconnectWallet,
        PubitPopoverSection,
        PubitPopoverButton,
        Popover,
        PopoverButton,
        PopoverPanel,
        PopoverGroup,
        // ChevronDownIcon,
    },
    data() {
        return {
            popoverShow: false,
        }
    },
    computed: {
        ...mapState(useUserStore, ['accounts']),
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
