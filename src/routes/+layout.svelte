<script>
	export let data;
	import '../app.css';
</script>

{#if !data.name}
	<div class="flex flex-row-reverse gap-6 mr-20">
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	</div>
{:else}
	<div class="flex flex-row-reverse mr-20 text-lg">
        <p>Welcome to Todos App, {data.name}</p>
	</div>
{/if}

<slot />

<style lang="postcss">
	:global(html) {
		height: 100vh;
	}
</style>
