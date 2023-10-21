<template>
    <div class="step-royalty-management">
        <div class="heading">
            <h2>Royalty Management</h2>
            <p>Earn fairly from your license</p>
        </div>
        <div class="form">
            <div class="field">
                <label for="myShare">My Share</label>
                <input
                    id="myShare"
                    :myShare="myShare"
                    type="number"
                    @input="updateField('myShare', $event.target.value)"
                />
            </div>
            <div class="field">
                <label for="buyerShare">Buyer Share</label>
                <input
                    id="buyerShare"
                    :buyerShare="buyerShare"
                    type="number"
                    @input="updateField('buyerShare', $event.target.value)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepRoyaltyManagement',
    emits: ['update-field'],

    data() {
        return {
            myShare: null,
            buyerShare: null,
        }
    },
    methods: {
        updateField(field, content) {
            this.$emit('update-field', field, content)
        },
    },
}
</script>
