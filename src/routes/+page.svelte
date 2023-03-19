<script>
	export let data;

	let { tasks } = data;
    console.log(tasks)
</script>

<div class="flex flex-col p-16 gap-4">
	<p class="text-6xl font-mono">Hello, Valmero</p>
	<p class="text-5xl font-semibold">Task</p>
	<div class="bg-blue-400 h-[512px] w-full rounded-3xl border-4 border-blue-500">
		{#each tasks as task}
			<p class="text-2xl">{task.title}</p>
			<p class="text-2xl">{task.description}</p>
		{/each}
	</div>
	<br />
	<p class="text-5xl font-semibold">Class</p>
	<div class="bg-blue-400 h-[512px] w-full rounded-3xl border-4 border-blue-500" />
</div>
