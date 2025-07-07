<script>
    import { locale } from "svelte-i18n";

    function setLocale(newLocale) {
        locale.set(newLocale);
    }
</script>

<div>
    <button on:click={() => setLocale("en")}>English</button>
    <button on:click={() => setLocale("ka")}>ქართული</button>
</div>
