<script context="module">
    import Layout from '../Shared/Layout.svelte'
    export const layout = Layout
  </script>
  
  <script>
    export let user
  </script>
  
  <h1>Welcome</h1>
  <p>Hello {user.name}, welcome to your first Inertia app!</p>
  <button class="btn mt-5">Daisy-UI Button</button>