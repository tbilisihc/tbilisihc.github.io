<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import { get } from "svelte/store";

  let contactForm;
  let submitButton;
  let feedbackDiv;
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let isSubmitting = false;
  let feedbackMessage = "";
  let feedbackType = ""; // 'success' or 'error'

  const webhookUrl = "https://secure-discord-webhook.vercel.app/api/contact";
  const emailUrl = "https://tbilisihc-auto-email.vercel.app/api/welcome";

  async function handleSubmit() {
    isSubmitting = true;
    feedbackMessage = "";

    const t = get(_);

    const messageContent = `
			${t("contact_page.discord_notification.title")}
			---------------------------------
			${t("contact_page.discord_notification.from", { values: { name, email } })}
			${t("contact_page.discord_notification.subject", { values: { subject: subject || t("contact_page.discord_notification.no_subject") } })}
			${t("contact_page.discord_notification.message")}
			${message}
			---------------------------------
		`;

    const discordPayload = { content: messageContent };

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });

      if (webhookResponse.ok) {
        feedbackMessage = t("contact_page.feedback.success");
        feedbackType = "success";

        const originalEmail = email;
        const originalName = name;

        // Clear form fields immediately for better UX
        name = "";
        email = "";
        subject = "";
        message = "";

        // Send confirmation email
        try {
          // --- CORRECTED ---
          // This block now mirrors the working logic from the 'join' page
          const emailSubject = t("contact_page.auto_reply.subject", {
            values: { name: originalName },
          });
          const emailBody = t("contact_page.auto_reply.body_html", {
            values: { name: originalName },
          });

          const emailData = {
            recipient: originalEmail,
            subject: emailSubject,
            message: emailBody, // The key for the body is 'message' as per the join page logic
          };

          const emailResponse = await fetch(emailUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData),
          });

          if (!emailResponse.ok) {
            console.error("Failed to send confirmation email.");
          } else {
            console.log("Confirmation email sent successfully.");
          }
        } catch (emailError) {
          console.error(
            "Network error sending confirmation email:",
            emailError
          );
        }
      } else {
        const errorText = await webhookResponse.text();
        feedbackMessage = t("contact_page.feedback.error", {
          values: { status: webhookResponse.status },
        });
        feedbackType = "error";
        console.error("Webhook error:", errorText);
      }
    } catch (error) {
      feedbackMessage = t("contact_page.feedback.network_error");
      feedbackType = "error";
      console.error("Fetch error:", error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{$_("contact_page.title")} - Tbilisi Hack Club</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <main class="flex-grow container mx-auto px-4 py-12 md:py-20">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900">
          {$_("contact_page.title")}
        </h1>
        <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {$_("contact_page.subtitle")}
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg"
      >
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">
            {$_("contact_page.form_title")}
          </h2>
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700"
                >{$_("contact_page.form.name_label")}</label
              >
              <div class="mt-1">
                <input
                  bind:value={name}
                  type="text"
                  name="name"
                  id="name"
                  required
                  class="form-input block w-full rounded-md border-slate-300 shadow-sm transition duration-150 ease-in-out sm:text-sm"
                  placeholder={$_("contact_page.form.name_placeholder")}
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-slate-700"
                >{$_("contact_page.form.email_label")}</label
              >
              <div class="mt-1">
                <input
                  bind:value={email}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="form-input block w-full rounded-md border-slate-300 shadow-sm transition duration-150 ease-in-out sm:text-sm"
                  placeholder={$_("contact_page.form.email_placeholder")}
                />
              </div>
            </div>
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-slate-700"
                >{$_("contact_page.form.subject_label")}</label
              >
              <div class="mt-1">
                <input
                  bind:value={subject}
                  type="text"
                  name="subject"
                  id="subject"
                  class="form-input block w-full rounded-md border-slate-300 shadow-sm transition duration-150 ease-in-out sm:text-sm"
                  placeholder={$_("contact_page.form.subject_placeholder")}
                />
              </div>
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-slate-700"
                >{$_("contact_page.form.message_label")}</label
              >
              <div class="mt-1">
                <textarea
                  bind:value={message}
                  id="message"
                  name="message"
                  rows="4"
                  required
                  class="form-input block w-full rounded-md border-slate-300 shadow-sm transition duration-150 ease-in-out sm:text-sm"
                  placeholder={$_("contact_page.form.message_placeholder")}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
              >
                {isSubmitting
                  ? $_("contact_page.form.submitting_button")
                  : $_("contact_page.form.submit_button")}
              </button>
            </div>
          </form>
          {#if feedbackMessage}
            <div
              class:success-message={feedbackType === "success"}
              class:error-message={feedbackType === "error"}
            >
              {feedbackMessage}
            </div>
          {/if}
        </div>

        <div class="flex flex-col space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              {$_("contact_page.contact_info_title")}
            </h3>
            <div class="space-y-4 text-slate-600">
              <div class="flex items-center space-x-3">
                <svg
                  class="h-6 w-6 text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:tbilisihc@yahoo.com"
                  class="hover:text-indigo-600">tbilisihc@yahoo.com</a
                >
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              {$_("contact_page.socials_title")}
            </h3>
            <div class="flex space-x-4">
              <a
                href="https://github.com/tbilisihc"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-500 hover:text-indigo-600"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/tbilisi_hc"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-500 hover:text-indigo-600"
              >
                <span class="sr-only">X</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/tbilisihc"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-500 hover:text-indigo-600"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="h-11 w-11"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-slate-200"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .success-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: #f0fdf4;
    color: #15803d;
  }
  .error-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: #fef2f2;
    color: #b91c1c;
  }
  /* Additional style for focus states to match the theme */
  .form-input:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
</style>
