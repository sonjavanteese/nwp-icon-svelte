<script>
	
  
  import { StackRouter } from 'svelte-stack-router';

	import Home from './views/Home.svelte';
	import Iconlist from './views/Iconlist.svelte';
	import NotFound from './views/NotFound.svelte';
	import IconGroup from './views/Iconlib.svelte';

	const routes = {
		"/": Home,
		"/list": Iconlist,
		"/icon": IconGroup,
		"*": NotFound
	};
</script>

<main>
  <StackRouter {routes} />
  
</main>

