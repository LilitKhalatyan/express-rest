"use strict";

console.log("Running server -- country-controller.js");

const Countries = require( '../schemas/countries.js');

class CountryCtrl {
  static async getCountriesController(request, response) {
    const countries = await Countries.find();
    
    return response.send({
      data: countries,
    });
  }

  static async postCountriesController(request, response) {
    const countryBody = request.body;
    console.log('countryBody', countryBody);
    console.log('country', Countries);

    const saveData = await Countries.create(countryBody);

    return response.send({
      data: saveData
    });
  }

  static async deleteCountriesController(request, response) {
    const requestQuery = request.query;

    const result = await Countries.deleteOne({
      _id: requestQuery._id,
    });

    // console.log("deleted document", result);

    if (result.deletedCount === 0) {
      return response
      .status(404)
      .send({message: 'Contact not found'})
    }

    return response
    .status(204)
    .send({message: 'Data was deleted'});
  }

  static async editCountriesController(request, response) {
    const requestQuery = request.query;
    // const requestBody = request.body;

    const result = await Countries.updateOne(
      {_id: requestQuery._id}, 
      // {firstName: requestBody.firstName},
      // {lastName: requestBody.lastName},
      // {age: requestBody.age},
      // {lastModified: Date.now()}
      );

    // console.log("deleted document", result);

    if (result.modifiedCount === 0) {
      return response
      .status(404)
      .send({message: 'Data was modified'});
    }

    return response
    .status(204)
    .send()
  }

}
module.exports = CountryCtrl;
