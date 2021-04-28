const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
    rollup(config, options) {
        console.log('asdsa')
        config.plugins.push(
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: 'default',
                    }),
                ],
                inject: true,
                extract: true,
            })
        );
        return config;
    },
};
