<script>
  import { onMount } from "svelte";

  // --- State Variables ---
  let password = "";
  let loginError = "";
  let submissions = [];
  let isLoading = true;
  let isLoggedIn = false;

  // --- API Endpoints ---
  const API_BASE = "https://api.tbilisihc.andrinoff.com/.netlify/functions";
  const LOGIN_API = `${API_BASE}/admin-login`;
  const READ_API = `${API_BASE}/read-submissions`;
  const UPDATE_API = `${API_BASE}/update-submission`;
  const DELETE_API = `${API_BASE}/delete-submission`;

  const SESSION_KEY = "admin_logged_in";

  // --- Lifecycle Function ---
  onMount(() => {
    // Check if user is already logged in from this session
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      isLoggedIn = true;
      fetchAndRenderSubmissions();
    } else {
      isLoading = false;
    }
  });

  // --- Functions ---

  /**
   * Handles the login form submission.
   */
  async function handleLogin() {
    loginError = "";
    isLoading = true;
    try {
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        sessionStorage.setItem(SESSION_KEY, "true");
        isLoggedIn = true;
        await fetchAndRenderSubmissions();
      } else {
        const result = await response.json();
        loginError = result.error || "Incorrect password.";
      }
    } catch (error) {
      console.error("Login error:", error);
      loginError = "An error occurred. Please try again.";
    } finally {
      isLoading = false;
    }
  }

  /**
   * Fetches submissions from the backend.
   */
  async function fetchAndRenderSubmissions() {
    isLoading = true;
    try {
      const response = await fetch(READ_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      submissions = await response.json();
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
      alert(
        "Failed to load submissions. Please check the console for details."
      );
    } finally {
      isLoading = false;
    }
  }

  /**
   * Revokes an accepted submission by setting its status to 'pending'.
   */
  async function revokeSubmission(submission) {
    if (
      !confirm(
        `Are you sure you want to revoke acceptance for ${submission.name}?`
      )
    )
      return;

    const originalStatus = submission.accepted;
    submission.accepted = false; // Optimistic update
    submissions = submissions;

    try {
      const response = await fetch(`${UPDATE_API}/${submission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accepted: false }),
      });

      if (!response.ok) {
        submission.accepted = originalStatus; // Revert on failure
        submissions = submissions;
        throw new Error("Failed to revoke.");
      }
    } catch (error) {
      console.error("Revoke error:", error);
      alert("Could not revoke the submission.");
    }
  }

  /**
   * Deletes a submission.
   */
  async function deleteSubmission(id) {
    if (
      confirm(`Are you sure you want to permanently delete submission ${id}?`)
    ) {
      const originalSubmissions = [...submissions];
      submissions = submissions.filter((sub) => sub.id !== id); // Optimistic update

      try {
        const response = await fetch(`${DELETE_API}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          submissions = originalSubmissions; // Revert on failure
          throw new Error("Failed to delete.");
        }
      } catch (error) {
        console.error("Delete error:", error);
        alert("Could not delete the submission.");
      }
    }
  }

  /**
   * Logs the user out.
   */
  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    isLoggedIn = false;
    password = "";
    loginError = "";
    submissions = [];
  }
</script>

<svelte:head>
  <title>Admin Panel - Submissions</title>
</svelte:head>

<div class="bg-gray-100 text-gray-800 min-h-screen font-sans">
  {#if !isLoggedIn}
    <!-- Login Section -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form on:submit|preventDefault={handleLogin}>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Password</label
            >
            <input
              type="password"
              id="password"
              bind:value={password}
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            class="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition disabled:bg-indigo-400"
          >
            {#if isLoading}
              <span>Logging in...</span>
            {:else}
              <span>Login</span>
            {/if}
          </button>
        </form>
        {#if loginError}
          <p class="text-red-500 text-sm mt-4 text-center">{loginError}</p>
        {/if}
      </div>
    </div>
  {:else}
    <!-- Admin Dashboard Section -->
    <div class="container mx-auto p-4 sm:p-6 lg:p-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Submissions Dashboard</h1>
        <button
          on:click={handleLogout}
          class="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        {#if isLoading}
          <div class="p-4 text-center text-gray-500">
            <p>Loading submissions...</p>
          </div>
        {:else if submissions.length === 0}
          <div class="p-4 text-center text-gray-500">
            <p>No submissions found.</p>
          </div>
        {:else}
          {#each submissions as sub (sub.id)}
            <div
              class="border-b border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div class="flex-grow mb-4 md:mb-0">
                <div class="flex items-center mb-2">
                  <p class="font-bold text-lg mr-3">{sub.name}</p>
                  <span
                    class="text-xs font-semibold px-2 py-1 rounded-full"
                    class:status-accepted={sub.accepted}
                    class:status-pending={!sub.accepted}
                  >
                    {sub.accepted ? "Accepted" : "Pending"}
                  </span>
                </div>
                <p class="text-sm text-gray-600">
                  <strong>Email:</strong>
                  {sub.email}
                </p>
                <p class="text-sm text-gray-600">
                  <strong>Phone:</strong>
                  {sub.phone || "N/A"}
                </p>
                <p class="text-xs text-gray-400 mt-1">
                  ID: {sub.id} | Submitted: {new Date(
                    sub.created_at
                  ).toLocaleString()}
                </p>
              </div>
              <div class="flex-shrink-0 flex space-x-2">
                {#if sub.accepted}
                  <button
                    on:click={() => revokeSubmission(sub)}
                    class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition text-sm"
                  >
                    Revoke
                  </button>
                {:else}
                  <a
                    href={`/admin/submissions/email?id=${sub.id}&to=${sub.email}`}
                    class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition text-sm text-center"
                  >
                    Accept
                  </a>
                {/if}
                <button
                  on:click={() => deleteSubmission(sub.id)}
                  class="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  {/if}
</div>