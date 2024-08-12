import DataPet from "../data-helper/datapet"
import Params from "../data-helper/params";

describe('Pet Tests', () => {

  const datapet = new DataPet;
  const params = new Params;
  var url = params.url();

  it('Add a new pet the store', () => {

    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: datapet.bodyPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })


  it('Update pet an existing pet', () => {

    cy.request({
      method: 'PUT',
      url: url + '/v2/pet',
      body: datapet.updatePayload("Fat doggie")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find pet by id', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/100',
        qs: { id:100 } 
    }).then((response) => {
        expect(response.status).to.eq(200) 
    })
  })

  it('Finds pets by status', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet/findByStatus', // Doğru endpoint
      qs: { status: 'available' }, // Query parametresi
      failOnStatusCode: false // Yanıt kodları test başarısını etkilemeyecek
    }).then((response) => {
      expect(response.status).to.eq(200); // Beklenen durum kodu
      // Yanıtın içeriğini kontrol edebilirsiniz
    });
  });
  

  it('Place an order for a pet', () => {

    cy.request({
      method: 'POST',
      url: url + '/v2/store/order',
      body: datapet.bodyPayloadOrder(),
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  

  it('Deletes a pet', () => {
    const petId = '100'

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/100',
      headers: datapet.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('Delete purchase order by id', () => {
    const orderId = '1'

    cy.request({
      method: 'DELETE',
      url: url + '/v2/store/order/1',
      headers: datapet.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  
  it('Delete a non-existent pet', () => {

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/10101010101',
      headers: datapet.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })
    
})
