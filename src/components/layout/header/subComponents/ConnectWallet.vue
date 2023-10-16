<template>
    <div>
        <pubit-button @click="isConnected && accounts ? disconnect() : connect()">
            {{ isConnected && accounts ? 'Disconnect' : 'Connect' }}
        </pubit-button>
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
        ...mapActions(useUserStore, ['connect']),
    },
}
</script>
