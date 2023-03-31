<script>
	export let data;
	import '../app.css';
	import {goto} from "$app/navigation"
	
</script>

{#if !data.name}
	<div class="flex h-16 w-auto flex-row-reverse items-center gap-6 mr-20">
		<button class="bg-blue-500 text-white hover:text-black hover:bg-blue-600 active:scale-90 active:bg-blue-700 hover:solid-shadow transition-all ease-out duration-300 delay-75 px-4 py-2" on:click={()=>goto("/login")}>Login</button>
		<button class="bg-blue-500 text-white hover:text-black hover:bg-blue-600 active:scale-90 active:bg-blue-700 hover:solid-shadow transition-all ease-out duration-300 delay-75 px-4 py-2 " on:click={()=>goto("/register")}>Register</button>
	</div>
{:else}
	<div class="flex flex-row-reverse mr-20 text-lg pt-5 font-mono">
        <p>Welcome to Todos App, {data.name}</p>
	</div>
{/if}

<slot />

<style lang="postcss">
	:global(html) {
		height: 100vh;
	}
</style>
