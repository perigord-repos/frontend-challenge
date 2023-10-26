const path = require('path');

module.exports = function override(config, env) {
    // Add SVG loader
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // Exclude SVGs from the default file-loader rule
    const fileLoaderRule = config.module.rules.find(rule => rule.oneOf).oneOf.find(rule => 
        rule.loader && rule.loader.includes('file-loader')
    );
    fileLoaderRule.exclude = /\.svg$/;

    return config;
};
