<script>
  import { onMount } from "svelte";

  // --- State Variables ---
  let submissions = [];
  let isLoading = true;
  let error = null;

  // --- API Endpoint ---
  const PUBLIC_SUBMISSIONS_API =
    "https://api.tbilisihc.andrinoff.com/.netlify/functions/read-public-submissions";

  // --- Lifecycle Function ---
  onMount(async () => {
    try {
      const response = await fetch(PUBLIC_SUBMISSIONS_API);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      submissions = await response.json();
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
      error = "Could not load submissions. Please try again later.";
    } finally {
      isLoading = false;
    }
  });

  // --- SVG Icon for the cards (Updated color to text-blue-600 for better contrast) ---
  const userIcon = `<svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`;
</script>

<svelte:head>
  <title>Submissions | Tbilisi Hack Club</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <header class="text-center mb-12">
      <h1
        class="text-4xl sm:text-5xl font-extrabold text-gray-700"
      >
        Tbilisi Hack Club Submissions
      </h1>
    </header>

    <main>
      {#if isLoading}
        <div
          class="flex flex-col items-center justify-center text-gray-500 mt-16"
        >
          <svg
            class="animate-spin h-12 w-12 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p class="text-lg">Loading Submissions...</p>
        </div>
      {:else if error}
        <div
          class="flex flex-col items-center justify-center text-red-700 bg-red-100 p-8 rounded-lg mt-16"
        >
          <svg
            class="h-12 w-12 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p class="text-lg font-semibold">An Error Occurred</p>
          <p class="text-center">{error}</p>
        </div>
      {:else if submissions.length === 0}
        <div class="text-center text-gray-600 mt-16">
          <p class="text-lg">No submissions found yet.</p>
        </div>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each submissions as submission (submission.name)}
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div class="flex items-center">
                <div class="bg-purple-100 p-3 rounded-full mr-4">
                  {@html userIcon}
                </div>
                <h3 class="text-xl font-bold text-gray-800 truncate">
                  {submission.name}
                </h3>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </main>
  </div>
</div>

<style>
  /* The animation style remains the same and works great! */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
