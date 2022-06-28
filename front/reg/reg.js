// const { response } = require("express");

console.log('Hello from reg.js');

const saveBtn = document.getElementById('info');
saveBtn.addEventListener('click', async () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const requestBody = {
        firstName: firstName,
        lastName: lastName
    };
    console.log('Request body', requestBody);

    try {
        const response = await fetch("http://localhost:3000/students", {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.log('error', error);
      }

    const saveData = document.getElementById("saveData");
});