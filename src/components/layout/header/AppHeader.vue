<template>
    <header class="bg-white">
        <div class="md:w-11/12 lg:w-11/12 xl:w-8/12 max-w-[2560px] mx-auto my-auto px-4 flex" aria-label="Global">
            <nav class="flex max-h-full w-full justify-between items-center lg:py-1.5 gap-4">
                <div class="items-center h-full flex gap-4">
                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
                            <span class="sr-only">Pubit</span>
                            <img class="h-8 w-auto" src="/logo-pubit.svg" alt="Pubit" />
                        </router-link>
                    </div>
                    <div class="border-l-2 border-gray-400 h-[2.5rem] mx-4" />
                    <div class="hidden sm:flex md:gap-x-12">
                        <router-link to="/#" class="text-sm font-semibold leading-6 text-pubit-dark whitespace-nowrap"
                            >Providers</router-link
                        >
                        <router-link to="/#" class="text-sm font-semibold leading-6 text-pubit-dark whitespace-nowrap"
                            >Docs</router-link
                        >
                        <router-link to="/#" class="text-sm font-semibold leading-6 text-pubit-dark whitespace-nowrap"
                            >White Paper</router-link
                        >
                    </div>
                </div>
                <div class="flex sm:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="flex gap-4">
                    <button
                        type="button"
                        class="flex items-center justify-around font-semibold px-4 w-[8rem] text-gray-900 bg-gray-200 rounded-2xl"
                    >
                        <svg class="h-6 w-6" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30 25V26.6667C30 28.5 28.5 30 26.6667 30H3.33333C1.48333 30 0 28.5 0 26.6667V3.33333C0 1.5 1.48333 0 3.33333 0H26.6667C28.5 0 30 1.5 30 3.33333V5H15C13.15 5 11.6667 6.5 11.6667 8.33333V21.6667C11.6667 23.5 13.15 25 15 25H30ZM15 21.6667H31.6667V8.33333H15V21.6667ZM21.6667 17.5C20.2833 17.5 19.1667 16.3833 19.1667 15C19.1667 13.6167 20.2833 12.5 21.6667 12.5C23.05 12.5 24.1667 13.6167 24.1667 15C24.1667 16.3833 23.05 17.5 21.6667 17.5Z"
                                fill="black"
                            />
                        </svg>
                        {{ DAIBalance }} DAI
                    </button>
                    <profile-popover v-if="accounts" /> <connect-wallet v-else class="hidden sm:flex" />
                </div>
            </nav>
        </div>

        <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
                        <span class="sr-only">Pubit</span>
                        <img class="h-8 w-auto" src="/logo-pubit.svg" alt="Pubit" />
                    </router-link>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <router-link
                                to="/#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Providers</router-link
                            >
                            <router-link
                                to="/#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Docs</router-link
                            >
                            <router-link
                                to="/#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >White Paper</router-link
                            >
                        </div>
                        <!-- <div class="py-6">
                            <router-link
                                to="/#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Connect</router-link
                            >
                        </div> -->
                        <div class="py-6">
                            <!-- <Disclosure v-slot="{ open }" as="div" class="-mx-3">
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    0 DAI
                                    <ChevronDownIcon :class="open && 'rotate-180 transform'" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2"> </DisclosurePanel>
                            </Disclosure> -->
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script>
// import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    //  Disclosure, DisclosureButton, DisclosurePanel
} from '@headlessui/vue'
import ConnectWallet from './subComponents/ConnectWallet.vue'
import { mapState, mapActions } from 'pinia'

import useUserStore from '@Store/user'
// import { storeToRefs } from 'pinia'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/20/solid'

// ]
import ProfilePopover from './subComponents/ProfilePopover.vue'
export default {
    name: 'AppHeader',
    components: {
        ProfilePopover,
        ConnectWallet,
        Dialog,
        DialogPanel,
        Bars3Icon,
        XMarkIcon,
    },
    data() {
        return { mobileMenuOpen: false }
    },
    computed: {
        ...mapState(useUserStore, ['accounts', 'isConnected', 'DAIBalance']),
    },
    methods: {},
}
</script>
