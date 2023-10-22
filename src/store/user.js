import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { networks } from '../utils/networksConstants.js'
export default defineStore('user', {
    state: () => ({
        DAIBalance: localStorage.getItem('DAIBalance') ? JSON.parse(localStorage.getItem('DAIBalance')) : '0',
        isConnected: localStorage.getItem('isConnected')
            ? JSON.parse(localStorage.getItem('isConnected'))
            : window.ethereum && window.ethereum.isConnected()
            ? window.ethereum.isConnected()
            : false,
        accounts: localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : null,
        chainId: localStorage.getItem('chainId') ? JSON.parse(localStorage.getItem('chainId')) : null,
    }),
    actions: {
        async connect() {
            try {
                if (typeof window.ethereum !== 'undefined') {
                    if (!this.isConnected && !this.accounts) {
                        await ethereum.request({ method: 'eth_requestAccounts' })
                        const accounts = await ethereum.request({ method: 'eth_accounts' })
                        this.isConnected = window.ethereum.isConnected()
                        this.accounts = accounts
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
                        this.accounts = accounts
                    }

                    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
                    this.chainId = chainId

                    const provider = new ethers.BrowserProvider(window.ethereum)
                    // const signer = provider.getSigner()
                    const contract = new ethers.Contract(
                        networks[this.chainId].DAICurrency.contractAddress,
                        networks[this.chainId].DAICurrency.ABI,
                        provider
                    )

                    const DAIBalance = await contract.balanceOf(this.accounts[0])
                    this.DAIBalance = DAIBalance
                }
            } catch (error) {
                console.log(error)
            }
        },
        async disconnect() {
            if (this.isConnected && this.accounts) {
                try {
                    this.accounts = null
                    this.chainId = null
                } catch (error) {
                    console.log(error)
                }
            }
        },
    },
})
