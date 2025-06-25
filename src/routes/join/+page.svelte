<script lang="ts">
    import { onMount } from "svelte";

    let showSuccessMessage = false;

    onMount(() => {
        const form = document.getElementById("form");

        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                const nameInput = document.getElementById(
                    "name",
                ) as HTMLInputElement | null;
                const emailInput = document.getElementById(
                    "email",
                ) as HTMLInputElement | null;
                const phoneInput = document.getElementById(
                    "phone-number",
                ) as HTMLInputElement | null;

                const name = nameInput ? nameInput.value : "";
                const email = emailInput ? emailInput.value : "";
                const phone = phoneInput ? phoneInput.value : "";
                const contents = `New signup \n Name: ${name}\n Email: ${email}\n Phone: ${phone}`;
                const vercelWebhookUrl =
                    "https://secure-discord-webhook.vercel.app/api/webhook";

                async function sendEmailRequest(email: string, name: string) {
                    const apiUrl =
                        "https://tbilisihc-auto-email.vercel.app/api/welcome";
                    const emailData = {
                        recipient: email,
                        subject: `Hi, ${name}!`,
                        message:
                            "This is an automated email from Tbilisi Hack Club! \n\n We have received your join request and will email you ourselves soon! \n\n While you wait, you may check out our social media accounts: \n https://facebook.com/tbilisihc \n https://youtube.com/tbilisihc \n https://t.me/tbilisihc \n https://x.com/tbilisi_hc.\n\n Have a nice day! \n Best regards, \n Tbilisi Hack Club Administration",
                    };
                    try {
                        const response = await fetch(apiUrl, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(emailData),
                        });
                        if (!response.ok) {
                            const errorData = await response.json();
                            throw new Error(
                                `HTTP error! Status: ${response.status} - ${JSON.stringify(errorData)}`,
                            );
                        }
                        console.log("Success! Welcome email request sent.");
                    } catch (error) {
                        console.error(
                            "An error occurred while sending the email request:",
                            error,
                        );
                    }
                }

                async function sendDiscordWebhook(message: string) {
                    try {
                        const response = await fetch(vercelWebhookUrl, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ content: message }),
                        });
                        if (response.ok) {
                            console.log("Webhook sent successfully.");
                        } else {
                            console.error(
                                "Error sending webhook:",
                                response.status,
                                response.statusText,
                            );
                        }
                    } catch (error) {
                        console.error("Fetch error:", error);
                    }
                }

                // --- End of backend logic ---

                // Execute the backend calls
                sendEmailRequest(email, name);
                sendDiscordWebhook(contents);

                // Show a custom success message instead of an alert
                showSuccessMessage = true;

                // Redirect after a short delay so the user can see the message
                setTimeout(() => {
                    location.href = "/";
                }, 2000);
            });
        }
    });
</script>

<svelte:head>
    <title>Join Tbilisi Hack Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Poppins:wght@400;700;800;900&display=swap"
        rel="stylesheet"
    />
    <style>
        @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        body {
            font-family: "Inter", sans-serif;
            background-color: #f8f9fa; /* Light grey background */
            color: #1f2937;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .font-heading {
            font-family: "Poppins", sans-serif;
        }
        @keyframes floatIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</svelte:head>

<div class="join-page-container">
    <div class="form-card animated-section">
        {#if showSuccessMessage}
            <div class="success-message">
                <h2 class="text-2xl font-bold text-green-700">
                    Thank you for signing up!
                </h2>
                <p class="text-gray-600 mt-2">
                    We've received your information. Redirecting you to the
                    homepage shortly...
                </p>
            </div>
        {:else}
            <div class="form-header">
                <h1 class="page-title">Join the Club</h1>
                <p class="page-subtitle">
                    Fill out the form below to get started on your journey with
                    us.
                </p>
            </div>
            <form class="space-y-6" id="form" novalidate>
                <div>
                    <label for="name" class="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        class="form-input"
                        required
                    />
                </div>
                <div>
                    <label for="email" class="form-label">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-input"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div>
                    <label for="phone-number" class="form-label"
                        >Phone Number</label
                    >
                    <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="+995 123 456 789"
                        class="form-input"
                        required
                    />
                </div>

                <div class="flex items-start pt-2">
                    <div class="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-500"
                            >I accept the <a
                                class="font-medium text-blue-600 hover:underline"
                                href="https://tbilisi.hackclub.com/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Terms and Conditions</a
                            ></label
                        >
                    </div>
                </div>

                <button type="submit" class="submit-button">Sign Up</button>
            </form>
        {/if}
    </div>
</div>

<style>
    .join-page-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
    }

    .animated-section {
        opacity: 0;
        animation: floatIn 0.8s ease-out forwards;
    }

    .form-card {
        width: 100%;
        max-width: 500px;
        background-color: #ffffff;
        border-radius: 16px;
        padding: 2.5rem;
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
    }

    .form-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .page-title {
        font-size: 2.25rem;
        font-weight: 800;
        color: #111827;
    }

    .page-subtitle {
        color: #4b5563;
        margin-top: 0.5rem;
    }

    .form-label {
        @apply block mb-2 text-sm font-medium text-gray-700;
    }

    .form-input {
        @apply block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base;
        @apply focus:ring-blue-500 focus:border-blue-500 transition-shadow;
    }

    .submit-button {
        @apply w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors;
        @apply hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300;
    }

    .success-message {
        text-align: center;
        padding: 2rem 0;
    }
</style>
