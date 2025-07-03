import {useContext} from "react";
import {IdGenerator} from "./generator";
import {IdGeneratorContext} from "./IdGeneratorContext";

export function useProvidedIdGenerator(): IdGenerator {
    return useContext(IdGeneratorContext)
}