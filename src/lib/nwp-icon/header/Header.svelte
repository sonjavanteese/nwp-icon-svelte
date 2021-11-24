<script>
  import { page } from "$app/stores";
  import { Icon } from "../nwp-icons";
  // import logo from "./svelte-logo-blue.svg";
  import logoDark from "./svelte-logo-dark.svg";
</script>

<header class="bg-blue-800 text-white shadow-xl">
  <nav class="flex justify-between items-center container mx-auto py-4 px-4">
    <a href="/" class="" class:active={$page.path === "/"}>
		
		<Icon name="home" />
		</a>
    <span class="text-3xl font-semibold">nwp-app</span>
    <a href="/icons" class="text-2xl" class:active={$page.path === "/icons"}>
      <img src={logoDark} alt="SvelteKit" />
    </a>
  </nav>
</header>

<style windi:inject>
a {
  font-size: 1.5rem;
  line-height: 2rem;
}
a.active {
  --tw-bg-opacity: 0.1;
  --tw-text-opacity: 1;
  color: rgba(229, 231, 235, var(--tw-text-opacity));
}
img {
  width: 2rem;
  height: 2rem;
}

.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(30, 64, 175, var(--tw-bg-opacity));
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.font-semibold {
  font-weight: 600;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.shadow-xl {
  --tw-shadow-color: 0, 0, 0;
  --tw-shadow: 0 20px 25px -5px rgba(var(--tw-shadow-color), 0.1), 0 10px 10px -5px rgba(var(--tw-shadow-color), 0.04);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
</style>
