<script>
	// --- State Variables for Form Inputs ---
	let password = '';
	let message = '';
	let imageFile = null;
	let sendToDiscord = true;
	let sendToTwitter = true;
	let sendToTelegram = true;

	// --- State Variables for UI Feedback ---
	let isLoading = false;
	let feedback = {
		message: '',
		isError: false
	};

	// --- API Endpoint Base URL ---
	const baseUrl = 'https://bot-api-tbilisihc.vercel.app';

	// --- Form Submission Handler ---
	async function handleSubmit() {
		feedback = { message: '', isError: false }; // Reset feedback
		isLoading = true;

		// --- Basic Input Validation ---
		if (!password) {
			feedback = { message: 'Please enter a password.', isError: true };
			isLoading = false;
			return;
		}

		if (!imageFile && !message) {
			feedback = { message: 'Please either write a message or select an image.', isError: true };
			isLoading = false;
			return;
		}

		let endpointUrl;
		let requestBody;
		const requestHeaders = {};

		// --- Determine endpoint and prepare request body ---
		if (imageFile) {
			// SCENARIO A: An image IS present
			endpointUrl = `${baseUrl}/api/handler`;
			const formData = new FormData();
			formData.append('password', password);
			formData.append('image', imageFile, imageFile.name);
			formData.append('message', message);
			formData.append('discord', sendToDiscord);
			formData.append('twitter', sendToTwitter);
			formData.append('telegram', sendToTelegram);
			requestBody = formData;
		} else {
			// SCENARIO B: The image input IS EMPTY
			endpointUrl = `${baseUrl}/api/no-image`;
			const payload = {
				password: password,
				content: message,
				discord: sendToDiscord.toString(),
				twitter: sendToTwitter.toString(),
				telegram: sendToTelegram.toString()
			};
			requestBody = JSON.stringify(payload);
			requestHeaders['Content-Type'] = 'application/json';
		}

		// --- Send the data to the determined endpoint ---
		try {
			const response = await fetch(endpointUrl, {
				method: 'POST',
				headers: requestHeaders,
				body: requestBody
			});

			const result = await response.json();

			if (response.ok) {
				feedback = { message: `Success: ${result.message}`, isError: false };
				// Optionally reset form on success
				password = '';
				message = '';
				imageFile = null;
				// Reset file input visually if needed
				const fileInputEl = document.getElementById('myFile');
				if (fileInputEl) fileInputEl.value = '';

			} else {
				feedback = {
					message: `Error: ${result.message || 'An unknown server error occurred.'}`,
					isError: true
				};
			}
		} catch (error) {
			console.error('Network Error:', error);
			feedback = { message: 'A network error occurred. Please check your connection.', isError: true };
		} finally {
			isLoading = false;
		}
	}

	function handleFormInput() {
		// Hide the message when the user starts typing again
		if (feedback.message) {
			feedback = { message: '', isError: false };
		}
	}
</script>

<svelte:head>
	<title>Tbilisi HC Admin</title>
	<link rel="icon" type="image/x-icon" href="https://tbilisi.hackclub.com/assets/logo/logo-filled.png" />
	<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
	<link
		rel="stylesheet"
		as="style"
		href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
	/>
</svelte:head>

<div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-gray-50" style='font-family: Inter, "Noto Sans", sans-serif'>
	<div class="layout-container flex h-full grow flex-col">
		<div class="px-4 md:px-10 flex flex-1 justify-center py-5 md:py-10 text-center items-start">
			<div class="layout-content-container flex flex-col w-full max-w-[512px] bg-white rounded-xl shadow-sm border border-gray-200/80">
				<h2 class="text-[#111418] tracking-tight text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-8">
					Post to Social Media
				</h2>

				{#if isLoading}
					<div class="w-full max-w-[512px] justify-center px-4 py-3 text-center">
						<div class="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0c77f2] border-t-transparent"></div>
					</div>
				{/if}

				{#if feedback.message}
					<div class="w-full max-w-[512px] px-4 py-3">
						<div class="w-full rounded-lg p-4 text-center text-white" class:bg-red-500={feedback.isError} class:bg-green-500={!feedback.isError}>
							{feedback.message}
						</div>
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} on:input={handleFormInput} class="space-y-2">
					<div class="flex max-w-[480px] flex-wrap justify-center items-end gap-4 px-4 pt-3 pb-2">
						<label class="flex flex-col min-w-40 flex-1 text-left">
							<p class="text-[#111418] text-base font-medium leading-normal pb-2">Password</p>
							<input
								placeholder="Enter your password"
								class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 border border-[#dbe0e6] bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 h-14 placeholder:text-[#60748a] p-[15px] text-base font-normal leading-normal transition"
								type="password"
								bind:value={password}
							/>
						</label>
					</div>
					<div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 pt-3 pb-2">
						<label class="flex flex-col min-w-40 flex-1 text-left">
							<p class="text-[#111418] text-base font-medium leading-normal pb-2">Message</p>
							<textarea
								placeholder="Enter your message here"
								class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 border border-[#dbe0e6] bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 min-h-36 placeholder:text-[#60748a] p-[15px] text-base font-normal leading-normal transition"
								bind:value={message}
							></textarea>
						</label>
					</div>
					<div class="max-w-[480px] px-4 pt-3 pb-2 text-left">
						<p class="text-[#111418] text-base font-medium leading-normal pb-2">Send to:</p>
						<div class="flex flex-col gap-3">
							<label class="flex items-center gap-2 cursor-pointer">
								<input type="checkbox" class="form-checkbox h-5 w-5 text-[#0c77f2] rounded focus:ring-offset-0 focus:ring-2 focus:ring-blue-400/60 border-gray-300" bind:checked={sendToDiscord} />
								<span class="text-[#111418]">Discord</span>
							</label>
							<label class="flex items-center gap-2 cursor-pointer">
								<input type="checkbox" class="form-checkbox h-5 w-5 text-[#0c77f2] rounded focus:ring-offset-0 focus:ring-2 focus:ring-blue-400/60 border-gray-300" bind:checked={sendToTwitter} />
								<span class="text-[#111418]">Twitter</span>
							</label>
							<label class="flex items-center gap-2 cursor-pointer">
								<input type="checkbox" class="form-checkbox h-5 w-5 text-[#0c77f2] rounded focus:ring-offset-0 focus:ring-2 focus:ring-blue-400/60 border-gray-300" bind:checked={sendToTelegram} />
								<span class="text-[#111418]">Telegram</span>
							</label>
						</div>
					</div>
					<div class="flex flex-col p-4">
						<label for="myFile" class="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-[#dde0e3] px-6 py-10 hover:border-blue-500 hover:bg-gray-50 transition-all cursor-pointer">
							<div class="flex flex-col items-center gap-2">
								<p class="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
									{#if imageFile}{imageFile.name}{:else}Upload Photo{/if}
								</p>
								<p class="text-gray-500 text-sm font-normal leading-normal max-w-[480px] text-center">
									Click to upload or drag and drop
								</p>
							</div>
							<input type="file" id="myFile" name="filename" class="sr-only" on:change={(e) => (imageFile = e.target.files[0])} />
						</label>
					</div>
					<div class="flex px-4 pt-2 pb-8 justify-center">
						<button class="flex min-w-[84px] max-w-[480px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-[#0c77f2] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors duration-200 disabled:bg-blue-400" type="submit" disabled={isLoading}>
							<span class="truncate">Submit</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
