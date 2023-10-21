<template>
    <div class="step-select-license-version">
        <div class="heading">
            <h2>Select Your License Version</h2>
            <p>Tailoring Licensing to Your Needs</p>
        </div>
        <div class="cards">
            <div v-for="(version, index) in version" :key="index" class="card" @click="selectVersion(version)">
                <h3>{{ version.name }}</h3>
                <ul>
                    <li v-for="(feature, indexin) in version.features" :key="indexin">{{ feature }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepSelectLicenseVersion',
    props: {
        versions: {
            type: Array,
            required: true,
        },
    },
    emits: ['select-version'],

    // data() {
    //     return { version: this.versions[0] }
    // },
    methods: {
        selectVersion(version) {
            this.$emit('select-version', version)
        },
    },
}
</script>
