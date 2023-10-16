module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: 3,
            },
        ],
        '@vue/babel-preset-jsx',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-private-methods',
        '@vue/babel-plugin-transform-vue-jsx',
    ],
}
