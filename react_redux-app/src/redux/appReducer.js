import { SHOW_LOADER,HIDE_LOADER } from "./types"

export const appReducer = (state, action)=>{
    switch(action.type){
        case SHOW_LOADER:
            return {...state,loading:true}
        case HIDE_LOADER:
            return {...state,loading:false}

        default: return state
    }
}