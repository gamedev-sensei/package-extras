import {useEffect} from "react";

type CleanupFunction = () => void
export function useMount(callback: () => (CleanupFunction | void)) {
    return useEffect(callback, [])
}