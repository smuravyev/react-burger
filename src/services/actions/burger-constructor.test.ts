import { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN,
         clearBurgerAction,
         addIngredientAction,
         removeIngredientAction,
         swapIngredientsAction,
         setBunAction } from './burger-constructor';
         
describe('Testing the Burger constructor action creators', () => {

    it('Calls clearBurgerAction, returns a correct ' + 
       'CLEAR_BURGER action', () => {
        expect(clearBurgerAction()).toEqual({ type: CLEAR_BURGER });
    });

    it('Calls addIngredientAction, returns a correct ' + 
       'ADD_INGREDIENT action', () => {
        expect(addIngredientAction(0,
                                   {
                        _id : '60d3b41abdacab0026a733cd',
                        name : 'Соус фирменный Space Sauce',
                        type : 'sauce',
                        proteins : 50,
                        fat : 22,
                        carbohydrates : 11,
                        calories : 14,
                        price : 80,
                        image :
                           'https://code.s3.yandex.net/react/code/sauce-04.png',
                        image_mobile :
                    'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
                        image_large :
                     'https://code.s3.yandex.net/react/code/sauce-04-large.png',
                        __v : 0,
                        sDragType : 'filling'
                                   })).toEqual({ type: ADD_INGREDIENT,
                                                 payload: { nIndex : 0,
                                                            oIngredient : {
                        _id : '60d3b41abdacab0026a733cd',
                        name : 'Соус фирменный Space Sauce',
                        type : 'sauce',
                        proteins : 50,
                        fat : 22,
                        carbohydrates : 11,
                        calories : 14,
                        price : 80,
                        image :
                           'https://code.s3.yandex.net/react/code/sauce-04.png',
                        image_mobile :
                    'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
                        image_large :
                     'https://code.s3.yandex.net/react/code/sauce-04-large.png',
                        __v : 0,
                        sDragType : 'filling' } } });
    });

    it('Calls removeIngredientAction, returns a correct ' + 
       'REMOVE_INGREDIENT action', () => {
        expect(removeIngredientAction("123")).toEqual({
                                                    type: REMOVE_INGREDIENT,
                                                    payload: { sID : "123" } });
    });

    it('Calls swapIngredientsAction, returns a correct ' + 
       'SWAP_INGREDIENTS action', () => {
        expect(swapIngredientsAction(1, 2)).toEqual({
                                                    type: SWAP_INGREDIENTS,
                                                    payload: { nFirst : 1,
                                                               nSecond : 2 } });
    });

    it('Calls setBunAction, returns a correct ' + 
       'SET_BUN action', () => {
        expect(setBunAction({
                     _id : '60d3b41abdacab0026a733c7',
                     name : 'Флюоресцентная булка R2-D3',
                     type : 'bun',
                     proteins : 44,
                     fat : 26,
                     carbohydrates : 85,
                     calories : 643,
                     price : 988,
                     image : 'https://code.s3.yandex.net/react/code/bun-01.png',
                     image_mobile :
                      'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                     image_large :
                       'https://code.s3.yandex.net/react/code/bun-01-large.png',
                     __v : 0,
                     sDragType : 'bun' })).toEqual({ type: SET_BUN,
                                                     payload: { oBun : {
                     _id : '60d3b41abdacab0026a733c7',
                     name : 'Флюоресцентная булка R2-D3',
                     type : 'bun',
                     proteins : 44,
                     fat : 26,
                     carbohydrates : 85,
                     calories : 643,
                     price : 988,
                     image : 'https://code.s3.yandex.net/react/code/bun-01.png',
                     image_mobile :
                      'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                     image_large :
                       'https://code.s3.yandex.net/react/code/bun-01-large.png',
                     __v : 0,
                     sDragType : 'bun'
                } } });
    });
});