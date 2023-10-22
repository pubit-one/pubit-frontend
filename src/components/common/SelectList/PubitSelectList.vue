<template>
    <label v-if="label" :for="id" class="text-xs">{{ label }}</label>

    <Listbox
        :id="id"
        v-slot="{ open }"
        v-model="selectedItem"
        class="mb-5"
        as="div"
        @change="selectItem($event.target.value)"
    >
        <ListboxButton
            class="flex relative min-w-[16rem] w-full text-gray-900 justify-between items-center rounded-lg px-5 py-2.5 bg-white border border-slate-300 focus:outline-none sm:text-sm"
        >
            <span class="capitalize block truncate w-32 text-start text-md">
                {{ selectedItem }}
            </span>

            <ChevronDownIcon
                :class="[open ? 'rotate-180 ' : 'rotate-0', 'h-4 w-4 text-gray-900 transform']"
                aria-hidden="true"
            />
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <ListboxOptions
                class="absolute z-50 w-44 mt-1 max-h-60 overflow-auto min-w-[16rem] rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
                <ListboxOption v-for="(item, index) in list" v-slot="{ active }" :key="index" :value="item[keyValue]">
                    <li
                        :class="[
                            active ? 'bg-green-100 text-green-900' : 'text-gray-900',
                            'relative cursor-pointer select-none py-3 px-4',
                        ]"
                    >
                        <span :class="['capitalize block truncate text-start text-md']">{{ item[keyValue] }}</span>
                    </li>
                </ListboxOption>
            </ListboxOptions>
        </transition>
    </Listbox>
</template>

<script>
import { twMerge } from 'tailwind-merge'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export default {
    name: 'PubitSelectList',
    components: {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,

        ChevronDownIcon,
    },
    props: {
        label: { type: String, default: '' },
        list: {
            type: Array,
            default: () => {
                ;[]
            },
        },
        keyValue: { type: String, default: 'name' },
        defualtValue: {
            type: String,
            default: 'value',
        },
        id: {
            type: String,
            default: 'select-list',
        },
    },
    emits: ['on-change'],

    data() {
        return {
            selectedItem: this.defualtValue,
        }
    },
    computed: {},

    methods: {
        selectItem(selectedItem) {
            this.$emit('on-change', selectedItem)
        },
    },
}
</script>
