import { reducerBurgerConstructor } from './burger-constructor'

import { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN } from '../actions/burger-constructor';

import type { TBurgerConstructorAction } from'../actions/burger-constructor';
    
describe('Testing the Burger Constructor reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerBurgerConstructor(undefined,
                                    {} as TBurgerConstructorAction)).toEqual({
            oBun : null,
            aContent : [] 
        });
    });

    describe('CLEAR_BURGER action tests', () => {

        it('CLEAR_BURGER: set the state to initial one.' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : CLEAR_BURGER } )).toEqual({ oBun : null,
                                                          aContent : []  });
        });
    });

    describe('ADD_INGREDIENT action tests', () => {

        it('ADD_INGREDIENT: does nothing if no payload passed' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT } as
                                            TBurgerConstructorAction)).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ]
            });
        });

        it('ADD_INGREDIENT: does noting: payload exists, but neither ' +
           'oIngredient, nor nIndex passed', () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT,
                       payload: {} } as
                                            TBurgerConstructorAction)).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ]
            });
        });

        it('ADD_INGREDIENT: does noting: payload exists, nIndex passed, but ' +
           'there is no oIngredient', () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT,
                       payload: { nIndex : 0 } } as
                                            TBurgerConstructorAction)).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ]
            });
        });

        it('ADD_INGREDIENT: add an ingredient to empty aContent. Notice: ' +
           'bun should left intact.', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [ ] }, { type : ADD_INGREDIENT,
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
                        sDragType : 'filling' }
                        } });
            const nFoundIndexOfAddedIngredient =
                             stateResult.aContent.findIndex(oIngredient =>
                                oIngredient._id === '60d3b41abdacab0026a733cd');
                                
            expect(nFoundIndexOfAddedIngredient).toEqual(0);
            // It should be only one item there.
            expect(stateResult.aContent.length).toEqual(1);
            // Item with zero index must be defined.
            expect(stateResult.aContent).toBeDefined();
            // And it shoudl have all the properties:
            expect(stateResult.aContent[0]).toMatchObject({
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
                        sDragType : 'filling'});
            // sInnerID should be defined
            expect(stateResult.aContent[0].sInnerID).toBeDefined();
            // The bun should left intact
            expect(stateResult.oBun).toEqual({
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
            });
        });

        it('ADD_INGREDIENT: internal item ID should have correct type', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [ ] }, { type : ADD_INGREDIENT,
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
                        sDragType : 'filling' }
                        } });
            const sID = stateResult.aContent[0].sInnerID;
            expect(sID).toBeDefined();
            expect(typeof sID).toEqual("string");
            expect(/^[0-9]+$/.test(sID || "")).toBeTruthy();
        });

        //Next test will be repeated 100 times!
        const nNumberOfIDGenTests = 100 as const;
        
        for(let nTestCounter = 0;
            nTestCounter < nNumberOfIDGenTests;
            nTestCounter++){
            it('ADD_INGREDIENT: IDs of the several added ingredients should be '
               + 'unique. Adding 1000 ingredients, retry ' +
               String(nTestCounter + 1) + 
               ' out of ' + nNumberOfIDGenTests, () => {
                // Initializing the state
                let state = reducerBurgerConstructor(undefined,
                                                {} as TBurgerConstructorAction);
                let bUnique : boolean = true;

                const nNumberOfIngredientsToAdd = 1000 as const;

                const aIDs : Array<string> = [];

                // Stop test if bUnique become false!
                for(let nCounter = 0;
                    (nCounter < nNumberOfIngredientsToAdd) &&
                    (bUnique === true);
                    nCounter++){
                    state =  reducerBurgerConstructor(state,
                                                      { type : ADD_INGREDIENT,
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
                        sDragType : 'filling' }
                        } } );
                    bUnique =
                           (aIDs.indexOf(state.aContent[0].sInnerID || "") < 0);
                    aIDs.push(state.aContent[0].sInnerID || "");
                }

                // And we have all of them
                expect(state.aContent.length).toEqual(nNumberOfIngredientsToAdd);
            
                // Expect that all the elements are unique
                expect(bUnique).toBeTruthy();            
            });
        }

        it('ADD_INGREDIENT: If the negative nIndex passed, the ingredient ' +
           'should be added to the top', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT,
                       payload: { nIndex : -100500,
                                  oIngredient : {
                        _id : 'unique_thing',
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
                        sDragType : 'filling' }
                        } });
            expect(stateResult.aContent[0]._id).toEqual('unique_thing');
        });

        it('ADD_INGREDIENT: If the nIndex passed is greater than the length ' +
           'of aContent, the ingredient ' +
           'should be added to the top', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT,
                       payload: { nIndex : 2,
                                  oIngredient : {
                        _id : 'unique_thing',
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
                        sDragType : 'filling' }
                        } });
            expect(stateResult.aContent[0]._id).toEqual('unique_thing');
        });


        it('ADD_INGREDIENT: should add the ingredient to the bottom', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : ADD_INGREDIENT,
                       payload: { nIndex : 1,
                                  oIngredient : {
                        _id : 'unique_thing',
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
                        sDragType : 'filling' }
                        } });
            
            // First ingredient left intact
            expect(stateResult.aContent[0]._id)
                                           .toEqual('60d3b41abdacab0026a733cd');
            // New ingredient is at the bottom
            expect(stateResult.aContent[stateResult.aContent.length - 1]._id)
                                                       .toEqual('unique_thing');
        });

        it('ADD_INGREDIENT: should add the ingredient to the middle', () => {
            const stateResult = reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '5404016428467155821'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }

                ] }, { type : ADD_INGREDIENT,
                       payload: { nIndex : 1,
                                  oIngredient : {
                        _id : '3',
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
                        sDragType : 'filling' }
                        } });
            expect(stateResult.aContent[0]._id).toEqual('1');
            expect(stateResult.aContent[1]._id).toEqual('3');
            expect(stateResult.aContent[2]._id).toEqual('2');
        });
    });

    describe('REMOVE_INGREDIENT action tests', () => {

        it('REMOVE_INGREDIENT: should do nothing if no payload' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : REMOVE_INGREDIENT } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('REMOVE_INGREDIENT: do nothing if sID is undefined' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : REMOVE_INGREDIENT,
                       payload : {} } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('REMOVE_INGREDIENT: do nothing if sID refers to the absent ' +
           'ingredient' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : REMOVE_INGREDIENT,
                       payload : { sID : '60d3b41abdacab0026a733cdsdf' } } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('REMOVE_INGREDIENT: removes the last ' +
           'ingredient' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : REMOVE_INGREDIENT,
                       payload : { sID : '540401642846715582' } } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [] });
        });

        it('REMOVE_INGREDIENT: removes the ingredient ' +
           'ingredient' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : REMOVE_INGREDIENT,
                       payload : { sID : '1' } } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }] });
        });

        it('REMOVE_INGREDIENT: removes only the 1st ingredient '+ 
           'if they suddenly has the same sInnerID', () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : REMOVE_INGREDIENT,
                       payload : { sID : '1' } } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }] });
        });
    });

    describe('SWAP_INGREDIENTS action tests', () => {

        it('SWAP_INGREDIENTS: should do nothing if no payload' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should do nothing, payload exists, but no ' +
           'indexes passed' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: {} } as TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: 0, 1' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 0,
                                  nSecond : 1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: 1, 0' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 1,
                                  nSecond : 0} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: -1, 1, negative = 0' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : -1,
                                  nSecond : 1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: 1, -1, negative = 0' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 1,
                                  nSecond : -1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: 100, 1, too big index = 0' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 100,
                                  nSecond : 1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change elements number 0 and 1, ' +
           'passed: 1, 100, too big index = 0' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 1,
                                  nSecond : 100} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should change nothing, ' +
           'passed: 0, 0, same indexes passed' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 0,
                                  nSecond : 0} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should place ingredient 0 to the bottom, ' +
           'passed: 0, 2, total ingredients count is 3' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 0,
                                  nSecond : 2} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    }
                ] });
        });

        it('SWAP_INGREDIENTS: should place ingredient 0 to the middle, ' +
           'passed: 0, 1, total ingredients count is 3' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 0,
                                  nSecond : 1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] });
        });
        
        it('SWAP_INGREDIENTS: should place ingredient 2 to the top, ' +
           'passed: 2, 0, total ingredients count is 3' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 2,
                                  nSecond : 0} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    },
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] });
        });
        it('SWAP_INGREDIENTS: should place ingredient 2 to the middle, ' +
           'passed: 2, 1, total ingredients count is 3' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    }
                ] }, { type : SWAP_INGREDIENTS,
                       payload: { nFirst : 2,
                                  nSecond : 1} } )).toEqual({
                oBun : {
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
                },
                aContent: [
                    {
                        _id : '1',
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
                        sDragType : 'filling',
                        sInnerID : '1'
                    },
                    {
                        _id : '3',
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
                        sDragType : 'filling',
                        sInnerID : '3'
                    },
                    {
                        _id : '2',
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
                        sDragType : 'filling',
                        sInnerID : '2'
                    }
                ] });
        });
    });

    describe('SET_BUN action tests', () => {

        it('SET_BUN: changes nothing if there is no payload' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : SET_BUN } as
                                           TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('SET_BUN: changes nothing, there is payload, no oBun' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : SET_BUN,
                       payload: {} } as TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('SET_BUN: sets oBun, initial oBun is null' , () => {
            expect(reducerBurgerConstructor({
                oBun : null,
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : SET_BUN,
                       payload: { oBun: {
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
                } } } as TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });

        it('SET_BUN: replaces oBun, initial oBun is not null' , () => {
            expect(reducerBurgerConstructor({
                oBun : {
                     _id : 'old oBun',
                     name : 'old Name',
                     type : 'bun',
                     proteins : 4,
                     fat : 2,
                     carbohydrates : 5,
                     calories : 64,
                     price : 98,
                     image : 'image',
                     image_mobile : 'image_mobile',
                     image_large : 'image_large',
                     __v : 1,
                     sDragType : 'bun'
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] }, { type : SET_BUN,
                       payload: { oBun: {
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
                } } } as TBurgerConstructorAction )).toEqual({
                oBun : {
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
                },
                aContent: [
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
                        sDragType : 'filling',
                        sInnerID : '540401642846715582'
                    }
                ] });
        });
    });
});

