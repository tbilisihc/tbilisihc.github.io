<script lang="js">
    import team from "$lib/arrays/team.js";
    import { _ } from "svelte-i18n";

    // Fallback image handler
    function handleImgError(event, name) {
        const initial = name.charAt(0).toUpperCase();
        event.target.src = `https://placehold.co/96x96/e2e8f0/475569?text=${initial}`;
    }
</script>

<svelte:head>
    <title>Tbilisi Hack Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=Poppins:wght@400;700;800;900&display=swap"
        rel="stylesheet"
    />
    <style>
        @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        body {
            font-family: "Inter", sans-serif;
            background-color: #f8f9fa; /* Light grey background for the whole page */
            color: #1f2937; /* Default dark text color */
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
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

<main class="page-wrapper">
    <section class=" text-black py-20 md:py-32 overflow-hidden">
        <div class="container mx-auto px-6 text-center animated-section">
            <h1
                class="text-4xl md:text-6xl font-bold mb-4 leading-tight font-heading"
            >
                {$_("about_page.hero.title")}
            </h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-500">
                {$_("about_page.hero.description")}
            </p>
        </div>
    </section>

    <section id="about" class="py-16 md:py-24 bg-white">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 200ms;"
        >
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="section-title text-gray-800">
                    {@html $_("about_page.what_is.title")}
                </h2>
                <p class="section-paragraph">
                    {$_("about_page.what_is.description_1")}
                </p>
                <p class="section-paragraph">
                    {@html $_("about_page.what_is.description_2")}
                </p>
            </div>
        </div>
    </section>

    <section id="mission" class="py-16 md:py-24 bg-gray-50">
        <div
            class="container mx-auto px-6 text-center animated-section"
            style="animation-delay: 400ms;"
        >
            <h2 class="section-title text-gray-800">
                {$_("about_page.mission.title")}
            </h2>
            <p class="section-paragraph max-w-4xl mx-auto mb-12">
                {$_("about_page.mission.description")}
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                <div class="info-card">
                    <h3 class="card-title">
                        {$_("about_page.mission.cards.creation.title")}
                    </h3>
                    <p class="card-text">
                        {$_("about_page.mission.cards.creation.text")}
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">
                        {$_("about_page.mission.cards.inclusive.title")}
                    </h3>
                    <p class="card-text">
                        {$_("about_page.mission.cards.inclusive.text")}
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">
                        {$_("about_page.mission.cards.connection.title")}
                    </h3>
                    <p class="card-text">
                        {$_("about_page.mission.cards.connection.text")}
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">
                        {$_("about_page.mission.cards.skills.title")}
                    </h3>
                    <p class="card-text">
                        {$_("about_page.mission.cards.skills.text")}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="events" class="py-16 md:py-24 bg-white">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 600ms;"
        >
            <h2 class="section-title text-gray-800 text-center">
                {@html $_("about_page.what_we_do.title")}
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">
                        {$_("about_page.what_we_do.cards.workshops.title")}
                    </h3>
                    <p class="card-text mt-2">
                        {$_("about_page.what_we_do.cards.workshops.text")}
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">
                        {$_("about_page.what_we_do.cards.pbl.title")}
                    </h3>
                    <p class="card-text mt-2">
                        {$_("about_page.what_we_do.cards.pbl.text")}
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">
                        {$_("about_page.what_we_do.cards.hackathons.title")}
                    </h3>
                    <p class="card-text mt-2">
                        {$_("about_page.what_we_do.cards.hackathons.text")}
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">
                        {$_("about_page.what_we_do.cards.speakers.title")}
                    </h3>
                    <p class="card-text mt-2">
                        {$_("about_page.what_we_do.cards.speakers.text")}
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">
                        {$_("about_page.what_we_do.cards.collaboration.title")}
                    </h3>
                    <p class="card-text mt-2">
                        {$_("about_page.what_we_do.cards.collaboration.text")}
                    </p>
                </div>
                <div
                    class="info-card bg-blue-500 text-white flex items-center justify-center"
                >
                    <p class="font-bold text-xl text-center">
                        {$_("about_page.what_we_do.note")}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="py-16 md:py-24 bg-gray-50">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 800ms;"
        >
            <h2 class="section-title text-gray-800 text-center">
                {$_("about_page.team.title")}
            </h2>
            <div
                class="flex flex-row flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-12"
            >
                {#each team as teamMember}
                    <a
                        href={teamMember.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-center transition-transform duration-300 hover:scale-110 group"
                    >
                        <img
                            src={teamMember.Avatar}
                            alt={teamMember.Name}
                            class="rounded-full h-24 w-24 sm:h-32 sm:w-32 mb-3 shadow-lg mx-auto object-cover border-4 border-white group-hover:border-blue-300 transition-colors"
                            on:error={(e) => handleImgError(e, teamMember.Name)}
                        />
                        <p
                            class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors"
                        >
                            {teamMember.Name}
                        </p>
                    </a>
                {/each}
            </div>
        </div>
    </section>

    <section id="join" class="hero-bg">
        <div
            class="container mx-auto px-6 py-16 md:py-24 text-center text-white animated-section"
            style="animation-delay: 1000ms;"
        >
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 font-heading">
                {$_("about_page.join.title")}
            </h2>
            <p class="section-paragraph max-w-3xl mx-auto text-gray-200 mb-8">
                {$_("about_page.join.description")}
            </p>
            <a href="/join" class="cta-button"
                >{$_("about_page.join.cta_button")}</a
            >
        </div>
    </section>
</main>

<style>
    .hero-bg {
        /* Kept your official gradient */
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

    /* Added a subtle texture overlay to the hero sections */
    .hero-bg::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.04"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    }

    .page-wrapper {
        @apply w-full;
    }

    .animated-section {
        opacity: 0;
        animation: floatIn 0.8s ease-out forwards;
    }

    .section-title {
        @apply text-3xl md:text-4xl font-extrabold mb-4;
    }

    .section-paragraph {
        @apply text-lg leading-relaxed mb-4;
    }

    .info-card {
        @apply rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2;
    }

    .card-title {
        @apply text-xl font-bold text-gray-800 mb-2;
    }

    .card-text {
        @apply text-gray-600 leading-relaxed;
    }

    .cta-button {
        @apply inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300;
    }
    .cta-button:hover {
        @apply scale-105 bg-gray-100 shadow-2xl;
    }
    .cta-button:active {
        @apply scale-95 brightness-90;
    }
</style>
