<template>
    <div class="step-license-specifications">
        <div class="heading">
            <h2>License Specifications</h2>
            <p>Empower your license with custom terms</p>
        </div>
        <div class="form">
            <div class="field">
                <label for="price">Price</label>
                <input id="price" :price="price" type="number" @input="updateField('price', $event.target.value)" />
            </div>
            <div class="field">
                <label for="canTransfer">Can Transfer</label>
                <div class="radio-group">
                    <label>
                        <input
                            id="canTransfer"
                            :canTransfer="canTransfer"
                            type="radio"
                            value="true"
                            @input="updateField('canTransfer', $event.target.value)"
                        />
                        {{ canTransfer ? 'Yes' : 'No' }}
                    </label>
                </div>
            </div>
            <div class="field">
                <label for="canSell">Can Sell</label>
                <div class="radio-group">
                    <label>
                        <input
                            id="canSell"
                            :canSell="canSell"
                            type="radio"
                            value="true"
                            @input="updateField('canSell', $event.target.value)"
                        />
                        {{ canSell ? 'Yes' : 'No' }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepLicenseSpecifications',
    emits: ['update-field'],

    data() {
        return {
            price: null,
            canTransfer: null,
            canSell: null,
        }
    },
    methods: {
        updateField(field, content) {
            this.$emit('update-field', field, content)
        },
    },
}
</script>
