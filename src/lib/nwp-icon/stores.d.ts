export namespace count {
    export { subscribe };
    export function increment(): void;
    export function decrement(): void;
    export function reset(): void;
}
export const page: import("svelte/store").Writable<number>;
export const isSb: import("svelte/store").Writable<boolean>;
export const nwp_auth: import("svelte/store").Writable<boolean>;
export const nwp_user: import("svelte/store").Writable<any>;
export const nwp_profil: import("svelte/store").Writable<any>;
export const alert: import("svelte/store").Writable<any>;
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: (value?: number) => void) => import("svelte/store").Unsubscriber;
export {};
