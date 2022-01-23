import { oSettings } from "../..//src/config/config";

describe("Happy path: ordering a burger with existing login and password",
         function() {
    before(function() {
        cy.intercept("GET", 
                     oSettings.sAPIBaseURL + 
                     oSettings.oAPIURIS.sIngredients,
                     {fixture: "ingredients.json"}).as("getIngredients")
          .visit("http://localhost:3000");
    });
    
    it("Should open main page with constructor page", function() {
        cy.contains("Соберите бургер");
        cy.contains("Добавьте, пожалуйста, булку");
    });

    const oPriceData = {
        nBunPrice : 0,
        aSaucePrices : [] as Array<number>,
        aMainPrices : [] as Array<number>
    };
        
    const calculatePrice = () => {
        let nResult = oPriceData.nBunPrice * 2;
        for(let nCounter = 0;
            nCounter < oPriceData.aSaucePrices.length;
            nCounter++){
            nResult = nResult + oPriceData.aSaucePrices[nCounter];
        }
        for(let nCounter = 0;
            nCounter < oPriceData.aMainPrices.length;
            nCounter++){
            nResult = nResult + oPriceData.aMainPrices[nCounter];
        }
        
        return nResult;
    };

    it("Should drag a test bun #1 into a burger, price should be " +
       "calculated correctly", function() {

        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_section]").as("bunDropZone")
          .get("[class^=burger-constructor_total_price]").as("totalPrice")
          .get("[class^=burger-ingredients_items__scrollable]")
          .find("[class^=burger-ingredients_items]")
          .first()
          .find("[draggable=true]")
          .first().as("burgerBun")
          .get("@burgerBun")
          .find("[class^=ingredients_digits]")
          .then( jqElement => {
              oPriceData.nBunPrice = parseInt(jqElement.html());
          })
          .get("@burgerBun")
          .should("contain", "TEST BUN #1") 
          .get("@burgerBun")
          .trigger("dragstart")
          .get("@bunDropZone")
          .trigger("drop")
          .get("[class^=burger-constructor_section]")
          .first()
          .should("contain", "TEST BUN #1 (верх)")
          .should("contain", "TEST BUN #1 (низ)")
          .get("@burgerBun").find('[class^=counter_counter__num]')
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(2);
          })
          .get("@totalPrice")
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(calculatePrice());
          });
    });

    it("Should click on the next bun, find out it's information, press ESC," +
       " and then replace the current bun with this new one, " + 
       " price should be recalculated", function() {
        
        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_section]").as("bunDropZone")
          .get("[class^=burger-constructor_total_price]").as("totalPrice")
          .get("[class^=burger-ingredients_items__scrollable]")
          .find("[class^=burger-ingredients_items]")
          .first()
          .find("[draggable=true]")
          .last().as("burgerBun")
          .get("@burgerBun")
          .find("[class^=ingredients_digits]")
          .then( jqElement => {
              oPriceData.nBunPrice = parseInt(jqElement.html());
          })
          .get("@burgerBun")
          .should("contain", "TEST BUN #2") 
          .get("@burgerBun")
          .trigger("click")
          .wait(500)
          .get("[class^=modal_modal__header]")
          .should("contain", "Детали")
          .get("[class^=ingredient-details_figure]")
          .should("contain", "TEST BUN #2")
          .get("body")
          .type("{esc}")
          .get("@burgerBun")
          .trigger("dragstart")
          .get("@bunDropZone")
          .trigger("drop")
          .get("[class^=burger-constructor_section]")
          .first()
          .should("contain", "TEST BUN #2 (верх)")
          .should("contain", "TEST BUN #2 (низ)")
          .get("@burgerBun").find('[class^=counter_counter__num]')
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(2);
          })
          .get("@totalPrice")
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(calculatePrice());
          });
    });

    it("Should click on the main #1, find out it's information, click" +
       " close and then add the main, " + 
       " price should be recalculated", function() {
        
        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_section]").as("bunDropZone")
          .get("[class^=burger-constructor_total_price]").as("totalPrice")
          .get("[class^=burger-ingredients_items__scrollable]")
          .find("[class^=burger-ingredients_items]")
          .last()
          .find("[draggable=true]")
          .first().as("burgerMain")
          .get("@burgerMain")
          .find("[class^=ingredients_digits]")
          .then( jqElement => {
              oPriceData.aMainPrices.push(parseInt(jqElement.html()));
          })
          .get("@burgerMain")
          .should("contain", "TEST MAIN #1") 
          .get("@burgerMain")
          .trigger("click")
          .wait(500)
          .get("[class^=modal_modal__header]")
          .should("contain", "Детали")
          .get("[class^=ingredient-details_figure]")
          .should("contain", "TEST MAIN #1")
          .get("[class^=modal_modal__close]")
          .trigger("click")
          .get("@burgerMain")
          .trigger("dragstart")
          .get("@bunDropZone")
          .trigger("drop")
          .get("[class^=burger-constructor_section]")
          .first()
          .should("contain", "TEST MAIN #1")
          .get("@burgerMain").find('[class^=counter_counter__num]')
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(1);
          })
          .get("@totalPrice")
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(calculatePrice());
          });
    });

    it("Should click on the sauce #1, find out it's information, click outside"
       + " of a modal and then add the sauce to the top, " + 
       " price should be recalculated", function() {
        
        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_section]").as("bunDropZone")
          .get("[class^=burger-constructor_total_price]").as("totalPrice")
          .get("[class^=burger-ingredients_items__scrollable]")
          .find("[class^=burger-ingredients_items]")
          .eq(1)
          .find("[draggable=true]")
          .first().as("burgerSauce")
          .get("@burgerSauce")
          .find("[class^=ingredients_digits]")
          .then( jqElement => {
              oPriceData.aSaucePrices.push(parseInt(jqElement.html()));
          })
          .get("@burgerSauce")
          .should("contain", "TEST SAUCE #1") 
          .get("@burgerSauce")
          .trigger("click")
          .wait(500)
          .get("[class^=modal_modal__header]")
          .should("contain", "Детали")
          .get("[class^=ingredient-details_figure]")
          .should("contain", "TEST SAUCE #1")
          .get("body")
          .click(0, 0)
          .get("@burgerSauce")
          .trigger("dragstart")
          .get("@bunDropZone")
          .trigger("drop")
          .get("[class^=burger-constructor_section]")
          .first()
          .should("contain", "TEST SAUCE #1")
          .get("@burgerSauce").find('[class^=counter_counter__num]')
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(1);
          })
          .get("@totalPrice")
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(calculatePrice());
          });
    });

    it("Should move TEST SAUCE #1 to the bottom",
       function() {
        
        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .first()
          .trigger("dragstart")
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .last()
          .trigger("drop")
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .first()
          .should("contain", "TEST MAIN #1")
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .last()
          .should("contain", "TEST SAUCE #1")
    });

    it("Should click on the sauce #2, find out it's information, click outside"
       + " of a modal and then add this sauce after main, " + 
       " price should be recalculated", function() {
        
        // eslint-disable-next-line        
        cy.wait(1000)
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .first().as("bunDropZone")
          .get("[class^=burger-constructor_total_price]").as("totalPrice")
          .get("[class^=burger-ingredients_items__scrollable]")
          .find("[class^=burger-ingredients_items]")
          .eq(1)
          .find("[draggable=true]")
          .last().as("burgerSauce")
          .get("@burgerSauce")
          .find("[class^=ingredients_digits]")
          .then( jqElement => {
              oPriceData.aSaucePrices.push(parseInt(jqElement.html()));
          })
          .get("@burgerSauce")
          .should("contain", "TEST SAUCE #2") 
          .get("@burgerSauce")
          .trigger("click")
          .wait(500)
          .get("[class^=modal_modal__header]")
          .should("contain", "Детали")
          .get("[class^=ingredient-details_figure]")
          .should("contain", "TEST SAUCE #2")
          .get("body")
          .click(0, 0)
          .get("@burgerSauce")
          .trigger("dragstart")
          .get("@bunDropZone")
          .trigger("drop", "bottom")
          .get("[class^=burger-constructor_section]")
          .first()
          .should("contain", "TEST SAUCE #2")
          .get("@burgerSauce").find('[class^=counter_counter__num]')
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(1);
          })
          .get("@totalPrice")
          .then(jqElement => {
             expect(parseInt(jqElement.html())).equals(calculatePrice());
          });
    });
    
    it("Should remove sauce #1", function() {    
        cy.wait(1000)
          .get("[class^=burger-constructor_list_scrollable]")
          .find("[class^=filling_item__]")
          .last()
          .find("[class^=constructor-element__action]")
          .click()
          .get("[class^=burger-constructor_list_scrollable]")
          .should("not.contain", "TEST SAUCE #1");
    });

    it("Should click the order creation button, enter the login" +
       " and the password, click enter button", function() {     
        cy.wait(1000)
          .intercept("POST", 
                     oSettings.sAPIBaseURL + 
                     oSettings.oAPIURIS.sLogin,
                     { fixture : "login.json"}).as("getLogin")
          .get("[class^=burger-constructor_section__]")
          .find("[class^=button_button]")
          .contains("Оформить заказ")
          .click()
          .wait(500)
          .get("[class^=login-form_centered_section]").as("loginForm")
          .should("contain", "Вход")
          .find("input[name='email']")
          .type("test@test.ru")
          .get("@loginForm")
          .find("input[name='password']")
          .type("qweRTY123")
          .get("@loginForm")
          .find("[class^=button_button]")
          .click()
          .wait(500)
          .getCookie("accessToken").should('not.be.empty')
          .getCookie("refreshToken").should('not.be.empty')
          .get("body").should("contain", "Соберите бургер");
    });


    it("Should click the order creation button again and the order should" +
       " be submitted, the popup with the number will be shown", function() {
        cy.wait(1000)
          .intercept("POST", 
                     oSettings.sAPIBaseURL + 
                     oSettings.oAPIURIS.sOrders,
                     { fixture : "order.json"}).as("getOrder")
          .get("[class^=burger-constructor_section__]")
          .find("[class^=button_button]")
          .contains("Оформить заказ")
          .click()
          .wait(500)
          .get("[class^=order-details_order")
          .should("contain", "000042")
    });
}); 