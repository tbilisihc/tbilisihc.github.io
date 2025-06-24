<script>
  import { slide } from "svelte/transition";
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
      <a href="/about" class="nav-link">About</a>
      <a href="/events" class="nav-link">Events</a>
      <a href="/join" class="join-btn">Join</a>
    </div>
  </nav>

  {#if isOpen}
    <div
      transition:slide={{ duration: 300 }}
      id="mobile-menu-items"
      class="md:hidden"
    >
      <div class="px-6 pt-2 pb-4 space-y-3">
        <a
          href="/about"
          class="block text-gray-700 hover:text-blue-500 transition-colors py-2"
          >About</a
        >
        <a
          href="/events"
          class="block text-gray-700 hover:text-blue-500 transition-colors py-2"
          >Events</a
        >
        <a
          href="/join"
          class="block mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-center"
          >Join</a
        >
      </div>
    </div>
  {/if}
</header>

<style>
  /* --- Re-used from before --- */
  .flag-container {
    display: flex;
    align-items: center;
  }
  .waving-flag {
    width: 150px;
    height: auto;
    transform-origin: bottom left;
  }
  @media (max-width: 768px) {
    .waving-flag {
      width: 100px;
    }
  }

  /* --- Improved Animations --- */
  .waving-flag:hover {
    animation: wave 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  }
  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(-8deg) scale(1.05);
    }
  }

  /* Animated Underline for Nav Links */
  .nav-link {
    position: relative;
    color: #4a5568; /* gray-700 */
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: #3b82f6; /* blue-500 */
  }
  .nav-link::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #3b82f6; /* blue-500 */
    transform-origin: bottom right;
    transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  /* "Lift" effect for the Join button (using standard CSS) */
  .join-btn {
    background-color: #3b82f6; /* bg-blue-500 */
    color: white;
    font-weight: 600; /* font-semibold */
    padding: 0.5rem 1rem; /* py-2 px-4 */
    border-radius: 0.5rem; /* rounded-lg */
    transition:
      transform 0.2s,
      box-shadow 0.2s,
      background-color 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .join-btn:hover {
    background-color: #2563eb; /* bg-blue-600 */
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
</style>
