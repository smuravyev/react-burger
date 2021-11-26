import { compose,
         createStore,
         applyMiddleware } from 'redux';
import { reducerRoot }  from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
      (typeof window === 'object') && 
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const oStore = createStore(reducerRoot,
                          composeEnhancers(applyMiddleware(thunk)));
                          
export default oStore;