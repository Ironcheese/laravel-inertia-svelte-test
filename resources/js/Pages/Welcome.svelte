<script>
    import Layout from '../Shared/Layout.svelte';

    export let user;
</script>

<svelte:head>
    <title>Welcome</title>
</svelte:head>

<Layout>
    <h1>Welcome</h1>
    <p>Hello {user.name}, welcome to your first Inertia app!</p>
    <button class="btn mt-5">Daisy-UI Button</button>
</Layout>
