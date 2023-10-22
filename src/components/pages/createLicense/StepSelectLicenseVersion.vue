<template>
    <div class="block justify-center">
        <div class="w-fit">
            <h2 class="text-2xl font-bold">Select Your License Version</h2>
            <p class="text-xs text-gray-600">Tailoring Licensing to Your Needs</p>
        </div>
        <div class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-7 py-8">
            <version-card
                v-for="(version, index) in versions"
                :key="index"
                :active-version="licenseVersion"
                :version="version"
                @select-version="selectVersion"
            />
        </div>
    </div>
</template>

<script>
import VersionCard from '@Components/common/Cards/VersionCard.vue'
export default {
    name: 'StepSelectLicenseVersion',
    components: { VersionCard },
    props: {
        versions: {
            type: Array,
            required: true,
        },
        licenseVersion: { type: String, required: true },
    },
    emits: ['select-version'],

    methods: {
        selectVersion(version) {
            this.$emit('select-version', version)
        },
    },
}
</script>
