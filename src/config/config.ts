export const oSettings = {
    sAPIBaseURL : "https://norma.nomoreparties.space/api",
    oAPIURIS : { sIngredients : "/ingredients",
                 sOrders : "/orders",
                 sForgotPassword : "/password-reset",
                 sResetPassword : "/password-reset/reset",
                 sRegisterUser : "/auth/register",
                 sRefreshToken : "/auth/token",
                 sUserData : "/auth/user",
                 sLogin : "/auth/login",
                 sExit : "/auth/logout"} as const,
    oCookiesLifetime : { nRefresh : 365000,
                         nAccess : 365000 } as const,
    oAPIWS : { sAllOrders : "wss://norma.nomoreparties.space/orders/all",
               sUserOrders : "wss://norma.nomoreparties.space/orders"}
} as const;