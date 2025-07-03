import {createContext} from "react";
import {IdGenerator, wrapIdGenerator} from "./generator";

let globalNextId: number = 0

function globalGenerateId(): string {
    return `${globalNextId++}`
}

export const IdGeneratorContext = createContext<IdGenerator>(wrapIdGenerator(globalGenerateId))