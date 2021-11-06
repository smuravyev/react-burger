export const oErrorCodes = {
    EC_GENERAL_ERROR : "Произошла ошибка. Попробуйте, пожалуйста, позже.",
    EC_COULD_NOT_FETCH_INGREDIENTS : "Ошибка загрузки списка ингредиентов. " +
                                     "Пожалуйста, попробуйте позже.",
    EC_INVALID_INGREDIENTS_DATA : "Загружен неверный формат списка " + 
                                  "ингредиентов. Пожалуйста, попробуйте позже.",
    EC_BAD_ACTION_FOR_PRICE : "Ошибка при подсчёте стоимости заказа. " + 
                              "Пожалуйста, сообщите об этом администрации " +
                              "бургерной. Приносим извинения за временные " + 
                              "неудобства.",
    EC_CANNOT_CREATE_ORDER : "Ошибка создания заказа. " +
                             "Пожалуйста, попробуйте позже.",
    EC_MUST_HAVE_A_BUN : "Невозможно приготовить бургер без булки. " +
                         "Пожалуйста, добавьте булку в заказ."
};

export const oIngredientTypes = {
    oBun : {
        sName: "bun",
        sCaption: "Булки"},
    oSauce : {
        sName: "sauce",
        sCaption: "Соусы"
    },
    oMain : {
        sName: "main",
        sCaption: "Начинки"
    } 
};

export const oIngredientDragTypes = {
    sBun : "bun",
    sFilling : "filling",
    sExistingFilling : "existing_filling"
}

export const oPages = {
    sBurgerPage : 'burger',
    sProfilePage : 'profile',
    sListPage : 'list'
}

export const aIngredientsTemplate = [{sName : oIngredientTypes.oBun.sCaption,
                                      sType : oIngredientTypes.oBun.sName,
                                      aSet : []},
                                     {sName : oIngredientTypes.oSauce.sCaption,
                                      sType : oIngredientTypes.oSauce.sName,
                                      aSet : []},
                                     {sName : oIngredientTypes.oMain.sCaption,
                                      sType : oIngredientTypes.oMain.sName,
                                      aSet : []}];

export const sModalSelector = "#modals";