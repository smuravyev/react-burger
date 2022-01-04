import { compose,
         createStore,
         applyMiddleware } from 'redux';
        
import { reducerRoot }  from './reducers';

import thunk from 'redux-thunk';

import type { TApplicationAction } from './actions';

import type { ThunkAction} from 'redux-thunk';
import type { ActionCreator } from 'redux';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
      (typeof window === 'object') && 
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export type TAppThunk<TReturn = void> =
                                ActionCreator<ThunkAction<TReturn,
                                                          TRootState,
                                                          unknown,
                                                          TApplicationAction >>;

const oStore = createStore(reducerRoot,
                           composeEnhancers(applyMiddleware<TAppThunk>(thunk)));

export type TGetStateFunction = typeof oStore.getState;

export type TRootState = ReturnType<TGetStateFunction>;

export type TAppDispatch = typeof oStore.dispatch; 

export default oStore;