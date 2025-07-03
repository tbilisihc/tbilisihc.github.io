<script lang="js">
    import sponsors from "$lib/arrays/sponsors.js";
</script>

<svelte:head>
    <title>Home | Tbilisi Hack Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;800;900&display=swap"
        rel="stylesheet"
    />
    <style>
        @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        body {
            font-family: "Inter", sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        .font-heading {
            font-family: "Poppins", sans-serif;
        }
        /* Keyframes for the float-in animation */
        @keyframes floatIn {
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
</svelte:head>

<div class="page-wrapper">
    <main>
        <section class="hero-bg text-white py-20 md:py-32 overflow-hidden">
            <div class="container mx-auto px-6 text-center animated-section">
                <h2
                    class="text-4xl md:text-6xl font-black mb-4 leading-tight font-heading"
                >
                    It's time to build in Tbilisi.
                </h2>
                <p
                    class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100/80"
                >
                    A club for students who love to code, create, and launch
                    their ideas. Welcome to the first Hack Club in Tbilisi,
                    where you learn to code by building things you're passionate
                    about.
                </p>
                <a href="/join" class="cta-button">Become a Member</a>
            </div>
        </section>

        <section id="about" class="py-16 md:py-24 bg-[#f8f9fa] text-gray-800">
            <div
                class="container mx-auto px-6 animated-section"
                style="animation-delay: 200ms;"
            >
                <div class="max-w-4xl mx-auto text-center">
                    <h3
                        class="text-3xl md:text-4xl font-extrabold mb-8 font-heading"
                    >
                        This is your club.
                    </h3>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Tbilisi Hack Club is a community of young makers,
                        coders, and creators. Our philosophy is simple: the best
                        way to learn is by doing. We provide the space,
                        community, and support. You bring your curiosity and
                        ideas. No experience required.
                    </p>
                </div>
            </div>
        </section>

        <section id="events" class="py-16 md:py-24">
            <div
                class="container mx-auto px-6 animated-section"
                style="animation-delay: 400ms;"
            >
                <h3
                    class="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center font-heading"
                >
                    What's Happening?
                </h3>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="event-card">
                        <div class="icon-wrapper bg-blue-100 text-blue-500">
                            <svg
                                class="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                ></path></svg
                            >
                        </div>
                        <h4 class="text-xl font-bold text-gray-800 mb-2">
                            Workshops
                        </h4>
                        <p class="text-gray-600">
                            Dive into new technologies with hands-on,
                            project-based workshops, from web dev to AI.
                        </p>
                    </div>
                    <div class="event-card">
                        <div class="icon-wrapper bg-green-100 text-green-500">
                            <svg
                                class="w-8 h-8"
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
                        <h4 class="text-xl font-bold text-gray-800 mb-2">
                            Club Meetings
                        </h4>
                        <p class="text-gray-600">
                            Share what you're working on, get help from peers,
                            and find collaborators for new projects.
                        </p>
                    </div>
                    <div class="event-card">
                        <div class="icon-wrapper bg-yellow-100 text-yellow-500">
                            <svg
                                class="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path></svg
                            >
                        </div>
                        <h4 class="text-xl font-bold text-gray-800 mb-2">
                            Hackathons
                        </h4>
                        <p class="text-gray-600">
                            Join high-energy coding events to build amazing
                            projects in a single weekend.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="sponsors"
            class="py-16 md:py-24 bg-[#f8f9fa] text-gray-800"
        >
            <div
                class="container mx-auto px-6 animated-section"
                style="animation-delay: 600ms;"
            >
                <h3
                    class="text-3xl md:text-4xl font-extrabold mb-12 text-center font-heading"
                >
                    Our Friends & Supporters
                </h3>
                <div
                    class="flex justify-center items-center gap-x-12 gap-y-8 flex-wrap"
                >
                    {#each sponsors as sponsor}
                        <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-center transition-transform duration-300 hover:scale-110 group"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                class="rounded-full h-24 w-24 sm:h-32 sm:w-32 mb-3 shadow-lg mx-auto object-cover border-4 border-white group-hover:border-blue-300 transition-colors"
                            />
                            <p
                                class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors"
                            >
                                {sponsor.name}
                            </p>
                        </a>
                    {/each}
                </div>
                <div class="text-center mt-12">
                    <a
                        href="/sponsor"
                        class="text-black-600 hover:text-blue-800 underline"
                        >Want to sponsor us?</a
                    >
                </div>
            </div>
        </section>
    </main>
</div>

<style>
    .hero-bg {
        background: linear-gradient(
            45deg,
            rgb(10, 74, 89) 0%,
            rgb(11, 82, 124) 8.333%,
            rgb(13, 92, 159) 16.667%,
            rgb(16, 104, 194) 25%,
            rgb(18, 118, 227) 33.333%,
            rgb(21, 133, 255) 41.667%,
            rgb(24, 150, 255) 50%,
            rgb(28, 169, 255) 58.333%,
            rgb(31, 188, 255) 66.667%,
            rgb(35, 209, 255) 75%,
            rgb(39, 230, 255) 83.333%,
            rgb(43, 251, 255) 91.667%,
            rgb(47, 255, 255) 100%
        );
        position: relative;
    }

    .hero-bg::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.04"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    }

    .animated-section {
        opacity: 0;
        animation: floatIn 0.8s ease-out forwards;
    }

    .cta-button {
        @apply inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300;
    }
    .cta-button:hover {
        @apply scale-105 bg-gray-100 shadow-2xl;
    }
    .cta-button:active {
        @apply scale-95 brightness-90;
    }

    .event-card {
        @apply bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300;
        border: 1px solid transparent;
    }

    .event-card:hover {
        @apply -translate-y-2 shadow-xl;
        border-color: #93c5fd; /* Light blue border on hover */
    }

    .icon-wrapper {
        @apply p-4 rounded-full mb-4 inline-flex;
    }

    .sponsor-link {
        @apply flex flex-col items-center text-gray-700 transition-transform duration-300;
    }

    .sponsor-link:hover {
        @apply text-blue-600 scale-110;
    }
</style>
