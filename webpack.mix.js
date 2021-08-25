const cssImport = require('postcss-import');
const cssNesting = require('postcss-nesting');
const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

// It is recommended to adjust svelte options dynamically, by using
// environment variables
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css/app.css')
  .options({
    postCss: [
      cssImport(),
      cssNesting(),
      tailwindcss('tailwind.config.js'),
    ],
  })
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      extensions: ['.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
      alias: {
        '@': path.resolve('resources/js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(svelte)$/,
          use: {
            loader: 'svelte-loader',
            options: {
                compilerOptions: {
                    // NOTE Svelte's dev mode MUST be enabled for HMR to work
                    dev: !prod, // Default: false
                },
              emitCss: true,
              hotReload: true,
            },
          },
        },
      ],
    },
  })
  .version()
  .sourceMaps()
