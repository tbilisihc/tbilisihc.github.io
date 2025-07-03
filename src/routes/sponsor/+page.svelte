<script>
    import { onMount } from "svelte";

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

<svelte:head>
    <title>Sponsor us | Tbilisi Hack Club</title>
</svelte:head>

<div class="page-wrapper">
    <canvas bind:this={canvas} id="background-canvas"></canvas>
    <main>
        <div class="content-scroller">
            <!-- Why Sponsor Us Section -->
            <section id="why-sponsor">
                <h2 class="section-title">Why Sponsor Us?</h2>
                <p class="section-subtitle">
                    Your support empowers our community and helps us continue.
                </p>
                <div class="benefits-grid">
                    <!-- Benefit 1 -->
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
                        <h3 class="benefit-title">We are free</h3>
                        <p class="benefit-text">
                            Our team works every day and night, while keeping
                            nothing for ourselves.
                        </p>
                    </div>
                    <!-- Benefit 2 -->
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
                            Functioning of the club is expensive
                        </h3>
                        <p class="benefit-text">
                            Our club costs a lot of money to operate, which
                            comes out of our pocket.
                        </p>
                    </div>
                    <!-- Benefit 3 -->
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
                        <h3 class="benefit-title">Community Impact</h3>
                        <p class="benefit-text">
                            Invest in the local tech education and help foster
                            innovation and collaboration.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact">
                <h2 class="section-title">Ready to Become a Sponsor?</h2>
                <p class="contact-subtitle">
                    We'd love to partner with you. For custom packages or any
                    questions, please reach out to our sponsorship team.
                </p>
                <div class="contact-actions">
                    <a href="mailto:tbilisihc@yahoo.com" class="cta-button"
                        >Sponsor Us</a
                    >
                    <p class="patreon-link">
                        Or, <a href="https://www.patreon.com/tbilisihc"
                            >support us on Patreon</a
                        >
                    </p>
                </div>
            </section>
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
    }

    .page-wrapper {
        position: relative;
        width: 100vw;
        height: 100vh;
        /* Blue gradient background */
        background: linear-gradient(45deg, #0d324d, #1a5f7a);
        /* Allow vertical scrolling for new content */
        overflow-y: auto;
        overflow-x: hidden;
    }

    #background-canvas {
        position: fixed; /* Keep canvas fixed in the background */
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
        min-height: 100vh; /* Ensure it takes at least full viewport height */
        position: relative;
        z-index: 2; /* Ensure form is above canvas */
        padding: 4rem 1rem;
        box-sizing: border-box;
        animation: fadeIn 1s ease-out;
    }

    .content-scroller {
        width: 100%;
        max-width: 900px;
    }

    /* --- Styles for Sponsor/Contact Sections --- */
    #why-sponsor,
    #contact {
        padding: 4rem 1rem;
        text-align: center;
        color: #ffffff;
    }

    .section-title {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: white;
    }

    .section-subtitle,
    .contact-subtitle {
        color: #a9cce3; /* Lighter blue for subtitles */
        margin-bottom: 3rem;
    }

    .benefits-grid {
        display: grid;
        gap: 2rem;
    }

    .benefit-card {
        padding: 1.5rem;
    }

    .benefit-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        width: 4rem;
        border-radius: 9999px;
        background-color: rgba(97, 218, 251, 0.1); /* Transparent blue */
        color: #61dafb;
        margin: 0 auto 1rem auto;
    }

    .icon {
        width: 2rem;
        height: 2rem;
    }

    .benefit-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #f0f8ff;
    }

    .benefit-text {
        margin-top: 0.5rem;
        color: #a9cce3;
    }

    #contact {
        background-color: rgba(10, 20, 35, 0.5);
        border-radius: 16px;
        margin-top: 4rem;
        padding: 3rem 1rem;
    }

    .contact-subtitle {
        font-size: 1.125rem;
    }

    .contact-actions {
        margin-top: 2rem;
    }

    .cta-button {
        display: inline-block;
        background-color: #61dafb;
        color: #0d324d;
        font-weight: 600;
        padding: 1rem 2.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(97, 218, 251, 0.2);
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .cta-button:hover {
        background-color: #ffffff;
        transform: translateY(-2px);
    }

    .patreon-link {
        margin-top: 1.5rem;
        color: #a9cce3;
    }

    .patreon-link a {
        color: #61dafb;
        text-decoration: underline;
        font-weight: 600;
    }

    .patreon-link a:hover {
        color: #82e9ff;
    }

    /* --- Responsive Grid for Benefits --- */
    @media (min-width: 768px) {
        .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
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
