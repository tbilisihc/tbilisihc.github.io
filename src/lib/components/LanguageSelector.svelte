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

<div class="select-wrapper">
  <select class="language-selector" value={$locale} on:change={handleChange}>
    <option value="en">🇬🇧</option>
    <option value="ka">🇬🇪</option>
  </select>
</div>


<style>
  .select-wrapper {
    position: relative;
    display: inline-block;
    width: 50px; /* Adjusted width */
  }

  .language-selector {
    /* Reset default appearance to remove browser-native arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    /* Custom styles */
    display: block;
    width: 100%;
    padding: 12px; 
    font-size: 20px; /* Increased font-size for better emoji visibility */
    line-height: 1.5;
    text-align: center; /* Center the emoji */
    color: #333;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  
  /* This ensures the selected option is centered in Firefox */
  .language-selector:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #333;
  }

  /* Style for the focus state */
  .language-selector:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  /* Style for the hover state */
  .language-selector:hover {
    border-color: #888;
  }

  /* Style options */
  .language-selector option {
    font-size: 16px; /* Font-size for the dropdown list */
  }
</style>
