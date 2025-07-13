<script>
  import { onMount } from "svelte";

  export let data;
  const { member } = data;

  let isVisible = false;

  // When the component mounts, set isVisible to true to trigger the animation
  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>{member.Name} | Tbilisi Hack Club</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    rel="stylesheet"
    as="style"
    href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
  />
</svelte:head>

<div
  class="relative flex size-full min-h-screen flex-col bg-slate-100 text-slate-800 group/design-root overflow-x-hidden"
>
  <div class="mt-8 text-center">
    <a href="/about" class=""> &larr; Back to About Page </a>
  </div>
  <div
    class="layout-container flex h-full grow flex-col items-center justify-center p-4 sm:p-8"
  >
    <div
      class="w-full max-w-4xl rounded-xl bg-white shadow-xl transition-all duration-700 ease-out"
      class:is-visible={isVisible}
    >
      <div class="p-8 @container">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            class="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <img
              class="mb-4 h-32 w-32 rounded-full bg-cover bg-center bg-no-repeat shadow-md sm:h-40 sm:w-40"
              src="https://tbilisi.hackclub.com/assets/assets/team/{member.slug}.png"
              alt="{member.Name}'s Avatar"
            />
            <h1 class="text-3xl font-bold text-slate-900">{member.Name}</h1>
            <p class="text-lg text-indigo-600">{member.Title}</p>
            <p class="mt-1 text-sm text-slate-500">Joined in {member.Joined}</p>
          </div>
          <div class="md:col-span-2">
            <div class="prose max-w-none text-slate-600">
              {@html member.Bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    animation: floatIn 0.8s ease-out forwards;
  }
</style>
