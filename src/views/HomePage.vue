<template>
    <section class="flex justify-between items-center my-12 bg-white">
        <div class="w-1/2">
            <h1 class="text-4xl text-pubit-dark font-bold capitalize leading-relaxed">
                Revolutionizing licensing with transparency, security, and efficiency
            </h1>
            <h2 class="text-xl font-normal text-pubit-heavy capitalize pr-20 mt-4">
                Discover a new era of licensing with our blockchain-based solution.
            </h2>
            <div class="mt-14">
                <button class="mr-2.5 px-2.5 py-3 w-32 bg-pubit-heavy text-white border-none rounded-2xl">
                    Let's Start
                </button>
                <button class="mr-2.5 px-2.5 py-3 w-32 bg-white text-pubit-dark rounded-xl border-0">
                    See License
                </button>
            </div>
        </div>
        <div class="w-1/2 relative bg-cover bg-center flex justify-end h-[22rem]">
            <img class="rounded-bl-lg" src="/hero-section-light.svg" alt="Hero image" />
        </div>
    </section>
    <section>
        <TabGroup>
            <TabList class="flex flex-wrap -mb-px text-sm font-medium text-center rounded-t-lg border-b-2">
                <Tab
                    v-for="(content, index) in contentTypes"
                    :key="index"
                    v-slot="{ selected }"
                    as="template"
                    :disabled="content.disabled"
                    @click="setActiveContentTab(content.type)"
                >
                    <button
                        :class="{ 'text-pubit-heavy': selected, 'bg-white text-black': !selected }"
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
                            <div class="flex space-x-2">
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl p-2">
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
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl px-2 py-1">
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
                                </div>
                            </div>

                            <div class="fixed contents items-center space-x-4 bg-white rounded-full px-2 py-1">
                                <div class="relative flex">
                                    <Listbox v-model="selectedLicense" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 text-gray-900 w-full rounded-2xl right-1 px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
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
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
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
                                    <Listbox v-model="selectedChain" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                        >
                                            <span class="block truncate w-32"> {{ selectedChain }} </span>

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
                                                    v-for="(chain, index) in chains"
                                                    v-slot="{ active }"
                                                    :key="index"
                                                    :value="chain"
                                                >
                                                    <li
                                                        :class="[
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 px-4',
                                                        ]"
                                                    >
                                                        <span :class="['block truncate']">{{ chain }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </Listbox>
                                </div>
                            </div>
                        </div>
                        <div
                            class="grid gap-5 grid-cols-[repeat(auto-fill,minmax(16rem,_1fr))] justify-items-center md:gap-14 lg:gap-6"
                        >
                            <product-card
                                v-for="product in filteredProducts"
                                :key="product.id"
                                :product="product"
                                buyable
                            />
                        </div></div
                ></TabPanel>
                <TabPanel
                    ><div>
                        <div class="flex justify-between items-center mt-4 mb-8">
                            <div class="flex space-x-2">
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl p-2">
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
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl px-2 py-1">
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
                                </div>
                            </div>

                            <div class="fixed contents items-center space-x-4 bg-white rounded-full px-2 py-1">
                                <div class="relative flex">
                                    <Listbox v-model="selectedLicense" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 text-gray-900 w-full rounded-2xl right-1 px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
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
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
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
                                    <Listbox v-model="selectedChain" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                        >
                                            <span class="block truncate w-32"> {{ selectedChain }} </span>

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
                                                    v-for="(chain, index) in chains"
                                                    v-slot="{ active }"
                                                    :key="index"
                                                    :value="chain"
                                                >
                                                    <li
                                                        :class="[
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 px-4',
                                                        ]"
                                                    >
                                                        <span :class="['block truncate']">{{ chain }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </Listbox>
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-5 grid-cols-1 md:grid-cols-3 md:gap-14 lg:grid-cols-4 lg:gap-6">
                            <product-card
                                v-for="product in filteredProducts"
                                :key="product.id"
                                :product="product"
                                buyable
                            />
                        </div></div
                ></TabPanel>
                <TabPanel
                    ><div>
                        <div class="flex justify-between items-center mt-4 mb-8">
                            <div class="flex space-x-2">
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl p-2">
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
                                <div class="flex items-center space-x-4 bg-slate-100 rounded-2xl px-2 py-1">
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
                                </div>
                            </div>

                            <div class="fixed contents items-center space-x-4 bg-white rounded-full px-2 py-1">
                                <div class="relative flex">
                                    <Listbox v-model="selectedLicense" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 text-gray-900 w-full rounded-2xl right-1 px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
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
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
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
                                    <Listbox v-model="selectedChain" as="div">
                                        <ListboxButton
                                            class="flex relative min-w-36 w-full text-gray-900 rounded-2xl px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                        >
                                            <span class="block truncate w-32"> {{ selectedChain }} </span>

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
                                                    v-for="(chain, index) in chains"
                                                    v-slot="{ active }"
                                                    :key="index"
                                                    :value="chain"
                                                >
                                                    <li
                                                        :class="[
                                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 px-4',
                                                        ]"
                                                    >
                                                        <span :class="['block truncate']">{{ chain }}</span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </Listbox>
                                </div>
                            </div>
                        </div>
                        <div
                            id="card-container"
                            class="grid gap-5 grid-cols-[auto-fill_minmax(320px,_1fr)_100px] md:gap-14 lg:gap-6"
                        >
                            <product-card
                                v-for="product in filteredProducts"
                                :key="product.id"
                                :product="product"
                                buyable
                            />
                        </div></div
                ></TabPanel>
            </TabPanels>
        </TabGroup>
    </section>
