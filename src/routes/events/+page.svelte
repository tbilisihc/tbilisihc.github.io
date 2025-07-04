<script lang="js">
    import { Event_list } from "./events.js";

    const upcomingEvents = Event_list.filter((event) => !event.Past);
    const pastEvents = Event_list.filter((event) => event.Past);
</script>

<svelte:head>
    <title>Tbilisi Hack Club - Events</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Poppins:wght@400;700;800;900&display=swap"
        rel="stylesheet"
    />
    <style>
        @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        body {
            font-family: "Inter", sans-serif;
            background-color: #f8f9fa; /* Light grey background */
            color: #1f2937;
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

<div class="events-page-container">
    <section class="animated-section">
        <h1 class="page-title">Events</h1>
        <p class="page-subtitle">
            Join us for workshops, hackathons, and more. Let's build something
            amazing together.
        </p>
    </section>

    <!-- Upcoming Events Section -->
    <section class="animated-section" style="animation-delay: 200ms;">
        <h2 class="section-title">Upcoming Events</h2>
        {#if upcomingEvents.length > 0}
            <div class="events-grid">
                {#each upcomingEvents as event, i}
                    <div
                        class="event-card"
                        style="animation-delay: {i * 100}ms"
                    >
                        <a href="/events/{event.Slug}" class="image-link">
                            <img
                                class="main-image"
                                src={event.Image}
                                alt={event.Name}
                            />
                        </a>
                        <div class="card-content">
                            <p class="event-date">{event.Date}</p>
                            <h3 class="event-name">{@html event.Name}</h3>
                            <p class="event-description">
                                {@html event.Description}
                            </p>
                            <a
                                href="/events/{event.Slug}"
                                class="details-button"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="no-events-card">
                <p>
                    No upcoming events scheduled at the moment. Check back soon!
                </p>
            </div>
        {/if}
    </section>

    <!-- Past Events Section -->
    {#if pastEvents.length > 0}
        <section class="animated-section" style="animation-delay: 400ms;">
            <h2 class="section-title">Past Events</h2>
            <div class="events-grid past-events">
                {#each pastEvents as event, i}
                    <div
                        class="event-card is-past"
                        style="animation-delay: {i * 100}ms"
                    >
                        <a href="/events/{event.Slug}" class="image-link">
                            <img
                                class="main-image"
                                src={event.Image}
                                alt={event.Name}
                            />
                        </a>
                        <div class="card-content">
                            <p class="event-date">{event.Date}</p>
                            <h3 class="event-name">{@html event.Name}</h3>
                            <p class="event-description">
                                {@html event.Description}
                            </p>
                            <a
                                href="/events/{event.Slug}"
                                class="details-button"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    {/if}
</div>

<style>
    .events-page-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .animated-section {
        opacity: 0;
        animation: floatIn 0.8s ease-out forwards;
    }

    .page-title {
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
        color: #111827;
    }

    .page-subtitle {
        font-size: 1.1rem;
        text-align: center;
        color: #4b5563;
        margin-top: 0.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .section-title {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 2rem;
        color: #1f2937;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.75rem;
    }

    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
    }

    .event-card {
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        opacity: 0; /* For animation */
        animation: floatIn 0.7s ease-out forwards;
    }

    .event-card:hover {
        transform: translateY(-5px);
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
    }

    .image-link {
        display: block;
        height: 200px;
    }

    .main-image {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        object-position: center;
        transition: transform 0.3s ease;
    }

    .event-card:hover .main-image {
        transform: scale(1.05);
    }

    .card-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .event-name {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .event-date {
        font-size: 0.875rem;
        font-weight: 500;
        color: #4b5563;
        margin-bottom: 0.5rem;
    }

    .event-description {
        font-size: 1rem;
        color: #374151;
        line-height: 1.6;
        flex-grow: 1;
        margin-bottom: 1.5rem;
    }

    .details-button {
        display: block;
        text-align: center;
        background-color: #3b82f6; /* Blue */
        color: #ffffff;
        font-weight: 700;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        margin-top: auto;
    }

    .details-button:hover {
        background-color: #2563eb;
        transform: scale(1.03);
    }

    /* Styles for past events */
    .event-card.is-past {
        opacity: 0.7;
    }
    .event-card.is-past .main-image {
        filter: grayscale(80%);
    }
    .event-card.is-past:hover {
        opacity: 1;
        transform: translateY(-5px);
    }
    .event-card.is-past:hover .main-image {
        filter: grayscale(0%);
    }

    /* No events card */
    .no-events-card {
        background-color: #fff;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        color: #6b7280;
        border: 2px dashed #d1d5db;
    }
</style>
