<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="w-full h-72 right-0 left-0 grid grid-cols-1 items-center justify-between">
                <img
                    src="/template-license-poster.png"
                    alt="Timeline picture"
                    class="absolute w-full h-72 object-cover left-0"
                />
                <div class="flex items-center">
                    <img
                        src="/template-license-poster.png"
                        alt="Profile picture"
                        class="h-24 w-24 rounded-full relative left-0 top-32"
                    />
                </div>
            </div>

            <div class="mt-14">
                <div>
                    <div class="flex items-center text-2xl font-bold">{{ user.name }}</div>
                    <div class="flex items-center jusitfy-between">
                        <span class="w-20 block truncate text-slate-500">{{ accounts[0] }}</span>
                        <span class="text-slate-500">{{ accounts[0].substr(accounts[0].length - 6) }}</span>

                        <span class="ml-10 text-slate-700">Joined</span>
                        <span class="ml-2 text-gray-700">{{ user.joinDatePure ? joinDate : user.joinDatePure }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section>
        <TabGroup>
            <TabList class="flex flex-wrap -mb-px text-sm font-medium text-center rounded-t-lg border-b-2">
                <!-- <Tab
                class="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black"
                >Tab 1</Tab
            >
            <Tab
                class="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black"
                >Tab 2</Tab
            >
            <Tab
                class="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black"
                >Tab 3</Tab
            > -->

                <Tab
                    v-for="(content, index) in contentTypes"
                    :key="index"
                    v-slot="{ selected }"
                    as="template"
                    :disabled="content.disabled"
                    @click="setActiveTab(content.type)"
                >
                    <button
                        :class="{ 'text-sky-500': selected, 'bg-white text-black': !selected }"
                        class="cursor-pointer inline-block p-4 border-none rounded-t-lg outline-none"
                    >
                        {{ content.type }}
                    </button>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div>
                        <div class="flex justify-between items-center mt-4 mb-8">
                            <div class="flex">
                                <div class="flex items-center bg-slate-100 rounded-2xl p-2">
                                    <svg
                                        class="h-6 w-6"
                                        viewBox="0 0 24.00 24.00"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#000000"
                                        stroke-width="0.624"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke="#CCCCCC"
                                            stroke-width="0.096"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                                                fill="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <!-- <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl px-2 py-1">
                                    <button
                                        v-for="(tab, index) in tabs"
                                        :key="index"
                                        :class="{
                                            'bg-white': activeTab === index,
                                            'bg-slate-100': activeTab !== index,
                                            'text-gray-900': activeTab !== index,
                                            'text-gray-700': activeTab === index,
                                        }"
                                        class="px-2 py-1 rounded-full text-sm"
                                        @click="activeTab = index"
                                    >
                                        {{ tab }}
                                    </button>
                                </div> -->
                                <div class="fixed contents items-center bg-white rounded-full px-2 py-1">
                                    <div class="relative flex ml-2 gap-x-2">
                                        <Listbox v-model="selectedType" as="div">
                                            <ListboxButton
                                                class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2.5 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                            >
                                                <span class="block truncate w-32">{{ selectedType }}</span>
                                                <ChevronDownIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
                                            </ListboxButton>

                                            <transition
                                                leave-active-class="transition duration-100 ease-in"
                                                leave-from-class="opacity-100"
                                                leave-to-class="opacity-0"
                                            >
                                                <ListboxOptions
                                                    class="absolute z-50 mt-1 w-44 max-h-60 overflow-auto rounded-md bg-slate-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                                >
                                                    <ListboxOption
                                                        v-for="(contentType, index) in contentTypes"
                                                        v-slot="{ active }"
                                                        :key="index"
                                                        :value="contentType.type"
                                                    >
                                                        <li
                                                            :class="[
                                                                active
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 px-4',
                                                            ]"
                                                        >
                                                            <span :class="['block truncate']">{{
                                                                contentType.type
                                                            }}</span>
                                                        </li>
                                                        {{ contentType.type }}
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </Listbox>
                                        <Listbox v-model="selectedLicense" as="div">
                                            <ListboxButton
                                                class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2.5 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                            >
                                                <span class="block truncate w-32">{{ selectedLicense }}</span>
                                                <ChevronDownIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
                                            </ListboxButton>

                                            <transition
                                                leave-active-class="transition duration-100 ease-in"
                                                leave-from-class="opacity-100"
                                                leave-to-class="opacity-0"
                                            >
                                                <ListboxOptions
                                                    class="absolute z-50 mt-1 w-44 max-h-60 overflow-auto rounded-md bg-slate-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                                >
                                                    <ListboxOption
                                                        v-for="(license, index) in licenses"
                                                        v-slot="{ active }"
                                                        :key="index"
                                                        :value="license"
                                                    >
                                                        <li
                                                            :class="[
                                                                active
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 px-4',
                                                            ]"
                                                        >
                                                            <span :class="['block truncate']">{{ license }}</span>
                                                        </li>
                                                        {{ licence }}
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </Listbox>

                                        <Listbox v-model="selectedVersion" as="div">
                                            <ListboxButton
                                                class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2.5 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                            >
                                                <span class="block truncate w-32"> {{ selectedVersion }} </span>

                                                <ChevronDownIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
                                            </ListboxButton>

                                            <transition
                                                leave-active-class="transition duration-100 ease-in"
                                                leave-from-class="opacity-100"
                                                leave-to-class="opacity-0"
                                            >
                                                <ListboxOptions
                                                    class="absolute z-50 w-44 mt-1 max-h-60 overflow-auto rounded-md bg-slate-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                                >
                                                    <ListboxOption
                                                        v-for="(version, index) in versions"
                                                        v-slot="{ active }"
                                                        :key="index"
                                                        :value="version"
                                                    >
                                                        <li
                                                            :class="[
                                                                active
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 px-4',
                                                            ]"
                                                        >
                                                            <span :class="['block truncate']">{{ version }}</span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </Listbox>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-14">
                            <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />

                            <ul></ul>
                        </div></div
                ></TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </TabGroup>
    </section>
