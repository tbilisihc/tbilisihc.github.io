<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// --- State Variables ---
	let toEmail = $page.url.searchParams.get('to') || '';
	let submissionId = $page.url.searchParams.get('id') || '';
	let subject = 'Your Tbilisi Hack Club Submission';
	let body = 'Hi there,\n\nCongratulations! Your submission has been accepted.\n\nBest,\nThe Tbilisi Hack Club Team';
	let password = '';

	let isLoading = false;
	let feedback = {
		message: '',
		isError: false
	};

	// --- API Endpoints ---
	const ADMIN_LOGIN_API = 'https://api.tbilisihc.andrinoff.com/admin-login';
	const UPDATE_SUBMISSION_API = 'https://api.tbilisihc.andrinoff.com/update-submission';
	const EMAIL_API_URL = 'https://tbilisihc-auto-email.vercel.app';

	async function handleAcceptAndSend() {
		isLoading = true;
		feedback = { message: '', isError: false };

		if (!toEmail || !subject || !body || !password || !submissionId) {
			feedback = { message: 'Please fill out all fields. Missing ID or Email.', isError: true };
			isLoading = false;
			return;
		}

		try {
			// --- Step 1: Authenticate with your admin-login endpoint ---
			feedback.message = 'Authenticating...';
			const loginResponse = await fetch(ADMIN_LOGIN_API, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ password })
			});

			if (!loginResponse.ok) {
				throw new Error('Incorrect admin password.');
			}

			// --- Step 2: Update the submission status to 'accepted' ---
			feedback.message = 'Updating submission status...';
			const updateResponse = await fetch(`${UPDATE_SUBMISSION_API}/${submissionId}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ accepted: true })
			});
			
			if (!updateResponse.ok) {
				throw new Error('Failed to update submission status.');
			}

			// --- Step 3: If authentication and update are successful, send the email ---
			feedback.message = 'Sending email...';
			const emailResponse = await fetch(EMAIL_API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ to: toEmail, subject: subject, body: body })
			});

			const emailResult = await emailResponse.json();

			if (emailResponse.ok) {
				feedback = { message: 'Submission accepted and email sent successfully!', isError: false };
			} else {
				throw new Error(emailResult.message || 'Failed to send email after accepting.');
			}

		} catch (err) {
			console.error('Process error:', err);
			feedback = { message: `Error: ${err.message}`, isError: true };
		} finally {
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Accept & Send Email - Admin</title>
</svelte:head>

<div class="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
	<div class="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-200">
		<header class="p-6 border-b border-gray-200 flex justify-between items-center">
			<div>
				<h1 class="text-2xl font-bold text-gray-800">Accept & Send Email</h1>
				<p class="text-gray-500">To: <span class="font-medium text-gray-700">{toEmail || 'No recipient'}</span> (ID: {submissionId || 'N/A'})</p>
			</div>
			<a href="/admin" class="text-sm font-medium text-indigo-600 hover:text-indigo-800">&larr; Back to Dashboard</a>
		</header>

		<main class="p-6 space-y-4">
            <div>
				<label for="password" class="block text-sm font-medium text-gray-700 mb-1">Admin Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					placeholder="Enter your admin password to confirm"
					class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				/>
			</div>
			<div>
				<label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
				<input
					type="text"
					id="subject"
					bind:value={subject}
					class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				/>
			</div>
			<div>
				<label for="body" class="block text-sm font-medium text-gray-700 mb-1">Body (Plain Text)</label>
				<textarea
					id="body"
					rows="12"
					bind:value={body}
					placeholder="Write your email content here..."
					class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				></textarea>
			</div>

            {#if feedback.message}
                <div class="p-3 rounded-lg text-center text-sm" class:text-white={feedback.isError || feedback.message.includes('success')} class:bg-green-500={!feedback.isError && feedback.message.includes('success')} class:bg-red-500={feedback.isError} class:text-gray-600={!feedback.isError && !feedback.message.includes('success')}>
                    {feedback.message}
                </div>
            {/if}
		</main>

		<footer class="p-6 bg-gray-50 border-t border-gray-200 flex justify-end">
			<button
				on:click={handleAcceptAndSend}
				disabled={isLoading || !toEmail || !submissionId}
				class="bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-300 disabled:cursor-not-allowed"
			>
				{#if isLoading}
					<span>Processing...</span>
				{:else}
					<span>Accept & Send Email</span>
				{/if}
			</button>
		</footer>
	</div>
</div>
