"use strict";

console.log("Running server -- region-controller.js");

const Regions = require( '../schemas/regions.js');

class RegionCtrl {
  static async getRegionsController(request, response) {
    const regions = await Regions.find();
    
    return response.send({
      data: regions,
    });
  }

  static async postRegionsController(request, response) {
    const regionBody = request.body;
    console.log('regionBody', regionBody);
    console.log('region', Regions);

    const saveData = await Regions.create(regionBody);

    return response.send({
      data: saveData
    });
  }

  static async deleteRegionsController(request, response) {
    const requestQuery = request.query;

    const result = await Regions.deleteOne({
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

  static async editRegionsController(request, response) {
    const requestQuery = request.query;
    // const requestBody = request.body;

    const result = await Regions.updateOne(
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
module.exports = RegionCtrl;
