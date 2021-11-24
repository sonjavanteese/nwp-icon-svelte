/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
export default class Icon extends SvelteComponentTyped<{
    name?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { iconlist } from "./iconlist";
import { iconlib } from "./iconlib";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export { iconlist, iconlib };
