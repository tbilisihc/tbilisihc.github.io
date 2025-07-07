<script>
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { browser } from "$app/environment";
    import "$lib/i18n"; // Import to initialize
    import { locale, waitLocale } from "svelte-i18n";

    export const load = async () => {
        if (browser) {
            locale.set(window.navigator.language);
        }
        await waitLocale();
    };
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
