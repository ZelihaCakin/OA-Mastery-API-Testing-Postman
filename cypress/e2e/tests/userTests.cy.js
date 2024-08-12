import Data from "../data-helper/data"
import Params from "../data-helper/params";

describe('User Tests', () => {

  const data = new Data;
  const params = new Params;
  var url = params.url();

  it('Create User', () => {

    cy.request({
      method: 'POST',
      url: url + '/v2/user',
      body: data.bodyPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update User', () => {

    cy.request({
      method: 'PUT',
      url: url + '/v2/user/beren',
      body: data.updatePayload("beren", "Beren")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update User Again', () => {

    cy.request({
      method: 'PUT',
      url: url + '/v2/user/eymen',
      body: data.updatePayload("eymen", "Eymen")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Get User By User Name', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/eymen',
        qs: { username: 'eymen' } 
    }).then((response) => {
        expect(response.status).to.eq(200) 
    })
})

})
