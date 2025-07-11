<script>
  import { locale } from "svelte-i18n";

  function handleChange(event) {
    const newLocale = event.target.value;

    // Update the svelte-i18n store, which updates the UI
    $locale = newLocale;

    // Save the user's choice for their next visit
    localStorage.setItem("locale", newLocale);
  }
</script>

<select class="language-selector" value={$locale} on:change={handleChange}>
  <option value="en">🇬🇧</option>
  <option value="ka">🇬🇪</option>
</select>

<style>
</style>
