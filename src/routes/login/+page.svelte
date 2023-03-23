<script>
    export let form;
</script>
<div class="ml-20">
	<form method="POST"class="flex flex-col">
		<label for="name">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		/>
		<br />
		<label for="pass">Password</label>
		<input 
			type="password"
			id="pass"
			name="pass"
			class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		/>
        <button type="submit" class="bg-blue-600 text-white w-20 transition-all ease-out duration-300 hover:text-black hover:solid-shadow active:bg-blue-800">Submit</button>
	</form>
    {#if form?.invalid}
    <span>
        Invalid Username or Password
    </span>
    {/if}
</div>
