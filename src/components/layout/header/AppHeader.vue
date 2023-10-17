<template>
    <header class="bg-white">
        <div class="mx-auto w-full flex max-w-[2560px] px-4 sm:px-8 xxl:px-16" aria-label="Global">
            <nav class="flex max-h-full w-full justify-between items-center lg:py-1.5 gap-4">
                <div class="items-center h-full flex gap-4">
                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Pubit</span>
                            <img class="h-8 w-auto" src="logo" alt="Pubit" />
                        </a>
                    </div>
                    <div class="hidden sm:flex md:gap-x-12">
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap"
                            >Providers</a
                        >
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap">Docs</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap"
                            >White Paper</a
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
                <profile-popover v-if="accounts" />
                <connect-wallet v-else class="hidden sm:flex" />

                <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                    >Connect <span aria-hidden="true">&rarr;</span></a
                >
            </div> -->
            </nav>
        </div>

        <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <!-- <span class="sr-only">Logo</span> -->
                        <!-- <img
                            class="h-8 w-auto"
                            src="Logo"
                            alt="Pubit"
                        /> -->
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Providers</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Docs</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >White Paper</a
                            >
                        </div>
                        <!-- <div class="py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Connect</a
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
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import ConnectWallet from './subComponents/ConnectWallet.vue'
import { mapState, mapActions } from 'pinia'

import useUserStore from '@Store/user'
// import { storeToRefs } from 'pinia'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'

// ]
import ProfilePopover from './subComponents/ProfilePopover.vue'
export default {
    name: 'AppHeader',
    components: {
        ProfilePopover,
        ConnectWallet,
    },

    computed: {
        ...mapState(useUserStore, ['accounts', 'isConnected']),
    },
    methods: {},
}
</script>
