<script lang="ts">
    import { page } from "$app/stores";
    import { derived } from "svelte/store";
    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import { Event_list } from "../events.js";

    // Get the slug from the URL params and find the corresponding event
    const event = derived(page, ($page) => {
        const slug = $page.params.slug;
        return Event_list.find((e) => e.Slug === slug);
    });
</script>

<svelte:head>
    <title>{$event ? $event.Name : "Event Not Found"} | Tbilisi Hack Club</title
    >
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

<div class="page-container">
    {#if $event}
        <article class="event-details">
            <div class="back-link-container animated-section">
                <a href="/events" class="back-link">
                    <ArrowLeft size={18} />
                    <span>Back to all events</span>
                </a>
            </div>

            <div
                class="event-banner animated-section"
                style="animation-delay: 150ms;"
            >
                <img src={$event.Image} alt="{$event.Name} banner" />
            </div>

            <div
                class="content-wrapper animated-section"
                style="animation-delay: 300ms;"
            >
                <h1 class="event-title">{@html $event.Name}</h1>
                <p class="event-date">{$event.Date}</p>
                <div class="event-description">
                    {@html $event.BigDescription}
                </div>
            </div>
        </article>
    {:else}
        <div class="not-found-container animated-section">
            <h1 class="font-heading">Event Not Found</h1>
            <p>Sorry, we couldn't find the event you were looking for.</p>
            <a href="/events" class="back-link mt-8">Back to all events</a>
        </div>
    {/if}
</div>

<style>
    .page-container {
        width: 100%;
        height: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    .animated-section {
        opacity: 0;
        animation: floatIn 0.8s ease-out forwards;
    }

    /* Back link styling */
    .back-link-container {
        margin-bottom: 2rem;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: #4b5563;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .back-link:hover {
        color: #3b82f6;
    }

    /* Hero banner for the image */
    .event-banner {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 2.5rem;
        background-color: #e5e7eb;
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
    }

    .event-banner img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    /* Wrapper for text content */
    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .event-title {
        font-size: 3rem;
        font-weight: 900;
        color: #111827;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    .event-date {
        color: #6b7280;
        font-size: 1.1rem;
        margin-bottom: 2.5rem;
    }

    .event-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #374151;
        text-align: left;
        max-width: 750px; /* Optimal reading width */
    }

    /* Make embedded elements in the description responsive */
    .event-description :global(p) {
        margin-bottom: 1.5rem;
    }

    .event-description :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 2rem 0;
    }

    /* "Not Found" message styling */
    .not-found-container {
        text-align: center;
        padding: 4rem 1rem;
    }

    .not-found-container h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .event-banner img {
            object-fit: scale-down;
        }
    }
</style>
