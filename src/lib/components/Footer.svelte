<script>
  import { _ } from "svelte-i18n";
  import navigation from "$lib/arrays/navigation.js";
</script>

<footer class="bg-gray-800 text-white py-8">
  <div class="container mx-auto px-6">
    <div class="columns flex flex-wrap">
      <div class="mt-20 w-full md:w-1/2">
        <h3 class="text-lg font-bold">{$_("navigation.about")}</h3>
        <p class="mt-2 max-w-md">&nbsp; {$_(`footer.about`)}</p>
      </div>
      <div class="mt-20 w-full md:w-1/4">
        <h3 class="text-lg font-bold">{$_("navigation.links")}</h3>
        <ul class="mt-2 space-y-2">
          {#each navigation.about as item}
            <li>
              <a href={item.href} class="hover:underline">
                {$_(`${item.name}`)}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="mt-20 w-full md:w-1/4">
        <h3 class="text-lg font-bold">Social</h3>
        <ul class="mt-2 space-y-2">
          {#each navigation.social as item}
            <li>
              <a
                href={item.href}
                class="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="mt-8 border-t border-gray-700 pt-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Tbilisi Hack Club. {$_(
          "footer.right"
        )}
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #1f2937; /* Gray 800 */
    color: rgba(255, 255, 255, 0.702);
  }
  h3 {
    color: #f3f4f6; /* Gray 200 */
  }
  @media (max-width: 1020px) {
    .columns {
      text-align: center;
      -ms-flex-align: center;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
