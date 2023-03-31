<script>
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	let todos= data.notes ?? [];

	const formSubmit =  ({data,cancel})=>{
		return async ({update,result})=>{
			todos = [result.data,...todos]
			
		 	await update()
		}
	}
	
	const deleteSubmit = ()=>{
		return async ({result,update})=>{
			todos = todos.filter(todo=>{console.log(todo.id !== result.data.id)})
			await update()
		}
	}


</script>

<div class="flex flex-col gap-5 p-10 font-mono ml-20">
	<p>Make some Tasks</p>
	<form method="POST" action="?/add" class="flex flex-col gap-4" use:enhance={formSubmit}>
		<label for="title" class="inline-block w-6">Title</label>
		<input
			id="title"
			name="title"
			type="text"
			class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		/>
		<label for="description" class="inline-block w-20">Description</label>
		<input
			id="description"
			type="text"
			name="description"
			class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		/>
		<button
			class="bg-blue-600 text-white w-20 transition-all ease-out duration-300 hover:text-black hover:solid-shadow active:bg-blue-800"
			type="submit"
		>
			Add Task</button
		>
	</form>
	{#if form?.err}
		<span class="text-red-600 font-bold">
			{form?.err}
		</span>
	{/if}
	<div class="flex flex-wrap gap-20 mt-2">
		{#if todos.length === 0}
			<p>No Task</p>
		{:else}
			{#each todos as todo}
				<div
					class="relative h-80 w-80 p-4 flex flex-col gap-4 text-white bg-blue-500 transition-all ease-in hover:text-black hover:bg-blue-600 hover:solid-shadow-xl hidden-scroll overflow-hidden hover:overflow-y-scroll hover:overflow-x-hidden"
				>
					<p class="text-xl">{todo.title}</p>
					<form method="post" action="?/delete" class="absolute right-2 top-2" use:enhance={deleteSubmit}>
						<input type="text" name="id" value={todo.id} class="hidden">
					    <button type="submit" placeholder="X" class="w-6 h-6 font-semibold text-sm bg-red-600">
						X
					</button>
					</form>
					<p class="text-lg leading-relaxed">
						{todo.description}
					</p>
				</div>
			{/each}
		{/if}
	</div>
</div>
