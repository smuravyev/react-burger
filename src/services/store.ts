import { compose,
         createStore,
         applyMiddleware } from 'redux';
        
import { reducerRoot }  from './reducers';

import { socketMiddleware } from './middleware/socket-middleware';

import thunk from 'redux-thunk';

import type { TApplicationAction } from './actions';

import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
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
            
const oStore =
        createStore(reducerRoot,
                    composeEnhancers(applyMiddleware(socketMiddleware, thunk)));

export type TGetStateFunction = typeof oStore.getState;

export type TRootState = ReturnType<TGetStateFunction>;

export type TThunkAction<TReturnType = void> = ThunkAction<TReturnType,
                                                           TRootState,
                                                           unknown,
                                                           TApplicationAction>;

export type TAppThunk<TReturn = void> = ActionCreator<TThunkAction<TReturn>>;


export type TAppDispatch =
                        ThunkDispatch<TRootState , unknown, TApplicationAction>; 

export default oStore;