export const oErrorCodes = {
    EC_GENERAL_ERROR : "Произошла ошибка. Попробуйте, пожалуйста, позже.",
    EC_COULD_NOT_FETCH_INGREDIENTS : "Ошибка загрузки списка ингредиентов. Пожалуйста, попробуйте позже.",
    EC_INVALID_INGREDIENTS_DATA : "Загружен неверный формат списка ингредиентов. Пожалуйста, попробуйте позже.",
    EC_BAD_ACTION_FOR_PRICE : "Ошибка при подсчёте стоимости заказа. Пожалуйста, сообщите об этом администрации бургерной. Приносим извинения за временные неудобства.",
    EC_CANNOT_CREATE_ORDER : "Ошибка создания заказа. Пожалуйста, попробуйте позже.",
    EC_BAD_ACTION_FOR_USED_INGREDIENTS : "Ошибка в логике хранилища использованных ингредиентов. Пожалуйста, сообщите об этом администрации бургерной. Приносим извинения за временные неудобства."
};

export const oIngredientTypes = {
    sBun : "bun",
    sSauce : "sauce",
    sMain : "main" 
};

export const oIngredientsTemplate = [{sName : "Булки",
                                      sType : oIngredientTypes.sBun,
                                      aSet : []},
                                     {sName : "Соусы",
                                      sType : oIngredientTypes.sSauce,
                                      aSet : []},
                                     {sName : "Начинки",
                                      sType : oIngredientTypes.sMain,
                                      aSet : []}];
                              
export const oBurgerTemplate = {oBun : {},
                                aContent : []};

export const sModalSelector = "#modals";