// import {createStore} from 'redux';
// import { Reducer, initialState } from './reducer'

// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer, // reducer
//         initialState, // our initialState
//     );

//     return store;
// }


import {createStore,combineReducers} from 'redux';
import {Dishes} from './dishes'
import {Comments} from './comment'
import {Leader} from './leaders'
import {promotion} from './promotions'

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:promotion,
            leaders:Leader
        })
    );
    return store;
}