<script>
    import "../app.css";
  </script>
  <nav class="bg-blue-500 w-full h-20 flex flex-row items-center p-4">
    <li class="text-white flex flex-row gap-6 text-3xl font-mono">
        <ul><a href="/tasks">Tasks</a></ul>
        <ul><a href="/class">Class</a></ul>
        <ul><a href="/forum">Forum</a></ul>
    </li>
    <div class="ml-auto w-14 h-14 bg-white rounded-full">
    </div>
</nav>
  <slot />

<style lang="postcss">
    :global(html) {
        height: 100vh;
    }
</style>