// const { response } = require("express");

console.log('Hello from front');

(async () => {
    const response = await fetch('http://localhost:3000/students', {
        method: 'GET',
    })
    
    const body = await response.json();
    console.log('body', body);
}) ()