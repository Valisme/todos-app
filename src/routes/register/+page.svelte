<script>
    export let form;
</script>
<div class="mt-16 flex justify-center items-center">
	<form method="POST"class="flex flex-col gap-4 text-xl">
		<label for="name">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			class="w-60 border-4 transition-all ease-linear duration-200  focus:scale-110 focus:solid-shadow border-yellow-300 outline-none"
		/>
		<label for="pass">Password</label>
		<input 
			type="password"
			id="pass"
			name="pass"
			class="w-60 border-4 transition-all ease-linear duration-200  focus:scale-110 focus:solid-shadow border-yellow-300 outline-none"
		/>
        <label for="confpass">Confirm Password</label>
		<input 
			type="password"
			id="confpass"
			name="confPass"
			class="w-60 border-4 transition-all ease-linear duration-200  focus:scale-110 focus:solid-shadow border-yellow-300 outline-none"
		/>
	
        <button type="submit" class="p-2 w-2/3 active:scale-90 bg-blue-600 text-white transition-all ease-out duration-300 hover:text-black hover:solid-shadow active:bg-blue-800 mt-8 mx-10">Submit</button>
	</form>
    {#if form?.invalid}
    <span>
        {form?.msg}
    </span>
    {/if}
</div>
