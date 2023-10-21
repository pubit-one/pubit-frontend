<template>
    <div class="grid justify-center">
        <div class="w-fit">
            <h2 class="text-2xl font-bold">Seamless Licensing Made Easy</h2>
            <p class="text-sm text-gray-600">Empower Creators, Protect Businesses, and Delight Consumers</p>
        </div>
        <div class="grid w-fit justify-center">
            <div class="">
                <label for="contentType">Content Type</label>
                <select
                    id="contentType"
                    :contentType="contentType"
                    @change="update - field('contentType', $event.target.value)"
                >
                    <option value="text">Text</option>
                    <option value="audio">Audio</option>
                    <option value="video">Video</option>
                    <option value="program">Program</option>
                </select>
            </div>
            <div class="field">
                <label for="licenseType">License Type</label>
                <select
                    id="licenseType"
                    :licenseType="licenseType"
                    @change="update - field('licenseType', $event.target.value)"
                >
                    <option value="standard">Standard</option>
                    <option value="extended">Extended</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepSelectContentAndLicenseType',
    emits: ['update-field'],

    data() {
        return {
            contentType: 'text',
            licenseType: 'standard',
        }
    },
    methods: {
        updateField(field, content) {
            this.$emit('update-field', field, content)
        },
    },
}
</script>
