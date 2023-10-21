<template>
    <div class="flex">
        <div class="heading">
            <h2>Enter Content Details</h2>
            <p>Crafting a Unique Identity</p>
        </div>
        <div class="form">
            <div class="field">
                <label for="name">Name</label>
                <input id="name" :name="name" type="text" @input="updateField('name', $event.target.value)" />
            </div>
            <div class="field">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    :description="description"
                    @input="updateField('description', $event.target.value)"
                ></textarea>
            </div>
            <div class="field">
                <label for="file">File</label>
                <input id="file" ref="fileInput" type="file" @input="uploadFile, $event.target.files[0]" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepEnterContentDetails',

    emits: ['update-field', 'upload-file'],

    data() {
        return {
            name: '',
            description: '',
            file: null,
        }
    },
    methods: {
        updateField(field, content) {
            this.$emit('update-field', field, content)
        },
        uploadFile(file) {
            this.$emit('upload-file', file)
        },
    },
}
</script>
