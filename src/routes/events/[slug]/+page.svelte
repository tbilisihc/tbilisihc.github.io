<script>
  import { page } from '$app/stores';
  import {Event_list} from '../events.js';
  import { derived } from 'svelte/store';

  // Get the slug from the URL params
  const event = derived(page, $page => {
    const slug = $page.params.slug;
    return Event_list.find(e => e.Slug === slug);
  });
</script>

{#if $event}
<div style="text-align: center; display: flex; flex-direction: column; align-items: center; margin-top: 2em;">
    <img src={$event.Image} alt="Event Image" style="width: 30%; height: auto; object-fit: cover; margin-bottom: 1em;" />
    </div>
  <h1>&nbsp {$event.Name}</h1> 
  <p id = "date">{$event.Date}</p>
  <p id ="description">{@html $event.BigDescription}</p>
{:else}
  <p>Event not found.</p>
{/if}

<style>
  h1 {
    text-align: center;
    font-size: 2em;
  }
  
  #date {
    text-align: center;
    color: #818181;
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  #description {
    font-size: 1.1em;
    line-height: 1.6;
    max-width: 800px;
    margin: auto;
  }
</style>