import { createInertiaApp } from '@inertiajs/inertia-svelte';
import Layout from './Shared/Layout.svelte';

createInertiaApp({
    // Using the example from here: https://inertiajs.com/pages#persistent-layouts
    resolve: name => {
        const page = require(`./Pages/${name}`).default;
        page.layout = page.layout || Layout;
        return page;
    },
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})
