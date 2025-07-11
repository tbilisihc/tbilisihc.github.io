<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";

  // Canvas and particle variables
  let canvas;
  let ctx;
  let particles = [];
  const particleCount = 70;
  let animationFrameId;

  // --- Particle Animation Logic ---
  class Particle {
    constructor(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      if (!canvas) return;
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
      if (!ctx) return;
      // Use a light blue for the particles to match the new theme
      ctx.fillStyle = "rgba(173, 216, 230, 0.6)"; // Light blue particles
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    if (!canvas) return;
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
</script>

<div class="page-wrapper">
  <canvas bind:this={canvas} id="background-canvas"></canvas>
  <main>
    <div class="content-scroller">
      <section id="why-sponsor">
        <h2 class="section-title">
          {$_("sponsor_page.why_sponsor.title")}
        </h2>
        <p class="section-subtitle">
          {$_("sponsor_page.why_sponsor.subtitle")}
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon-wrapper">
              <svg
                class="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path></svg
              >
            </div>
            <h3 class="benefit-title">
              {$_("sponsor_page.benefits.free.title")}
            </h3>
            <p class="benefit-text">
              {$_("sponsor_page.benefits.free.text")}
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon-wrapper">
              <svg
                class="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.433 13.646a1.76 1.76 0 012.164-3.003l6.536-2.924a1.76 1.76 0 012.164 3.003l-6.536 2.924a1.76 1.76 0 01-2.164-3.003z"
                ></path></svg
              >
            </div>
            <h3 class="benefit-title">
              {$_("sponsor_page.benefits.expensive.title")}
            </h3>
            <p class="benefit-text">
              {$_("sponsor_page.benefits.expensive.text")}
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon-wrapper">
              <svg
                class="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path></svg
              >
            </div>
            <h3 class="benefit-title">
              {$_("sponsor_page.benefits.impact.title")}
            </h3>
            <p class="benefit-text">
              {$_("sponsor_page.benefits.impact.text")}
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 class="section-title">
          {$_("sponsor_page.contact.title")}
        </h2>
        <p class="contact-subtitle">
          {$_("sponsor_page.contact.subtitle")}
        </p>
        <div class="contact-actions">
          <a href="mailto:tbilisihc@yahoo.com" class="cta-button"
            >{$_("sponsor_page.contact.button")}</a
          >

          <p class="patreon-link">
            {$_("sponsor_page.patreon.text")}
            <a href="https://www.patreon.com/tbilisihc"
              >{$_("sponsor_page.patreon.link_text")}</a
            >,
            <a href="https://ko-fi.com/tbilisihc">Ko-fi</a>
          </p>
        </div>
      </section>
    </div>
  </main>
</div>


