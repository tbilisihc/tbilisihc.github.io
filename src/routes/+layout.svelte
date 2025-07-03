<script>
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="layout-container">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
    /* These styles turn the container into a full-height flex column */
    .layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex-grow: 1; /* This will now correctly push the footer down */
    }
</style>
