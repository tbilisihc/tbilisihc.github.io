<script>
  import { onMount } from "svelte";

  // State variables for the form
  let githubUsername = "";
  let isLoading = false;
  let successMessage = "";
  let errorMessage = "";
  let canvas;
  let ctx;

  // --- Particle Animation Logic ---
  let particles = [];
  const particleCount = 70;
  let animationFrameId;

  class Particle {
    constructor(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw() {
      // Use a light blue for the particles to match the new theme
      ctx.fillStyle = "rgba(173, 216, 230, 0.6)"; // Light blue particles
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      let size = Math.random() * 2 + 1;
      let x = Math.random() * (canvas.width - size * 2) + size;
      let y = Math.random() * (canvas.height - size * 2) + size;
      let speedX = (Math.random() - 0.5) * 0.5;
      let speedY = (Math.random() - 0.5) * 0.5;
      particles.push(new Particle(x, y, size, speedX, speedY));
    }
  }

  function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animateParticles);
  }

  onMount(() => {
    ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial setup
    animateParticles();

    return () => {
      // Cleanup on component unmount
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  });

  // --- Form Submission Logic ---
  async function handleInvite() {
    isLoading = true;
    successMessage = "";
    errorMessage = "";

    try {
      const response = await fetch(
        "https://org-invite-git.vercel.app/api/github",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ github: githubUsername }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "An unknown error occurred.");
      }

      successMessage = result.message;
      githubUsername = "";
    } catch (err) {
      if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = "An unknown error occurred.";
      }
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="page-wrapper">
  <canvas bind:this={canvas} id="background-canvas"></canvas>
  <main>
    <div class="container">
      <h1>Invite to GitHub</h1>
      <p>Enter a GitHub username to send them an invitation.</p>

      <form on:submit|preventDefault={handleInvite}>
        <div class="form-group">
          <label for="github-username">GitHub Username</label>
          <input
            id="github-username"
            type="text"
            bind:value={githubUsername}
            placeholder="e.g., octocat"
            required
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading} class:loading={isLoading}>
          {#if isLoading}
            <div class="spinner"></div>
            <span>Sending...</span>
          {:else}
            <span>Send Invitation</span>
          {/if}
        </button>
      </form>

      {#if successMessage}
        <div class="message success">
          <p>{successMessage}</p>
        </div>
      {/if}

      {#if errorMessage}
        <div class="message error">
          <p>{errorMessage}</p>
        </div>
      {/if}
    </div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    overflow: hidden; /* Prevent scrolling caused by canvas */
  }

  .page-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* Blue gradient background */
    background: linear-gradient(45deg, #0d324d, #1a5f7a);
  }

  #background-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 2; /* Ensure form is above canvas */
    animation: fadeIn 1s ease-out;
  }

  .container {
    /* Dark blue, glassy container */
    background-color: rgba(17, 25, 40, 0.85);
    backdrop-filter: blur(10px);
    padding: 2.5rem 3rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 400px;
    width: 90%;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }

  .icon-container {
    margin-bottom: 1rem;
    color: #f0f8ff; /* AliceBlue for the icon */
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: #ffffff; /* White text */
  }

  p {
    color: #61dafb; /* Bright blue accent */
    margin-bottom: 2rem;
  }

  .form-group {
    text-align: left;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #f0f8ff;
  }

  input {
    width: 100%;
    padding: 0.85rem 1rem;
    background-color: #1c2a3e; /* Dark blue input background */
    border: 1px solid #2c4a6e; /* Darker blue border */
    border-radius: 8px;
    font-size: 1rem;
    color: #ffffff;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  input:focus {
    outline: none;
    border-color: #61dafb; /* Blue accent on focus */
    box-shadow: 0 0 0 3px rgba(97, 218, 251, 0.3);
  }

  input:disabled {
    background-color: #2a3b4f;
    cursor: not-allowed;
  }

  button {
    width: 100%;
    padding: 0.85rem;
    background-color: #61dafb; /* Bright blue button */
    color: #0d324d; /* Dark blue text for contrast */
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  button:hover:not(:disabled) {
    background-color: #82e9ff; /* Lighter blue on hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(97, 218, 251, 0.2);
  }

  button:disabled {
    background-color: #3a7a94; /* Muted blue for disabled */
    cursor: not-allowed;
  }

  .message {
    margin-top: 1.5rem;
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: 500;
    text-align: center;
    color: #f8f8f2;
  }

  .message.success {
    background-color: rgba(80, 250, 123, 0.2);
    border: 1px solid #50fa7b;
  }

  .message.error {
    background-color: rgba(255, 85, 85, 0.2);
    border: 1px solid #ff5555;
  }

  .spinner {
    border: 2px solid rgba(240, 248, 255, 0.3);
    border-top: 2px solid #f0f8ff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
