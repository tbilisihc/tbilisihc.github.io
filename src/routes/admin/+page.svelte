<script>
	// No script logic is needed for this static hub page.
</script>

<svelte:head>
	<title>Admin Panel</title>
</svelte:head>

<div class="bg-gray-100 text-gray-800 min-h-screen font-sans">
	<!-- Admin Hub / Choice Section -->
	<div class="container mx-auto p-4 sm:p-6 lg:p-8">
		<div class="text-center mb-10">
			<h1 class="text-3xl font-bold">Admin Panel</h1>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			<!-- Submissions Card -->
			<a
				href="/admin/submissions"
				class="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
			>
				<h2 class="text-2xl font-bold text-gray-800 mb-2">Manage Submissions</h2>
				<p class="text-gray-600">View, accept, revoke, and delete event submissions.</p>
			</a>

			<!-- Social Media Card -->
			<a
				href="/admin/social-media"
				class="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
			>
				<h2 class="text-2xl font-bold text-gray-800 mb-2">Manage Social Media</h2>
				<p class="text-gray-600">Post announcements to Discord, Twitter, and Telegram.</p>
			</a>
		</div>
	</div>
</div>
