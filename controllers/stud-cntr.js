"use strict";

console.log("Running server -- stud-controller.js");

const students = [
  {
    id: 1,
    title: "Student #1",
    isPublic: true,
  },
  {
    id: 2,
    title: "Student #2",
    isPublic: true,
  },
  {
    id: 3,
    title: "Student #3",
    isPublic: true,
  },
];

class StudCtrl {
  static async getStudentsController(request, response) {
    return response.send({
      data: students,
    });
  }

  static async postStudentsController(request, response) {
    const requestQuery = request.query;
    let id = students.length;

    students.push({
      id: ++id,
      ...requestQuery,
    });

    return response.send({
      data: students,
    });
  }

  static async deleteStudentsController(request, response) {
    const requestQuery = request.query;

    students.splice(requestQuery.id - 1, 1);

    return response.send({
      data: students,
    });
  }

  static async editStudentsController(request, response) {
    const requestQuery = request.query;

    students.map((elem) => {
      if (elem.id === +requestQuery.id) {
        elem.title = requestQuery.title;
      }
    });
    return response.send({
      data: students,
    });
  }
}

module.exports = StudCtrl;
