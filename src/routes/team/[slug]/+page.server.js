import team from "$lib/arrays/team.js";
import { error } from "@sveltejs/kit";

// Prerender a page for each team member
export function entries() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

// Load data for the specific team member
export function load({ params }) {
  const member = team.find((member) => member.slug === params.slug);

  if (!member) {
    throw error(404, "Team member not found");
  }

  return {
    member,
  };
}
