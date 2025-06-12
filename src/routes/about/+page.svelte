<script>
	let team = 
	{
		"Drew Smirnoff": "https://avatars.githubusercontent.com/u/175145001?v=4",
		"Boris Mirakov": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MYPQuoqZhenNT8BsFfPdmW66XAcPbx0vOg&s",
	}
</script>

<div id="root">
	<h1 class = "text-4xl">About Us</h1>
	<h1 class = "text-2xl mt-20"> Who are we?</h1>
	<br />
	<h1 id ="aboutText" class = "text-xl mx-20">
		&nbsp Welcome to Tbilisi Hack Club, a creative community for young makers, coders, and tech enthusiasts. We're a member of the global Hack Club network, providing a supportive space to learn, build, and share your passion for technology.
		<br />
		<br />
		&nbsp Whether you're a seasoned programmer or just starting, our club is your platform to collaborate on projects, explore new technologies, and turn your innovative ideas into reality. Join us to develop your skills, meet like-minded peers, and be part of Tbilisi's growing tech scene. Let's build the future together, one line of code at a time.</h1>
	<h1 class = "text-2xl mt-20">Our team</h1>
		<ul>
			{#each Object.entries(team) as [name, photo]}
				<li id = "teamMember">
					<img src={photo} alt={name} style="width: 50px; height: 50px; border-radius: 50%;" />
					<p id = "name">{name}</p>
				</li>
			{/each}
		</ul>

</div>

<style>
	* {
		margin: 0;
	}
	#root {
		display: flex;
		flex-direction: column;
		margin: 0;
		align-items: center;
	}
	#aboutText {
		width: 80%;
		text-align: start;
		font-size: 18px;
		line-height: 1.6;
		line-break: auto;
		color: #333;
	}
	#name {
		display: flex;
		align-items: center;
	}
	#teamMember {
		display: flex;
		align-items: center;
		margin: 10px 10px 10px 10px;
		gap: 10px;
	}
	h2 {
		margin-top: 20px;
		margin-bottom: 5px;
	}
</style>
