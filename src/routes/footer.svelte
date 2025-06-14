<script>
  import Link from "../link.svelte";
</script>

<footer class="flex justify-center mt-auto scale-[0.7]">
          <div class="flex max-w-[960px] flex-1 flex-col">
            <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div class="flex flex-row items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a class="text-[#49709c] text-base font-normal leading-normal min-w-40" href="https://tbilisi.hackclub.com/privacy-policy">Privacy Policy</a>
                <a class="text-[#49709c] text-base font-normal leading-normal min-w-40" href="https://tbilisi.hackclub.com/terms-and-conditions">Terms of Service</a>
              </div>
              <div class = "flex flex-row text-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link
                  link="https://www.facebook.com/groups/2449492548753412"
                  text=""
                  logo="https://cdn.simpleicons.org/facebook/49709c"
                />
                <Link
                  link="mailto:tbilisihc@yahoo.com"
                  text=""
                  logo="https://cdn.simpleicons.org/gmail/49709c"
                />
                <Link
                  link="https://t.me/tbilisihc"
                  text=""
                  logo="https://cdn.simpleicons.org/telegram/49709c"
                />
                <Link
                  link="https://instagram.com/tbilisihc"
                  text=""
                  logo="https://cdn.simpleicons.org/instagram/49709c"
                />
              </div>
              <p class="text-[#49709c] font-normal whitespace-nowrap">@2025 Tbilisi Hack Club.</p>
              <p class="text-[#49709c] font-normal whitespace-nowrap">All rights reserved.</p>
            </footer>
          </div>
        </footer>