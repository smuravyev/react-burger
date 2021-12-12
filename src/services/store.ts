import { compose,
         createStore,
         applyMiddleware } from 'redux';
        
import { reducerRoot }  from './reducers';

import thunk from 'redux-thunk';

// Experimenting
// import type { ThunkAction } from 'redux-thunk';
// import type { AnyAction } from 'redux';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
      (typeof window === 'object') && 
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const oStore = createStore(reducerRoot,
                          composeEnhancers(applyMiddleware(thunk)));
                          
export type TRootState = ReturnType<typeof oStore.getState>;
export type TAppDispatch = typeof oStore.dispatch;

export default oStore;