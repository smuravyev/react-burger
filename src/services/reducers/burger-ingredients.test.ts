import { reducerBurgerIngredients } from './burger-ingredients'

import { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_SUCCESS,
         GET_INGREDIENTS_FAILED } from '../actions/burger-ingredients';

import { aIngredientsTemplate } from "../../utils/constants";

import type { TBurgerIngredientsAction } from'../actions/burger-ingredients';
    
describe('Testing the Burger Ingredients reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerBurgerIngredients(undefined,
                                      {} as TBurgerIngredientsAction)).toEqual({
            aIngredients : aIngredientsTemplate,
            bIsRequesting : false,
            bIsRequestFailed : false,
            bLoadedSuccessful : false
        });
    });
    
    describe('GET_INGREDIENTS_REQUEST action tests', () => {

        it('GET_INGREDIENTS_REQUEST: set bIsRequesting to true, ' +
           'bIsRequestFailed to false, all other data intact. Initial state: ' + 
           'false, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_REQUEST } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                });
        });
        
        it('GET_INGREDIENTS_REQUEST: set bIsRequesting to true, ' +
           'bIsRequestFailed to false, all other data intact. Initial state: ' + 
           'true, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_REQUEST } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                });
        });

        it('GET_INGREDIENTS_REQUEST: set bIsRequesting to true, ' +
           'bIsRequestFailed to false, all other data intact. Initial state: ' + 
           'false, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_REQUEST } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                });
        });

        it('GET_INGREDIENTS_REQUEST: set bIsRequesting to true, ' +
           'bIsRequestFailed to false, all other data intact. Initial state: ' + 
           'true, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_REQUEST } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                });
        });
    });

    describe('GET_INGREDIENTS_FAILED action tests', () => {

        it('GET_INGREDIENTS_FAILED: set bIsRequesting to false, ' +
           'bIsRequestFailed to true, aIngredients is reverted to the initial' +
           ' state, all other data intact. Initial state: ' + 
           'false, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : [{ sName : "Булки - тест",
                                      sType : "bun",
                                      aSet : [] },
                                    { sName : "Соусы - тест",
                                      sType : "sauce",
                                      aSet : [] },
                                    { sName : "Начинки - тест",
                                      sType : "main",
                                      aSet : [] }],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_FAILED } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                });
        });

        it('GET_INGREDIENTS_FAILED: set bIsRequesting to false, ' +
           'bIsRequestFailed to true, aIngredients is reverted to the initial' +
           ' state, all other data intact. Initial state: ' + 
           'true, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : [{ sName : "Булки - тест",
                                      sType : "bun",
                                      aSet : [] },
                                    { sName : "Соусы - тест",
                                      sType : "sauce",
                                      aSet : [] },
                                    { sName : "Начинки - тест",
                                      sType : "main",
                                      aSet : [] }],
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_FAILED } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                });
        });

        it('GET_INGREDIENTS_FAILED: set bIsRequesting to false, ' +
           'bIsRequestFailed to true, aIngredients is reverted to the initial' +
           ' state, all other data intact. Initial state: ' + 
           'false, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : [{ sName : "Булки - тест",
                                      sType : "bun",
                                      aSet : [] },
                                    { sName : "Соусы - тест",
                                      sType : "sauce",
                                      aSet : [] },
                                    { sName : "Начинки - тест",
                                      sType : "main",
                                      aSet : [] }],
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_FAILED } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                });
        });

        it('GET_INGREDIENTS_FAILED: set bIsRequesting to false, ' +
           'bIsRequestFailed to true, aIngredients is reverted to the initial' +
           ' state, all other data intact. Initial state: ' + 
           'true, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : [{ sName : "Булки - тест",
                                      sType : "bun",
                                      aSet : [] },
                                    { sName : "Соусы - тест",
                                      sType : "sauce",
                                      aSet : [] },
                                    { sName : "Начинки - тест",
                                      sType : "main",
                                      aSet : [] }],
                    bIsRequesting : true,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_FAILED } )).toEqual({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                });
        });
    });

    describe('GET_INGREDIENTS_SUCCESS action tests', () => {

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'false, false, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'true, false, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'false, true, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'false, false, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'true, true, false' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : false
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'false, true, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : false,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : true
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });

        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'true, false, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });
        
        it('GET_INGREDIENTS_SUCCESS: set bIsRequesting to false, ' +
           'bIsRequestFailed to false, aIngredients is set according to ' +
           'payload, bLoadedSuccessful is always set to true. Initial:' + 
           'true, true, true' , () => {
            expect(reducerBurgerIngredients({
                    aIngredients : aIngredientsTemplate,
                    bIsRequesting : true,
                    bIsRequestFailed : true,
                    bLoadedSuccessful : true
                }, { type : GET_INGREDIENTS_SUCCESS,
                     payload: { aIngredients: [ { sName : "Булки - тест",
                                                  sType : "bun",
                                                  aSet : [] },
                                                { sName : "Соусы - тест",
                                                  sType : "sauce",
                                                  aSet : [] },
                                                { sName : "Начинки - тест",
                                                  sType : "main",
                                                  aSet : [] } ] } } )).toEqual({
                    aIngredients : [ { sName : "Булки - тест",
                                       sType : "bun",
                                       aSet : [] },
                                     { sName : "Соусы - тест",
                                       sType : "sauce",
                                       aSet : [] },
                                     { sName : "Начинки - тест",
                                       sType : "main",
                                       aSet : [] } ],
                    bIsRequesting : false,
                    bIsRequestFailed : false,
                    bLoadedSuccessful : true
                });
        });
    });
});