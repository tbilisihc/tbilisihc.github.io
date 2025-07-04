<script lang="js">
    import team from "$lib/arrays/team.js";

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
    <!-- Hero Section -->
    <section class=" text-black py-20 md:py-32 overflow-hidden">
        <div class="container mx-auto px-6 text-center animated-section">
            <h1
                class="text-4xl md:text-6xl font-bold mb-4 leading-tight font-heading"
            >
                Welcome to Tbilisi Hack Club
            </h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-500">
                In a city buzzing with ancient history and a vibrant, emerging
                tech scene, a new chapter is unfolding. Welcome to a space for
                young creators, coders, and innovators to come together, learn,
                and build amazing things.
            </p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 md:py-24 bg-white">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 200ms;"
        >
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="section-title text-gray-800">
                    What is a <span class="text-blue-600">Hack Club?</span>
                </h2>
                <p class="section-paragraph">
                    Forget the stereotypes of stuffy classrooms and rigid
                    curriculums. A Hack Club is a dynamic, hands-on environment
                    where you learn by doing. It's a place to tinker, to
                    experiment, to break things and then build them back better.
                    Here, you'll find a supportive community of peers who share
                    your passion for technology.
                </p>
                <p class="section-paragraph">
                    Our club is for <strong class="text-gray-900"
                        >everyone</strong
                    >, from absolute beginners to seasoned young developers. We
                    believe that the most powerful learning happens when you're
                    driven by curiosity. We're part of a worldwide network of
                    student-led coding clubs, all fueled by the same philosophy:
                    <strong class="text-gray-900"
                        >learning to code is like gaining a superpower.</strong
                    >
                </p>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-16 md:py-24 bg-gray-50">
        <div
            class="container mx-auto px-6 text-center animated-section"
            style="animation-delay: 400ms;"
        >
            <h2 class="section-title text-gray-800">
                Our Mission: Empowering Georgia's Next Innovators 💡
            </h2>
            <p class="section-paragraph max-w-4xl mx-auto mb-12">
                Tbilisi is a city on the rise, and we see incredible potential
                within our city's youth. Our mission is to provide a platform
                for you to develop the skills, mindset, and network to thrive in
                this exciting landscape.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                <div class="info-card">
                    <h3 class="card-title">Culture of Creation</h3>
                    <p class="card-text">
                        Foster a generation of makers unafraid to experiment and
                        bring ideas to life.
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">Inclusive Space</h3>
                    <p class="card-text">
                        Find your tribe, collaborate on projects, and learn from
                        one another.
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">Global Connection</h3>
                    <p class="card-text">
                        Access a worldwide community of young innovators and
                        resources.
                    </p>
                </div>
                <div class="info-card">
                    <h3 class="card-title">21st-Century Skills</h3>
                    <p class="card-text">
                        Learn problem-solving, critical thinking, teamwork, and
                        more.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- What We Do Section -->
    <section id="events" class="py-16 md:py-24 bg-white">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 600ms;"
        >
            <h2 class="section-title text-gray-800 text-center">
                What We Do: It's All About <span class="text-blue-600"
                    >Building</span
                > 🛠️
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">Workshops</h3>
                    <p class="card-text mt-2">
                        Dive into practical, hands-on workshops on web dev,
                        Python game creation, hardware design, and more.
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">Project-Based Learning</h3>
                    <p class="card-text mt-2">
                        Got an idea? We provide the freedom and support to work
                        on projects you're passionate about.
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">Hackathons & Events</h3>
                    <p class="card-text mt-2">
                        Test your skills and create amazing things in local and
                        global competitions.
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">Guest Speakers</h3>
                    <p class="card-text mt-2">
                        Connect with professionals from Tbilisi's tech scene who
                        will share their experiences.
                    </p>
                </div>
                <div class="info-card bg-gray-50">
                    <h3 class="card-title">Global Collaboration</h3>
                    <p class="card-text mt-2">
                        Work on projects with members from other Hack Clubs
                        around the world.
                    </p>
                </div>
                <div
                    class="info-card bg-blue-500 text-white flex items-center justify-center"
                >
                    <p class="font-bold text-xl text-center">
                        Our meetings are hands-on, not lectures!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-16 md:py-24 bg-gray-50">
        <div
            class="container mx-auto px-6 animated-section"
            style="animation-delay: 800ms;"
        >
            <h2 class="section-title text-gray-800 text-center">
                Get to Know Our Team
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

    <!-- Join/CTA Section -->
    <section id="join" class="hero-bg">
        <div
            class="container mx-auto px-6 py-16 md:py-24 text-center text-white animated-section"
            style="animation-delay: 1000ms;"
        >
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 font-heading">
                The Future Is In Your Hands
            </h2>
            <p class="section-paragraph max-w-3xl mx-auto text-gray-200 mb-8">
                Tbilisi has a long and proud history of ingenuity and
                creativity. As we embrace the digital age, the spirit of
                innovation continues to thrive. Whether you dream of building
                the next great Georgian startup, developing cutting-edge
                technology, or simply want to learn a new skill and have fun,
                Tbilisi Hack Club is the place for you.
            </p>
            <a href="/join" class="cta-button">Join Us</a>
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
