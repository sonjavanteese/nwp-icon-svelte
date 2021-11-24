import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}
const avatars = [
	"https://nwp-cgn.de/img/poser/airhostess_128.png",
	"https://nwp-cgn.de/img/poser/alien_128.png",
	"https://nwp-cgn.de/img/poser/alieness_128.png",
	"https://nwp-cgn.de/img/poser/angel_128.png",
	"https://nwp-cgn.de/img/poser/aphrodite_128.png",
	"https://nwp-cgn.de/img/poser/astronaut_128.png",
	"https://nwp-cgn.de/img/poser/canary_128.png",
	"https://nwp-cgn.de/img/poser/captainess_128.png",
	"https://nwp-cgn.de/img/poser/catwoman_128.png",
	"https://nwp-cgn.de/img/poser/chrome-128.png",
	"https://nwp-cgn.de/img/poser/contractor_128.png",
	"https://nwp-cgn.de/img/poser/dandy_128.png",
	"https://nwp-cgn.de/img/poser/devil_128.png",
	"https://nwp-cgn.de/img/poser/doctor_128.png",
	"https://nwp-cgn.de/img/poser/elvis128.png",
	"https://nwp-cgn.de/img/poser/fairy_128.png",
	"https://nwp-cgn.de/img/poser/female_dummy_128.png",
	"https://nwp-cgn.de/img/poser/firefox-128.png",
	"https://nwp-cgn.de/img/poser/gangster_128.png",
	"https://nwp-cgn.de/img/poser/holmes128.png",
	"https://nwp-cgn.de/img/poser/internet-explorer-128.png",
	"https://nwp-cgn.de/img/poser/king_128.png",
	"https://nwp-cgn.de/img/poser/maid_128.png",
	"https://nwp-cgn.de/img/poser/male_dummy_128.png",
	"https://nwp-cgn.de/img/poser/monroe128.png",
	"https://nwp-cgn.de/img/poser/nick_128.png",
	"https://nwp-cgn.de/img/poser/ninja_128.png",
	"https://nwp-cgn.de/img/poser/nun.png",
	"https://nwp-cgn.de/img/poser/nun_128.png",
	"https://nwp-cgn.de/img/poser/nurse_128.png",
	"https://nwp-cgn.de/img/poser/officer_128.png",
	"https://nwp-cgn.de/img/poser/opera-128.png",
	"https://nwp-cgn.de/img/poser/potter128.png",
	"https://nwp-cgn.de/img/poser/priest.png",
	"https://nwp-cgn.de/img/poser/priest_128.png",
	"https://nwp-cgn.de/img/poser/priest_grey.png",
	"https://nwp-cgn.de/img/poser/queen_128.png",
	"https://nwp-cgn.de/img/poser/robot_128.png",
	"https://nwp-cgn.de/img/poser/robotess_128.png",
	"https://nwp-cgn.de/img/poser/safari-128.png",
	"https://nwp-cgn.de/img/poser/serduchka128.png",
	"https://nwp-cgn.de/img/poser/sportsman_128.png",
	"https://nwp-cgn.de/img/poser/teacher_128.png",
	"https://nwp-cgn.de/img/poser/terminator128.png",
	"https://nwp-cgn.de/img/poser/svelte-logo-blue.svg",
	"https://nwp-cgn.de/img/poser/svelte-logo-dark.svg",
	"https://nwp-cgn.de/img/poser/svelte-logo-light.svg"
  ];
export const count = createCount();
export const page = writable(0);
export const isSb = writable(false);
export const isLoading = writable(false);
export const nwp_auth = writable(false);
export const nwp_user = writable(null);
export const nwp_session = writable(null);
export const nwp_profil = writable(null);
export const alert = writable(null);

// import {count, page, nwp_auth, nwp_user, nwp_profil, isSb} from './lib/stores'