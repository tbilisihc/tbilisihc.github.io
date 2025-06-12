<script>
	import Footer from "./footer.svelte";
	import Header from "./top_header.svelte"
</script>

<div id="root">
<Header/>
	
<main>
<slot /></main>
<hr class = "color-gray-500">
<Footer/>

</div>
<style>
	#root {
		display: flex;
		flex-direction: column;
		margin: 10px;
		border-radius: 10px;
	}
	@media (max-width: 620px) {
		#root {
			flex-direction: column;
			align-items: center;
		}
		#YoHeading {
			text-align: center;
		}
	}

	#me {
		display: flex;
		margin: 10px;
		align-items: center;
	}
	#YoHeading {
		margin: 0px;
		color: aliceblue;
		font-size: 30px;
	}

	hr {
		width: 99%;
		border: 1px solid #333;
	}
	#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Takes up at least the full viewport height */
  }

  main {
    flex-grow: 1; /* This is the magic part! */
    /* It tells the main content area to grow and take up all available */
    /* space, pushing the footer to the bottom. */
  }
</style>
