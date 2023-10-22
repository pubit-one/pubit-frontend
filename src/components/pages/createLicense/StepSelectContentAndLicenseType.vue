<template>
    <div class="grid justify-center">
        <div class="w-fit">
            <h2 class="text-2xl font-bold">Seamless Licensing Made Easy</h2>
            <p class="text-xs text-gray-600">Empower Creators, Protect Businesses, and Delight Consumers</p>
        </div>
        <div class="grid w-fit justify-self-center">
            <div class="mt-8">
                <pubit-select-list
                    :id="'contentType'"
                    :label="'Content Type'"
                    :list="contentTypes"
                    :key-value="'type'"
                    :defualt-value="selectedContentType"
                    @on-change="updateField('selectedContentType', $event.target.value)"
                />
                <pubit-select-list
                    :id="'licenseType'"
                    :label="'License Type'"
                    :list="licenseTypes"
                    :key-value="'type'"
                    :defualt-value="selectedLicenseType"
                    @on-change="updateField('selectedLicenseType', $event.target.value)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import PubitSelectList from '@Components/common/SelectList/PubitSelectList'

export default {
    name: 'StepSelectContentAndLicenseType',
    components: {
        PubitSelectList,
    },
    emits: ['update-field'],

    data() {
        return {
            selectedLicenseType: 'standard',
            selectedContentType: 'text',
            licenseTypes: [
                { type: 'standard', disabled: false },
                { type: 'extended', disabled: true },
                { type: 'commercial', disabled: true },
            ],
            contentTypes: [
                { type: 'text', disabled: false },
                { type: 'audio', disabled: true },
                { type: 'video', disabled: true },
                { type: 'program', disabled: true },
            ],
        }
    },
    methods: {
        updateField(field, content) {
            this.$emit('update-field', field, content)
        },
    },
}
</script>
