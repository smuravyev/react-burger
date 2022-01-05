import type { TArrayOfIngredients } from './types';

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
                         "Пожалуйста, добавьте булку в заказ.",
    EC_CANNOT_FIND_EMAIL : "Невозможно сбросить пароль по&nbsp;этому адресу. " +
                           "Пожалуйста, обратитесь к администрации бургерной.",
    EC_ERROR_FORGOT_PASSWORD : "Невозможно инициировать сброс пароля. " +
                               "Попробуйте позже, пожалуйста.",
    EC_CANNOT_RESET_PASSWORD : "Невозможно сбросить пароль по&nbsp;этому " +
                               "адресу. Пожалуйста, обратитесь к " +
                               "администрации бургерной",
    EC_ERROR_RESET_PASSWORD : "Невозможно инициировать сброс пароля. " +
                              "Проверьте корректность кода из письма или " +
                              "попробуйте позже, пожалуйста.",
    EC_INVALID_FORM_DATA : "Пожалуйста, проверьте правильность заполнения " + 
                           "полей формы.",
    EC_INVALID_ROUTE : "Вы попытались попасть на несуществующую страницу. " +
                       "Пожалуйста, попробуйте начать свой путь сначала. ",
    EC_CANNOT_REGISTER_USER : "Ошибка регистрации. Пожалуйста, обратитесь к " +
                              "сотрудникам бургерной.",
    EC_ERROR_REGISTERING_USER : "Извините, пожалуйста, за временные сложности. "
                                + "Пожалуйста, попробуйте позже.",
    EC_USER_ALREADY_EXISTS : "Такой клиент уже существует. Попробуйте войти " +
                             "или восстановить пароль.",
    EC_CANNOT_LOGIN : "Невозможно войти в систему. Пожалуйста, обратитесь к " +
                      "сотрудникам бургерной.",
    EC_INVALID_PASSWORD : "Введён неверный пароль или адрес почты. " +
                          "Попробуйте, пожалуйста, " + 
                          "восстановить пароль.",
    EC_ERROR_LOGGING_IN : "Не получилось войти в систему. Попробуйте, " +
                          "пожалуйста, позже.",
    EC_FETCH_ERROR : "Ошибка получения данных. Если вы это видите, пожалуйста" +
                     ", сообщите администрации бургерной, что здесь баг.",
    EC_ERROR_UPDATING_USER : "Ошибка обновления данных о клиенте. Попробуйте," +
                             "пожалуйста, позже.",
    EC_CANNOT_UPDATE_USER : "Невозможно обновить данные. Обратитесь, " + 
                            "пожалуйста, к представителю бургерной."  
} as const;

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
} as const;

export const oKeyCodes = {
    sUndo : "z",
    sRedo : "y"
} as const;

export const nBlurTimeout = 10 as const;
 
export const nScrollThrottleDelay = 500 as const; 

export const nMaximumRandomNumberForID = 65536 as const;

export const oIngredientDragTypes = {
    sBun : "bun",
    sFilling : "filling",
    sExistingFilling : "existing_filling"
} as const;

export const aIngredientsTemplate : TArrayOfIngredients =
                                    [{sName : oIngredientTypes.oBun.sCaption,
                                      sType : oIngredientTypes.oBun.sName,
                                      aSet : [] },
                                     {sName : oIngredientTypes.oSauce.sCaption,
                                      sType : oIngredientTypes.oSauce.sName,
                                      aSet : [] },
                                     {sName : oIngredientTypes.oMain.sCaption,
                                      sType : oIngredientTypes.oMain.sName,
                                      aSet : [] }];

export const sModalSelector = "#modals" as const;

export const nMaxDigitsInTheOrderNumber = 6 as const;