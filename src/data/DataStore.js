import { combineReducers } from 'redux';
import { DataStoreType } from '_constants';
import AuthStore from './auth/Auth.DataStore';


let DataStoreReducer;
export default DataStoreReducer = {
    [DataStoreType.AUTH_STORAGE]: AuthStore,
}