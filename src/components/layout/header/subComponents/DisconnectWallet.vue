<template>
    <div>
        <pubit-popover-button @click="disconnect()"> Disconnect </pubit-popover-button>
    </div>
</template>

<script>
import { mapActions } from 'pinia'

import PubitPopoverButton from '@Components/common/Popovers/subComponents/PubitPopoverButton.vue'
import useUserStore from '@Store/user'

export default {
    name: 'DisconnectWallet',

    components: { PubitPopoverButton },

    mounted() {},
    methods: {
        ...mapActions(useUserStore, ['disconnect']),
    },
}
</script>
