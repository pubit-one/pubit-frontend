import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => ({
        DAIBalance: '0',
        windEth: window.ethereum,
        isConnected: window.ethereum.isConnected(),
        accounts: null,
        chainId: null,
    }),
    actions: {
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
    },
})
