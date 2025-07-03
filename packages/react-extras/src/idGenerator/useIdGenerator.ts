import {useRef} from "react";
import {wrapIdGenerator, IdGenerator} from "./generator";
import {useDerived} from "@/useDerived";

export function useIdGenerator(): IdGenerator {
    const nextId = useRef(0)
    return useDerived(() => {
        function generateId() {
            return `${nextId.current++}`
        }
        return wrapIdGenerator(generateId)
    }, [nextId])
}