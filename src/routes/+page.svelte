<script>
	let title;
	let description;
	let err;
	function print() {
		if(!title && !description){
			err = "Can't Save Empty Value!"
		}
		else if(!title){
			err = "Can't Save Empty Title!"
		}
		else if(!description){
			err = "Can't Save Empty Description!"
		}
		else {
		console.log(title)
		console.log(description)
		err=null;
	    }
	}
</script>

<div class="flex flex-col gap-5 p-10 font-mono">
	<p>Make some Tasks</p>
	<label for="title">Title</label>
	<input id="title" type="text" class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none" bind:value={title} />
	<label for="description">Description</label>
	<input id="description" type="text" class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none" bind:value={description} />
	<button class="bg-blue-600 text-white w-20 transition-all ease-out duration-300 hover:text-black hover:solid-shadow active:bg-blue-800" on:click={() => print()}> Add Task</button>
	{#if err}
		<alert class="text-red-600 font-bold">
			{err}
		</alert>
	{/if}
	<div class="grid grid-flow-row mt-2">
		<div class="h-80 w-80 p-4 flex flex-col gap-4 text-white bg-blue-500 transition-all ease-in hover:text-black hover:bg-blue-600 hover:solid-shadow-xl hidden-scroll overflow-hidden hover:overflow-y-scroll hover:overflow-x-hidden">
			<p class="text-xl">
				This is Title!
			</p>
			<p class="text-lg leading-relaxed">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus, excepturi delectus facere, voluptatum esse perferendis pariatur ex cum, nobis perspiciatis. Rem, ratione quibusdam! Earum temporibus dolores nam praesentium reprehenderit!
			</p>
		</div>
	</div>
</div>

