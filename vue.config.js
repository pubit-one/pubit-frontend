const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@Layout': path.resolve(__dirname, 'src/components/layout/'),
                '@Store': path.resolve(__dirname, 'src/store/'),
                '@Components': path.resolve(__dirname, 'src/components/'),
            },
        },
    },
})
