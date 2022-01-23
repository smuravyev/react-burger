import { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_SUCCESS,
         GET_INGREDIENTS_FAILED,
         setGetIngredientsRequestAction,
         setGetIngredientsFailedAction,
         setGetIngredientsSuccessAction } from './burger-ingredients';
         
describe('Testing the Burger Ingredients action creators', () => {

    it('Calls setGetIngredientsRequestAction, returns a correct ' + 
       'GET_INGREDIENTS_REQUEST action', () => {
        expect(setGetIngredientsRequestAction())
                                    .toEqual({ type: GET_INGREDIENTS_REQUEST });
    });

    it('Calls setGetIngredientsFailedAction, returns a correct ' + 
       'GET_INGREDIENTS_FAILED action', () => {
        expect(setGetIngredientsFailedAction())
                                     .toEqual({ type: GET_INGREDIENTS_FAILED });
    });

    it('Calls setGetIngredientsSuccessAction, returns a correct ' + 
       'GET_INGREDIENTS_SUCCESS action', () => {
        expect(setGetIngredientsSuccessAction(
            [ { sName : "Булки - тест",
                sType : "bun",
                aSet : [] },
              { sName : "Соусы - тест",
                sType : "sauce",
                aSet : [] },
              { sName : "Начинки - тест",
                sType : "main",
                aSet : [] } ] )).toEqual({ type: GET_INGREDIENTS_SUCCESS,
                                           payload: { aIngredients :
                                                   [ { sName : "Булки - тест",
                                                       sType : "bun",
                                                       aSet : [] },
                                                     { sName : "Соусы - тест",
                                                       sType : "sauce",
                                                       aSet : [] },
                                                     { sName : "Начинки - тест",
                                                       sType : "main",
                                                       aSet : [] } ] } });
    });
});