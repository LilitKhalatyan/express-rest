"use strict";

console.log("Running server -- stud-controller.js");

const books = [
  {
    id: 1,
    title: "Book ###1",
    isPublic: true,
  },
  {
    id: 2,
    title: "Book ###2",
    isPublic: true,
  },
  {
    id: 3,
    title: "Book ###3",
    isPublic: true,
  },
];

class BookCtrl {
  static async getBookController(request, response) {
    return response.send({
      data: books,
    });
  }

  static async postBookController(request, response) {
    const requestQuery = request.query;
    let id = books.length;

    books.push({
      id: Number(++id),
      ...requestQuery,
    });

    return response.send({
      data: books,
    });
  }

  static async deleteBookController(request, response) {
    const requestQuery = request.query;

    books.splice(requestQuery.id - 1, 1);

    return response.send({
      data: books,
    });
  }

  static async editBookController(request, response) {
    const requestQuery = request.query;

    books.map((elem) => {
      if (elem.id === +requestQuery.id) {
        elem.title = requestQuery.title;
      }
    });
    return response.send({
      data: books,
    });
  }
}

module.exports = BookCtrl;
