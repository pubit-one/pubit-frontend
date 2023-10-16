<template>
    <div>
        <PubitButton @click="isConnected && accounts ? disconnect() : connect()">
            {{ isConnected && accounts ? 'Disconnect' : 'Connect' }}
        </PubitButton>

        <div v-if="typeof windEth === 'undefined'">Please install MetaMask</div>
    </div>
</template>

<script>
// require("dotenv").config()
import PubitButton from '@/components/common/Buttons/PubitButton.vue'
const ethers = require('ethers')

export default {
    components: { PubitButton },
    data() {
        return {
            DAIBalance: '',
            windEth: window.ethereum,
            isConnected: window.ethereum.isConnected(),
            provider: null,
            accounts: null,
            chainId: null,
        }
    },
    mounted() {},
    methods: {
        async connect() {
            try {
                if (typeof window.ethereum !== 'undefined') {
                    this.isConnected = window.ethereum.isConnected()
                    if (!this.isConnected && !this.accounts) {
                        await ethereum.request({ method: 'eth_requestAccounts' })
                        const accounts = await ethereum.request({ method: 'eth_accounts' })
                        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
                        this.isConnected = window.ethereum.isConnected()
                        this.accounts = accounts
                        this.chainId = chainId
                    } else if (this.isConnected) {
                        const accounts = await window.ethereum
                            .request({
                                method: 'wallet_requestPermissions',
                                params: [
                                    {
                                        eth_accounts: {},
                                    },
                                ],
                            })
                            .then(() =>
                                ethereum.request({
                                    method: 'eth_requestAccounts',
                                })
                            )
                        this.accounts = accounts[0]
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async disconnect() {
            if (this.isConnected && this.accounts) {
                console.log('path3')

                try {
                    window.localStorage.clear()
                    window.location.reload(true)
                    this.accounts = null
                    this.chainId = null
                } catch (error) {
                    console.log(error)
                }
            }
        },
        handleChainId() {},
    },
}
</script>
