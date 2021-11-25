import { writable } from 'svelte/store';
import { supabase } from './supabase'

export const nwp_auth = writable(false);
export const nwp_user = writable(null);
export const logout = async () => {
	let { error } = await supabase.auth.signOut()
	nwp_user.set(null)
}
export const signUp = async (email, password) => {
	try {
		let { user, error } = await supabase.auth.signUp({ email, password })
		if (error) throw error
		console.log("Sign Up Ok", user)
	} catch (error) {
		console.log("Sign Up Failed", error);
	}
}
export const signIn = async (email, password) => {
	try {
		let { user, error } = await supabase.auth.signIn({ email, password })
		if (error) throw error
		nwp_user.set(user)
		console.log("SignIn OK", user)
	} catch (error) {
		console.log("Sign In Failed", error);
	}
}


export const isModal = writable(false);
export const isSb = writable(false);



// import {count, page, nwp_auth, nwp_user, nwp_profil, isSb} from './lib/stores'
/* const avatars = [
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
  ]; */