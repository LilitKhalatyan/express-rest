"use strict";

console.log("Running server -- stud-controller.js");

const Students = require( '../schemas/students.js');

class StudCtrl {
  static async getStudentsController(request, response) {
    const students = await Students.find();
    
    return response.send({
      data: students,
    });
  }

  static async postStudentsController(request, response) {
    const studentBody = request.body;
    console.log('studentbody', studentBody);
    console.log('student', Students);

    const saveData = await Students.create(studentBody);

    return response.send({
      data: saveData
    });
  }

  static async deleteStudentsController(request, response) {
    const requestQuery = request.query;

    const result = await Students.deleteOne({
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

  static async editStudentsController(request, response) {
    const requestQuery = request.query;
    const requestBody = request.body;

    const result = await Students.updateOne(
      {_id: requestQuery._id}, 
      {title: requestBody.title}
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
module.exports = StudCtrl;
