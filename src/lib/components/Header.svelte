<script>
  import { slide } from "svelte/transition";
  import navigation from "$lib/arrays/navigation.js";
  import { _ } from "svelte-i18n";
  import LanguageSelector from "./LanguageSelector.svelte";
  let isOpen = false;
</script>

<header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
  <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
    <a href="/" aria-label="Navigate to Homepage">
      <div class="flag-container">
        <img
          src="https://tbilisi.hackclub.com/assets/assets/transparent/flag.png"
          alt="Waving Flag of Tbilisi Hack Club"
          class="waving-flag"
        />
      </div>
    </a>

    <button
      on:click={() => (isOpen = !isOpen)}
      class="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none z-20"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-menu-items"
    >
      <svg
        class:hidden={isOpen}
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <svg
        class:hidden={!isOpen}
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <div class="hidden md:flex items-center space-x-8">
      {#each navigation.header as item}
        <a href={item.href} class="nav-link text-gray-600 hover:text-gray-800">
          {@html $_(`${item.name}`)}
        </a>
      {/each}
      <LanguageSelector />
    </div>
  </nav>

  {#if isOpen}
    <div
      transition:slide={{ duration: 300 }}
      id="mobile-menu-items"
      class="md:hidden"
    >
      <div class="px-6 pt-2 pb-4 space-y-3">
        {#each navigation.header as item}
          <a
            href={item.href}
            class="block text-gray-700 hover:text-blue-500 transition-colors py-2"
          >
            {@html $_(`${item.name}`)}
          </a>
        {/each}
        <LanguageSelector />
      </div>
    </div>
  {/if}
</header>