</template>

<script>
import { mapState } from 'pinia'
import useUserStore from '@Store/user'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import ProductCard from '@Components/common/Cards/ProductCard.vue'

export default {
    name: 'ProfilePage',
    components: {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        ProductCard,
        ChevronDownIcon,
    },
    data() {
        return {
            user: {
                name: 'Unnamed',
                joinDatePure: '2018-04-11T12:00:00.000Z',
            },
            activeTab: 0,
            activeContentTab: 0,
            contentTypes: [
                { type: 'All Content Types', disabled: false },
                { type: 'Text', disabled: false },
                { type: 'Audio', disabled: true },
                { type: 'Video', disabled: true },
                { type: 'Program', disabled: true },
            ],
            selectedLicense: 'All License Types',
            selectedType: 'All Content Types',

            licenses: [
                'All License Types',
                'Personal',
                'Commercial',
                // 'Standard License','Extended License'
            ],
            versions: ['All Versions', 'Standard', 'Extended'],

            selectedVersion: 'All Versions',
            products: [
                {
                    id: 1,
                    title: 'Product1',
                    poster: null,
                    price: 12,
                    creator: 'Creator1',
                    hover: false,
                    licenseType: 'personal',
                    version: 'Standard',
                    chain: 'Sepolia',
                },
                {
                    id: 1,
                    title: 'Product1',
                    poster: null,
                    price: 12,
                    creator: 'Creator1',
                    hover: false,
                    licenseType: 'personal',
                    version: 'Standard',
                    chain: 'Sepolia',
                },
                {
                    id: 1,
                    title: 'Product1',
                    poster: null,
                    price: 12,
                    creator: 'Creator1',
                    hover: false,
                    licenseType: 'personal',
                    chain: 'Sepolia',
                },
            ],
        }
    },
    computed: {
        ...mapState(useUserStore, ['accounts']),
        filteredProducts() {
            return this.products.filter((product) => {
                // const isTabMatch =
                //     (this.activeTab === 'new' && product.isNew) ||
                //     (this.activeTab === 'favorites' && user.favorites.includes(product.id)) ||
                //     (this.activeTab === 'mostViewed' && product.isMostViewed)

                const isLicenseMatch =
                    this.selectedLicense === 'All License Types' || product.licenseType === this.selectedLicense

                const isChainMatch = this.selectedVersion === 'All Versions' || product.version === this.selectedVersion

                // return isTabMatch && isLicenseMatch && isChainMatch
                return isLicenseMatch && isChainMatch
            })
        },
        joinDate() {
            const date = new Date(this.user.joinDatePure)
            const month = date.toLocaleString('default', { month: 'long' })
            const dateString = `${date.getFullYear()} ${month}`

            return dateString
        },
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab
        },
    },
}
</script>

<style></style>
