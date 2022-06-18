let students = require('../routers/students.js');

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

    return students = students.map((e) => {
      if (e.id === requestQuery.id) {
        e.title = requestQuery.title;
      }
    });
  }
}

module.exports = {
  StudCtrl,
};
