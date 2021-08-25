
module.exports = {
    mode: 'jit',
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    plugins: [
        require('daisyui'),
    ],
    purge: {
        content: [
            './resources/views/**/*.blade.php',
            './resources/js/**/*.svelte'
        ],
        options: {
            whitelistPatterns: [/nprogress/],
        },
        // enabled: production // disable purge in dev
    },
};
