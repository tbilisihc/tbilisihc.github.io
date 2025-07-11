import { Event_list } from "../events.js";

// Tells SvelteKit which slugs to prerender
export function entries() {
  return Event_list.map((event) => ({ slug: event.Slug }));
}
