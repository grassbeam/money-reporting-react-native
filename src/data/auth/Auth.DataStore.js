import { DataStoreType } from '_constants';

export const STORAGE_LAST_ACTION = "LastAction";
export const STORAGE_AUTH_LOGIN = "AuthLogin";


const AuthInitialState = {
    [STORAGE_LAST_ACTION]: null,
    [STORAGE_AUTH_LOGIN]: null,
    
}

export default function AuthStore(state=AuthInitialState, action) {
    if (action.type == DataStoreType.AUTH_STORAGE) {
        
        if (action.strloc === STORAGE_AUTH_LOGIN) {
            return {
                ...state,
                [STORAGE_LAST_ACTION]: action.payload,
                [action.strloc]: action.value
            };
        } 

      } else return state;
}