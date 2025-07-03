<script>
    import navigation from "$lib/arrays/navigation.js";
</script>

<footer class="bg-slate-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="space-y-8">
                <a
                    href="https://tbilisi.hackclub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-shrink-0"
                >
                    <svg
                        width="150"
                        height="60"
                        viewBox="0 0 150 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <style>
                            .logo-text {
                                font-family: -apple-system, BlinkMacSystemFont,
                                    "Segoe UI", Roboto, Helvetica, Arial,
                                    sans-serif, "Apple Color Emoji",
                                    "Segoe UI Emoji";
                                font-size: 45px;
                                font-weight: 500;
                                fill: white;
                                text-anchor: middle;
                                dominant-baseline: central;
                            }
                        </style>
                        <text x="50%" y="50%" class="logo-text">thc</text>
                    </svg>
                </a>

                <div class="flex space-x-6 mt-10">
                    {#each navigation.social as item}
                        <a
                            href={item.href}
                            class="text-slate-400 hover:text-white"
                        >
                            <span class="sr-only">{item.name}</span>
                            {@html item.icon(
                                'class="h-6 w-6" aria-hidden="true"',
                            )}
                        </a>
                    {/each}
                </div>
            </div>

            <div class="mt-16 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                    Tbilisi Hack Club
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                    {#each navigation.about as item}
                        <li>
                            <a
                                href={item.href}
                                class="text-sm leading-6 text-slate-400 hover:text-white"
                            >
                                {item.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p class="text-xs leading-5 text-slate-500 text-center">
                &copy; 2025 Tbilisi Hack Club. All rights reserved.
            </p>
        </div>
    </div>
</footer>
