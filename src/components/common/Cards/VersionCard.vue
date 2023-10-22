<template>
    <div
        :class="activeVersion === version.name ? 'border-2 border-black' : 'border border-gray-300'"
        class="bg-white rounded-xl overflow-hidden select-none py-9 px-8 w-[15rem] h-[26rem]"
        @click="selectVersion(version.name)"
    >
        <h3 class="font-bold text-3xl">{{ version.name }}</h3>
        <ul class="mt-6">
            <li v-for="(feature, indexin) in version.features" :key="indexin" class="font-medium">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'VersionCard',
    props: {
        version: {
            type: Object,
            required: true,
        },
        activeVersion: { type: String, required: true },
    },
    emits: ['select-version'],
    methods: {
        selectVersion(versionName) {
            this.$emit('select-version', versionName)
        },
    },
}
</script>

<style></style>
