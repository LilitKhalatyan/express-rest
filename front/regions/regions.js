// const { response } = require("express");

console.log('Hello from reg.js');

const saveBtn = document.getElementById('info');
saveBtn.addEventListener('click', async () => {
    const nameArm = document.getElementById('regionNameArm').value;
    const nameEn = document.getElementById('regionNameEn').value;
    const kay = document.getElementById('kay').value;

    const requestBody = {
        kay: kay,
        nameArm: nameArm,
        nameEn: nameEn
    };
    console.log('Request body', requestBody);

    try {
        const response = await fetch("http://localhost:3000/regions", {
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

    // const saveData = document.getElementById("saveData");
});