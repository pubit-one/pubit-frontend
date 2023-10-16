<template>
    <div>
        <PubitButton @click="disconnect()"> Disconnect </PubitButton>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
const ethers = require('ethers')

// require("dotenv").config()
import PubitButton from '@Components/common/Buttons/PubitButton.vue'
import useUserStore from '@Store/user'

export default {
    components: { PubitButton },

    mounted() {},
    methods: {
        ...mapActions(useUserStore, ['disconnect']),
    },
}
</script>
