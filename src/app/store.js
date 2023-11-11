import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from '../Component/Reducer/Reducer';


const store = configureStore({
    reducer: 
    {
        DataReducer, SelectDataReducer
    }
})

export default store;