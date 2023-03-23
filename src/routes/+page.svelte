<script>

	

	let inputTitle = "";
	let inputDescription = "";
	let err;
	let uuid=0;

	let todos = [
		{ id: uuid++, title: 'This is Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias doloribus eius nesciunt, aspernatur a, perferendis suscipit laborum distinctio ipsam assumenda ipsa esse fugiat quam officia omnis saepe laboriosam autem.' },
		{ id: uuid++, title: 'This is Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias doloribus eius nesciunt, aspernatur a, perferendis suscipit laborum distinctio ipsam assumenda ipsa esse fugiat quam officia omnis saepe laboriosam autem.' },
		{ id: uuid++, title: 'This is Title',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias doloribus eius nesciunt, aspernatur a, perferendis suscipit laborum distinctio ipsam assumenda ipsa esse fugiat quam officia omnis saepe laboriosam autem." }
	];

	function add() {
		if (inputTitle ===""&& inputDescription === "") {
			err = "Can't Save Empty Value!";
		} else if (inputTitle==="") {
			err = "Can't Save Empty Title!";
		} else if (inputDescription==="") {
			err = "Can't Save Empty Description!";
		} else {
			const newTodo ={
				id : uuid++,
				title: inputTitle ,
				description : inputDescription
			}
			console.log(newTodo)
			todos =[...todos,newTodo]
		}
	}

	function remove(todo){
		todos = todos.filter(t=>t!==todo)
	}
</script>

<div class="flex flex-col gap-5 p-10 font-mono ml-20">
	<p>Make some Tasks</p>
	<label for="title">Title</label>
	<input
		id="title"
		type="text"
		class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		bind:value={inputTitle}
	/>
	<label for="description">Description</label>
	<input
		id="description"
		type="text"
		class="w-60 border-4 transition-all ease-linear focus:w-64 focus:solid-shadow border-yellow-300 outline-none"
		bind:value={inputDescription}
	/>
	<button
		class="bg-blue-600 text-white w-20 transition-all ease-out duration-300 hover:text-black hover:solid-shadow active:bg-blue-800"
		on:click={() => add()}
	>
		Add Task</button
	>
	{#if err}
		<span class="text-red-600 font-bold">
			{err}
		</span>
	{/if}
	<div class="flex flex-wrap gap-20 mt-2">
		{#each todos as todo}
		<div
			id={todo.id}
			class="relative h-80 w-80 p-4 flex flex-col gap-4 text-white bg-blue-500 transition-all ease-in hover:text-black hover:bg-blue-600 hover:solid-shadow-xl hidden-scroll overflow-hidden hover:overflow-y-scroll hover:overflow-x-hidden"
		>
			<p class="text-xl">{todo.title}</p>
			<button class="w-6 h-6 font-semibold text-sm bg-red-600 absolute right-2 top-2" on:click={()=>{remove(todo)}}> X </button>
			<p class="text-lg leading-relaxed">
				{todo.description}
			</p>
		</div>
		{/each}
		
	</div>
</div>
