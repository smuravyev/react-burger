export const oErrorCodes = {
    EC_COULD_NOT_FETCH_INGREDIENTS : "Ошибка загрузки списка ингредиентов. Пожалуйста, попробуйте позже.",
    EC_INVALID_INGREDIENTS_DATA : "Загружен неверный формат списка ингредиентов. Пожалуйста, попробуйте позже."
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
                               oContent : [],
                               nPrice: 0};

export const sModalSelector = "#modals";