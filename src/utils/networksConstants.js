export const networks = {
    '0x1': {
        name: 'Ethereum Mainnet',
        chainId: 1,
        shortName: 'eth',
        chain: 'ETH',
        network: 'mainnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        DAIAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',

        rpcUrls: ['https://mainnet.infura.io/v3/8472813563964550548'],
        blockExplorerUrls: ['https://etherscan.io/'],
    },
    '0xaa36a7': {
        name: 'Ethereum Sepolia Testnet',
        chainId: 11155111,
        shortName: 'sep',
        chain: 'ETH',
        network: 'sepolia',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        DAICurrency: {
            contractAddress: '0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6',
            ABI: process.env.VUE_APP_DAI_ABI,
        },
        rpcUrls: ['wss://ethereum-sepolia.publicnode.com'],
    },
}
