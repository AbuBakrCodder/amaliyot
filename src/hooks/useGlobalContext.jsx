import { useContext } from "react";
import { globalContext } from "../Context/globalContext"

export const useGlobalContext = ()=>{
    const context = useContext(globalContext)
    if(!context){
        throw new Error(`useGlobalContext() must be used within GlobalContextProvider()`)
    }
    return context
}