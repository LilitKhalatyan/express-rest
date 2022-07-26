// const { response } = require("express");

console.log('Hello from reg.js');

const saveBtn = document.getElementById('info');
saveBtn.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const region = document.getElementById('region')
    const studentPassword = document.getElementById('studentPassword').value;


    const requestBody = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        region: region,
        studentPassword: studentPassword
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
        const body = await response.json();
        console.log(body); 

      } catch (error) {
        console.log('error', error);
      }
});