<script>
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header></Header>

<main>
    <slot></slot>
</main>

<Footer></Footer>

<style>
    main {
        flex-grow: 1; /* This is the magic part! */
        /* It tells the main content area to grow and take up all available */
        /* space, pushing the footer to the bottom. */
    }
</style>
