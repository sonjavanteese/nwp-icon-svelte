<script>
	
  import {supabase} from './lib/supabase'
  import { nwp_user, logout, signIn, signUp } from './lib/stores';
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
	}
	let email = ''; 
	let password = '';

	nwp_user.set(supabase.auth.user())

	supabase.auth.onAuthStateChange((_, session) => {
		console.log("render => onAuthStateChange: session.user", session)
	})
	const handleLogin = () => {
		signIn(email, password)
	}
$: console.log("nwp_user:", $nwp_user);
</script>

	
	
	{#if !$nwp_user}
		<main class="bg-contain bg-bottom bg-no-repeat" style="background-image: url('https://nwp-cgn.de/img/poser/programmer.svg');">
			<section class=" flex flex-col w-full h-full max-w-sm pt-16 mx-auto p-2" >
				<form on:submit|preventDefault={handleLogin} class="animate-animated animate-rotateIn">
					<div class="flex flex-col -mx-3 p-4 border-5 border-gray-500 rounded-xl shadow-2xl bg-amber-400 bg-opacity-90">
						<div class="mb-2 px-3">
						<label class="label" for="">E-mail</label>
						<input bind:value={email} class="input" type="email" placeholder="email@dundermifflin.com">
						</div>
						<div class="mb-2 px-3">
						<label class="label" for="">Password</label>
						<input bind:value={password} class="input" type="password" placeholder="******">
						</div>
						<div class="mb-2 px-3">
						<label class="label opacity-0" for="">Login</label>
						<button class="button">Sign In</button>
						</div>
					</div>
				</form>
			</section>
		</main>
	{:else}
		<main class="animate-animated animate-zoomIn">
		<StackRouter {routes} />
		</main>
	{/if}
  
  

{#if $nwp_user}
	<div class="flex justify-center p-4">
	<button on:click={logout} class="inline-block py-4 px-8 m-0 text-xs text-white text-center font-semibold leading-none bg-red-600 hover:bg-red-700 rounded">Logout</button>
	</div>
{/if}
<style>

</style>