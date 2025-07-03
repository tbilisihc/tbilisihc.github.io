<script lang="ts">
    export let event: {
        Date: string;
        Title: string;
        Description: string;
        Slug: string;
        Image: string;
    };
</script>

<article
    class="flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
>
    <div>
        <div class="image-container">
            <img src={event.Image} class="main-image" alt={event.Title} />
        </div>
        <p class="text-sm text-slate-500">{event.Date}</p>
        <h3 class="mt-2 text-xl font-bold text-slate-900">{event.Title}</h3>
        <p class="mt-2 text-slate-600">{event.Description}</p>
    </div>

    <div class="flex-grow"></div>

    <div class="mt-6">
        <a
            href="/events/{event.Slug}"
            class="block w-full rounded-md bg-slate-900 px-4 py-3 text-center font-semibold text-white transition-colors duration-300 hover:bg-slate-700"
        >
            View Details
        </a>
    </div>
</article>

<style>
    .image-container {
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
</style>
