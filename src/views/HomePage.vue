<template>
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
                @click="setActiveContentTab(content.type)"
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
                        <div class="flex items-center space-x-4 bg-slate-100 rounded-full px-2 py-1">
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

                        <div class="fixed contents items-center space-x-4 bg-white rounded-full px-2 py-1">
                            <div class="relative flex">
                                <Listbox v-model="selectedLicense" as="div">
                                    <ListboxButton
                                        class="flex relative min-w-36 w-full cursor-default rounded-full right-1 px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                    >
                                        <span class="block truncate w-32">{{ selectedLicense }}</span>
                                        <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                        class="flex relative min-w-36 w-full rounded-full px-5 py-2 bg-slate-100 border-slate-100 focus:outline-none sm:text-sm"
                                    >
                                        <span class="block truncate w-32"> {{ selectedChain }} </span>

                                        <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    <div class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                        <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />

                        <ul></ul>
                    </div></div
            ></TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
        </TabPanels>
    </TabGroup>
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
            selectedLicense: 'All Licenses',
            licenses: [
                'All Licenses',
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
                    title: 'Product1',
                    poster: null,
                    price: 12,
                    creator: 'Creator1',
                    hover: false,
                    licenseType: 'personal',
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
        filteredProducts() {
            return this.products.filter((product) => {
                // const isTabMatch =
                //     (this.activeTab === 'new' && product.isNew) ||
                //     (this.activeTab === 'favorites' && user.favorites.includes(product.id)) ||
                //     (this.activeTab === 'mostViewed' && product.isMostViewed)

                const isLicenseMatch =
                    this.selectedLicense === 'All Licenses' || product.license === this.selectedLicense

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
