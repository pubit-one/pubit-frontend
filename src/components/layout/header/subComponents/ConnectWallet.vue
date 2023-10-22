<template>
    <div>
        <pubit-button :btn-class="'bg-pubit-dark rounded-2xl'" @click="connect()"> Connect </pubit-button>
    </div>
</template>

<script>
import { mapActions } from 'pinia'

import PubitButton from '@Components/common/Buttons/PubitButton.vue'
import useUserStore from '@Store/user'

export default {
    name: 'ConnectWallet',

    components: { PubitButton },

    mounted() {},
    methods: {
        ...mapActions(useUserStore, ['connect']),
    },
}
</script>