</template>
<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import ProductCard from '@Components/common/Cards/ProductCard.vue'

export default {
    name: 'HomePage',
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
            activeTab: 0,
            activeContentTab: 0,
            contentTypes: [
                { type: 'All', disabled: false },
                { type: 'Text', disabled: false },
                { type: 'Audio', disabled: true },
                { type: 'Video', disabled: true },
                { type: 'Program', disabled: true },
            ],
            selectedLicense: 'All License Types',
            licenses: [
                'All License Types',
                'Personal',
                'Commercial',
                // 'Standard License','Extended License'
            ],
            tabs: ['New', 'Favorites', 'Most viewed'],
            chains: ['All Chains', 'Ethereum', 'Binance Smart Chain', 'Sepolia'],

            selectedChain: 'All Chains',
            products: [
                {
                    id: 1,
                    title: 'The Sound Of Science',
                    poster: '/contractual-obligations1.png',
                    price: 12,
                    creator: 'Pearson',
                    licenseType: 'personal',
                    chain: 'Sepolia',
                },
                {
                    id: 2,
                    title: "Look Who's Laughing Now",
                    poster: '/look-whos-laughing-now.png',
                    price: 12,
                    creator: 'Pearson',
                    licenseType: 'personal',
                    chain: 'Sepolia',
                },
                {
                    id: 3,
                    title: 'Contractual Obligations',
                    poster: '/contractual-obligations2.png',
                    price: 12,
                    creator: 'Pearson',
                    licenseType: 'personal',
                    chain: 'Sepolia',
                },
                {
                    id: 3,
                    title: 'Hit The Road',
                    poster: '/contractual-obligations3.png',
                    price: 12,
                    creator: 'Pearson',
                    licenseType: 'personal',
                    chain: 'Sepolia',
                },
            ],
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter((product) => {
                // const isTabMatch =
                //     (this.activeTab === 'new' && product.isNew) ||
                //     (this.activeTab === 'favorites' && user.favorites.includes(product.id)) ||
                //     (this.activeTab === 'mostViewed' && product.isMostViewed)

                const isLicenseMatch =
                    this.selectedLicense === 'All License Types' || product.licenseType === this.selectedLicense

                const isChainMatch = this.selectedChain === 'All Chains' || product.chain === this.selectedChain

                // return isTabMatch && isLicenseMatch && isChainMatch
                return isLicenseMatch && isChainMatch
            })
        },
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab
        },

        setActiveContentTab(tab) {
            this.activeContentTab = tab
        },
    },
}
</script>
