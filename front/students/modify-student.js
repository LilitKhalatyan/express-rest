// const { response } = require("express");

console.log('Hello from front');

(async () => {
    const response = await fetch('http://localhost:3000/students', {
        method: 'GET',
    })
    
    const body = await response.json();
    console.log('body', body);

    const data = body.data;

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (const student of data) {
        const row = document.createElement('tr');

        for (const key in student) {

            const cell = document.createElement("td");
            const cellText = document.createTextNode(student[key]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}) ();