describe('booking.com and log in ', ()=>{
it('should test the log in credentials', ()=>{
// intram pe site 
cy.visit('https://www.booking.com/index.ro.html?label=gen173nr-1DCAEoggI46AdIM1gEaMABiAEBmAEguAEXyAEM2AED6AEBiAIBqAIDuALQsrmNBsACAdICJGZlNzQxZWExLTA5ZDktNGZlZC1hMjFhLTY1Mzk1MTZjMjc0ZNgCBOACAQ;sid=304341d24e5b75ce66794112bb351b24;keep_landing=1&sb_price_type=total&')

//dam click pe accept cookie
cy.get('#onetrust-accept-btn-handler').click()

//dam click pe 'Autentificati-va'
cy.get(':nth-child(6) > .bui-button > .bui-button__text').click()

//declaram 2 constante pentru mail si parola
const mail =Cypress.env("mail")
const password = Cypress.env("password")

//introducem adresa de mail
cy.get('#username').click().type(mail,{ log: false }).type('{enter}')


//dam click pe 'Continuati cu email-ul'
cy.get('.nw-signin > ._2emQHDWTNbBMVHK80Tj0A2 > ._1jp30RWusTBQoML9GSCZ_C').click()

//introducem parola
cy.get('#password').type(password,{ log: false }).click()
     
//dam click ep 'Autentificare'
cy.get('.nw-signin > ._2emQHDWTNbBMVHK80Tj0A2').click()

    
})
})
