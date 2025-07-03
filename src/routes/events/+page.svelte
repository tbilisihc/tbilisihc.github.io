<script>
    import EventCard from "$lib/components/EventCard.svelte";
    import { Events } from "$lib/arrays/events.js";
</script>

<svelte:head>
    <title>Events | Tbilisi Hack Club</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-slate-900">
        Upcoming Events
    </h1>

    <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each Events as event}
            <EventCard {event} />
        {/each}
    </div>
</div>
