<script>
    import { onMount } from "svelte";
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import "$lib/i18n"; // Your svelte-i18n setup file
    import { locale, waitLocale } from "svelte-i18n";

    // Show a blank page initially to prevent the flash of untranslated text.
    // We will make it visible in onMount after the correct locale is loaded.
    let isInitialized = false;

    onMount(async () => {
        // This code only runs in the browser, after the component is mounted
        const savedLocale = localStorage.getItem("locale");

        // Use the saved locale or fall back to the browser's language
        const initialLocale = savedLocale || window.navigator.language;

        // Set the svelte-i18n locale
        locale.set(initialLocale);

        // IMPORTANT: Wait for the locale data to be loaded
        // This likely solves your "getting stuck" issue
        await waitLocale();

        // Now that the correct language is loaded, show the page content
        isInitialized = true;
    });
</script>

{#if isInitialized}
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
{:else}
    <main></main>
{/if}

<style>
    main {
        flex-grow: 1;
    }
</style>
